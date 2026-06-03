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
from PIL import Image, ImageDraw, ImageFont

DEFAULT_SRC = Path("/Users/cmin/Projects/Traced AI/Media")

REPO_ROOT = Path(__file__).parent.parent
PUBLIC = REPO_ROOT / "public"

parser = argparse.ArgumentParser(description="Generate Traced AI public/ assets from source logo files.")
parser.add_argument(
    "source",
    nargs="?",
    default=str(DEFAULT_SRC),
    metavar="SOURCE_DIR",
    help=f"Directory containing source logo PNGs (default: {DEFAULT_SRC})",
)
args = parser.parse_args()

SRC = Path(args.source)
if not SRC.is_dir():
    sys.exit(f"Source directory not found: {SRC}")

LOGO_TRANSPARENT = SRC / "Logo_TracedAI_Transparent.png"
LOGO_BLACK = SRC / "Logo_TracedAI_Black.png"
AI_ICON = SRC / "AI_Transparent.png"

for f in (LOGO_TRANSPARENT, LOGO_BLACK, AI_ICON):
    if not f.exists():
        sys.exit(f"Required file missing: {f}")

# Logo content bbox (pre-measured): x=435-1546, y=844-1096 in 2000x2000 canvas
LOGO_X0, LOGO_X1 = 375, 1606   # +60px padding
LOGO_Y0, LOGO_Y1 = 784, 1156   # +60px padding

# Design tokens
BG_DARK = (9, 9, 11)           # #09090B
TEAL_DARK = (74, 181, 196)     # #4AB5C4 (dark-mode accent)
TEAL_LIGHT = (13, 138, 152)    # #0D8A98
TEXT_MID = (180, 180, 185)     # #B4B4B9 (readable on dark bg)
WHITE = (255, 255, 255)

FONT_CACHE = Path(tempfile.gettempdir()) / "traced-ai-fonts"
FONT_CACHE.mkdir(exist_ok=True)


# ── Font helpers ────────────────────────────────────────────────────────────

def _fetch_ttf(gf_family: str, weight: int, label: str) -> Path:
    """Download a TTF from Google Fonts.

    Old-Android UA is the sweet spot: Google Fonts serves TTF (not WOFF2/EOT)
    to pre-4.4 Android WebKit, which PIL/FreeType can load directly.
    """
    dest = FONT_CACHE / f"{label}.ttf"
    # Bust any previously cached EOT files (wrong UA in older script versions).
    if dest.exists():
        result = subprocess.run(["file", str(dest)], capture_output=True, text=True)
        if "OpenType" in result.stdout or "EOT" in result.stdout:
            dest.unlink()
            print(f"  Replacing cached EOT with TTF for {label}...")
        else:
            return dest
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


# ── Logo helpers ─────────────────────────────────────────────────────────────

def crop_logo(img: Image.Image) -> Image.Image:
    """Crop to padded content bbox and resize for 3x retina at 32px display height."""
    cropped = img.crop((LOGO_X0, LOGO_Y0, LOGO_X1, LOGO_Y1))
    # w=492, h=149 gives ~3x retina at 32px display height (ratio 3.3:1)
    return cropped.resize((492, 149), Image.LANCZOS)


def make_logo_dark(light_crop: Image.Image) -> Image.Image:
    """Invert black/dark pixels to white; leave teal pixels untouched."""
    img = light_crop.copy().convert("RGBA")
    pixels = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a < 10:
                continue
            is_dark = r < 80 and g < 80 and b < 80
            if is_dark:
                pixels[x, y] = (255, 255, 255, a)
    return img


# ── Favicon helpers ──────────────────────────────────────────────────────────

def crop_icon(img: Image.Image, padding: int = 40) -> Image.Image:
    """Tight crop of non-transparent content, expanded to square."""
    img = img.convert("RGBA")
    px = img.load()
    w, h = img.size
    min_x, min_y, max_x, max_y = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            if px[x, y][3] > 10:
                min_x = min(min_x, x)
                min_y = min(min_y, y)
                max_x = max(max_x, x)
                max_y = max(max_y, y)
    x0 = max(0, min_x - padding)
    y0 = max(0, min_y - padding)
    x1 = min(w, max_x + padding)
    y1 = min(h, max_y + padding)
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


def make_og(spartan_bold_path, montserrat_path, spartan_med_path) -> Image.Image:
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG_DARK)
    draw = ImageDraw.Draw(img)

    # Load white-text logo from Logo_TracedAI_Black.png (black bg, white Traced + teal icon)
    src = Image.open(LOGO_BLACK).convert("RGB")
    logo_crop = src.crop((LOGO_X0, LOGO_Y0, LOGO_X1, LOGO_Y1))
    # Make black bg transparent: convert black pixels to BG_DARK so they blend
    logo_rgba = logo_crop.convert("RGBA")
    px = logo_rgba.load()
    lw, lh = logo_rgba.size
    for y in range(lh):
        for x in range(lw):
            r, g, b, a = px[x, y]
            if r < 30 and g < 30 and b < 30:
                px[x, y] = (*BG_DARK, 255)
    logo_rgba = logo_rgba.resize((700, 212), Image.LANCZOS)
    logo_x = (W - 700) // 2
    logo_y = 72
    img.paste(logo_rgba, (logo_x, logo_y), logo_rgba)

    # Teal horizontal rule
    rule_w = 160
    rule_y = logo_y + 212 + 28
    rule_x = (W - rule_w) // 2
    draw.rectangle([rule_x, rule_y, rule_x + rule_w, rule_y + 4], fill=TEAL_DARK)

    # Tagline — Montserrat
    try:
        font_tag = ImageFont.truetype(str(montserrat_path), 52)
    except Exception:
        font_tag = ImageFont.load_default()
    tag_y = rule_y + 26
    draw_centered_text(draw, "EU AI Act audit trail for high-risk AI decisions", tag_y, font_tag, TEXT_MID, W)

    # URL — League Spartan medium
    try:
        font_url = ImageFont.truetype(str(spartan_med_path), 38)
    except Exception:
        font_url = ImageFont.load_default()
    url_y = H - 80
    draw_centered_text(draw, "traced-ai.com", url_y, font_url, TEAL_DARK, W)

    return img


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    PUBLIC.mkdir(exist_ok=True)
    print(f"Source: {SRC}")
    print("Downloading fonts...")
    spartan_bold, montserrat_reg, spartan_med = load_fonts()

    # ── Logo: light
    print("Generating logo-light.png...")
    src_light = Image.open(LOGO_TRANSPARENT).convert("RGBA")
    logo_light = crop_logo(src_light)
    logo_light.save(PUBLIC / "logo-light.png", optimize=True)

    # ── Logo: dark
    print("Generating logo-dark.png...")
    logo_dark = make_logo_dark(logo_light)
    logo_dark.save(PUBLIC / "logo-dark.png", optimize=True)

    # ── Favicon sizes from AI_Transparent.png
    print("Generating favicon sizes...")
    ai_src = Image.open(AI_ICON).convert("RGBA")
    icon_sq = crop_icon(ai_src, padding=40)

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
    og = make_og(spartan_bold, montserrat_reg, spartan_med)
    og.save(PUBLIC / "og-image.png", optimize=True)
    size_kb = (PUBLIC / "og-image.png").stat().st_size // 1024
    print(f"  og-image.png: {size_kb} KB")

    print("\nDone. Files in public/:")
    for f in sorted(PUBLIC.iterdir()):
        kb = f.stat().st_size // 1024
        print(f"  {f.name}: {kb} KB")


if __name__ == "__main__":
    main()
