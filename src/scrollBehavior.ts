// Explicit "smooth" overrides the CSS reduced-motion guard, so JS scrolls must check the preference themselves.
export function scrollBehavior(): ScrollBehavior {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}
