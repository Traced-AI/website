import type { ReactNode } from 'react'

interface DangerHighlightProps {
  tip: string;
  children: ReactNode;
}

export default function DangerHighlight({ tip, children }: DangerHighlightProps) {
  return (
    <span className="danger-highlight" data-tip={tip}>
      {children}
    </span>
  )
}
