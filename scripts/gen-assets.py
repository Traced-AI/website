"""
Asset generator for Traced AI public/ directory.
Produces: logo-light.png, logo-dark.png, apple-touch-icon.png,
          favicon-32.png, favicon.ico, favicon.svg, og-image.png

Run from repo root:
  python3 scripts/gen-assets.py                        # uses default source dir
  python3 scripts/gen-assets.py /path/to/Media         # explicit source dir
"""

import argparse
import base64
import re
import subprocess
import sys
import tempfile
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFont

DEFAULT_SRC = Path("/Users/cmin/Projects/Traced AI/Media")

REPO_ROOT = Path(__file__).parent.parent
PUBLIC = REPO_ROOT / "public"

# Logo content bbox (pre-measured): x=435-1546, y=844-1096 in 2000x2000 canvas
LOGO_X0, LOGO_X1 = 375, 1606   # +60px padding
LOGO_Y0, LOGO_Y1 = 784, 1156   # +60px padding

# Design tokens
BG_DARK  = (9, 9, 11)          # #09090B
TEAL_DARK = (74, 181, 196)     # #4AB5C4 (dark-mode accent)
TEXT_MID = (180, 180, 185)     # #B4B4B9 (readable on dark bg)

# Pixel thresholds
ALPHA_THRESHOLD = 10   # pixels with alpha <= this are treated as transparent
DARK_THRESHOLD  = 80   # logo: channels below this are considered black text
BG_THRESHOLD    = 30   # OG source: channels below this are solid black background

FONT_CACHE = Path(tempfile.gettempdir()) / "traced-ai-fonts"
FONT_CACHE.mkdir(exist_ok=True)


# ── Font helpers ────────────────────────────────────────────────────────────

def _fetch_ttf(gf_family: str, weight: int, label: str) -> Path:
    """Download a TTF from Google Fonts.

    Old-Android UA is the sweet spot: Google Fonts serves TTF (not WOFF2/EOT)
    to pre-4.4 Android WebKit, which PIL/FreeType can load directly.
    """
    dest = FONT_CACHE / f"{label}.ttf"
    if dest.exists():
        try:
            ImageFont.truetype(str(dest), 12)
            return dest  # cached file loads cleanly
        except OSError:
            dest.unlink()
            print(f"  Re-downloading unreadable cached font: {label}...")
    css_url = f"https://fonts.googleapis.com/css?family={gf_family}:{weight}"
    # Old Android WebKit UA — Google Fonts serves TTF to pre-4.4 Android browsers.
    android_ua = (
        "Mozilla/5.0 (Linux; U; Android 2.2; en-us; Nexus One Build/FRF91) "
        "AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
    )
    result = subprocess.run(
        ["curl", "-sL", "-A", android_ua, css_url],
        capture_output=True, text=True, check=True,
    )
    css = result.stdout
    match = re.search(r"url\(['\"]?(https://fonts\.gstatic\.com/[^'\")\s]+)['\"]?\)", css)
    if not match:
        sys.exit(f"Could not find font URL in Google Fonts CSS for {gf_family}:{weight}\nCSS:\n{css[:500]}")
    font_url = match.group(1)
    print(f"  Downloading {label}: {font_url}")
    subprocess.run(["curl", "-sL", "-o", str(dest), font_url], check=True)
    return dest


def load_fonts():
    spartan_bold = _fetch_ttf("League+Spartan", 700, "league-spartan-700")
    montserrat_reg = _fetch_ttf("Montserrat", 400, "montserrat-400")
    spartan_med = _fetch_ttf("League+Spartan", 500, "league-spartan-500")
    return spartan_bold, montserrat_reg, spartan_med


def load_font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    try:
        return ImageFont.truetype(str(path), size)
    except OSError:
        return ImageFont.load_default()


# ── Logo helpers ─────────────────────────────────────────────────────────────

def crop_logo(img: Image.Image) -> Image.Image:
    """Crop to padded content bbox and resize for 3x retina at 32px display height."""
    cropped = img.crop((LOGO_X0, LOGO_Y0, LOGO_X1, LOGO_Y1))
    # w=492, h=149 gives ~3x retina at 32px display height (ratio 3.3:1)
    return cropped.resize((492, 149), Image.LANCZOS)


def make_logo_dark(light_crop: Image.Image) -> Image.Image:
    """Invert black/dark pixels to white; leave teal pixels untouched."""
    r, g, b, a = light_crop.convert("RGBA").split()
    vis = a.point(lambda v: 255 if v >= ALPHA_THRESHOLD else 0)
    dark = ImageChops.multiply(
        r.point(lambda v: 255 if v < DARK_THRESHOLD else 0),
        ImageChops.multiply(
            g.point(lambda v: 255 if v < DARK_THRESHOLD else 0),
            ImageChops.multiply(
                b.point(lambda v: 255 if v < DARK_THRESHOLD else 0),
                vis,
            ),
        ),
    )
    white = Image.new("L", r.size, 255)
    return Image.merge("RGBA", (
        Image.composite(white, r, dark),
        Image.composite(white, g, dark),
        Image.composite(white, b, dark),
        a,
    ))


# ── Favicon helpers ──────────────────────────────────────────────────────────

def crop_icon(img: Image.Image, padding: int = 40) -> Image.Image:
    """Tight crop of non-transparent content, expanded to square."""
    img = img.convert("RGBA")
    alpha = img.split()[3].point(lambda v: 255 if v > ALPHA_THRESHOLD else 0)
    bbox = alpha.getbbox()
    if bbox is None:
        return img
    x0 = max(0, bbox[0] - padding)
    y0 = max(0, bbox[1] - padding)
    x1 = min(img.width,  bbox[2] + padding)
    y1 = min(img.height, bbox[3] + padding)
    cropped = img.crop((x0, y0, x1, y1))
    cw, ch = cropped.size
    side = max(cw, ch)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(cropped, ((side - cw) // 2, (side - ch) // 2))
    return square


# ── OG image ─────────────────────────────────────────────────────────────────

def draw_centered_text(draw, text, y, font, fill, canvas_w):
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    draw.text(((canvas_w - text_w) // 2, y), text, font=font, fill=fill)
    return bbox[3] - bbox[1]  # text height


def make_og(logo_black: Path, spartan_bold_path, montserrat_path, spartan_med_path) -> Image.Image:
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG_DARK)
    draw = ImageDraw.Draw(img)

    # Load white-text logo from Logo_TracedAI_Black.png (black bg, white Traced + teal icon)
    src = Image.open(logo_black).convert("RGB")
    logo_crop = src.crop((LOGO_X0, LOGO_Y0, LOGO_X1, LOGO_Y1))
    # Replace near-black background pixels with BG_DARK so they blend into the canvas
    r, g, b = logo_crop.split()
    r = r.point(lambda v: BG_DARK[0] if v < BG_THRESHOLD else v)
    g = g.point(lambda v: BG_DARK[1] if v < BG_THRESHOLD else v)
    b = b.point(lambda v: BG_DARK[2] if v < BG_THRESHOLD else v)
    logo_rgba = Image.merge("RGB", (r, g, b)).convert("RGBA")
    logo_rgba = logo_rgba.resize((700, 212), Image.LANCZOS)
    logo_x = (W - 700) // 2
    logo_y = 72
    img.paste(logo_rgba, (logo_x, logo_y), logo_rgba)

    # Teal horizontal rule
    rule_w = 160
    rule_y = logo_y + 212 + 28
    rule_x = (W - rule_w) // 2
    draw.rectangle([rule_x, rule_y, rule_x + rule_w, rule_y + 4], fill=TEAL_DARK)

    tag_y = rule_y + 26
    draw_centered_text(draw, "EU AI Act audit trail for high-risk AI decisions",
                       tag_y, load_font(montserrat_path, 52), TEXT_MID, W)

    url_y = H - 80
    draw_centered_text(draw, "traced-ai.com",
                       url_y, load_font(spartan_med_path, 38), TEAL_DARK, W)

    return img


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description="Generate Traced AI public/ assets from source logo files."
    )
    parser.add_argument(
        "source",
        nargs="?",
        default=str(DEFAULT_SRC),
        metavar="SOURCE_DIR",
        help=f"Directory containing source logo PNGs (default: {DEFAULT_SRC})",
    )
    args = parser.parse_args()

    src = Path(args.source)
    if not src.is_dir():
        sys.exit(f"Source directory not found: {src}")

    logo_transparent = src / "Logo_TracedAI_Transparent.png"
    logo_black       = src / "Logo_TracedAI_Black.png"
    ai_icon          = src / "AI_Transparent.png"
    for f in (logo_transparent, logo_black, ai_icon):
        if not f.exists():
            sys.exit(f"Required file missing: {f}")

    PUBLIC.mkdir(exist_ok=True)
    print(f"Source: {src}")
    print("Downloading fonts...")
    spartan_bold, montserrat_reg, spartan_med = load_fonts()

    # ── Logo: light
    print("Generating logo-light.png...")
    logo_light = crop_logo(Image.open(logo_transparent).convert("RGBA"))
    logo_light.save(PUBLIC / "logo-light.png", optimize=True)

    # ── Logo: dark
    print("Generating logo-dark.png...")
    make_logo_dark(logo_light).save(PUBLIC / "logo-dark.png", optimize=True)

    # ── Favicon sizes from AI_Transparent.png
    print("Generating favicon sizes...")
    icon_sq = crop_icon(Image.open(ai_icon).convert("RGBA"), padding=40)

    apple_touch = icon_sq.resize((180, 180), Image.LANCZOS)
    apple_touch.save(PUBLIC / "apple-touch-icon.png", optimize=True)
    icon_sq.resize((32, 32), Image.LANCZOS).save(PUBLIC / "favicon-32.png", optimize=True)

    # ── favicon.ico — multi-size ICO (16, 24, 32, 48, 64, 128, 256)
    # PIL's ICO plugin resizes from the source when given `sizes`; do NOT pass
    # append_images — it is ignored for ICO and causes only the first size to land.
    print("Generating favicon.ico...")
    ico_sizes = [(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
    icon_sq.save(PUBLIC / "favicon.ico", format="ICO", sizes=ico_sizes)

    # ── favicon.svg — base64-embedded PNG so it renders without external deps
    print("Writing favicon.svg...")
    png_b64 = base64.b64encode((PUBLIC / "apple-touch-icon.png").read_bytes()).decode()
    (PUBLIC / "favicon.svg").write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">\n'
        f'  <image href="data:image/png;base64,{png_b64}" width="180" height="180"/>\n'
        '</svg>\n'
    )

    # ── OG image
    print("Generating og-image.png...")
    og = make_og(logo_black, spartan_bold, montserrat_reg, spartan_med)
    og.save(PUBLIC / "og-image.png", optimize=True)
    size_kb = (PUBLIC / "og-image.png").stat().st_size // 1024
    print(f"  og-image.png: {size_kb} KB")

    print("\nDone. Files in public/:")
    for f in sorted(PUBLIC.iterdir()):
        kb = f.stat().st_size // 1024
        print(f"  {f.name}: {kb} KB")


if __name__ == "__main__":
    main()
