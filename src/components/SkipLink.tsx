import { ui } from '../copy'

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-bg-1 focus:px-4 focus:py-2 focus:text-tx-0"
    >
      {ui.skipToContent}
    </a>
  )
}
