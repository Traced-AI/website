import { useId } from 'react'
import type { ReactNode } from 'react'

interface DangerHighlightProps {
  tip: string;
  children: ReactNode;
}

export default function DangerHighlight({ tip, children }: DangerHighlightProps) {
  const tipId = useId()
  return (
    <span className="danger-highlight" data-tip={tip} tabIndex={0} aria-describedby={tipId}>
      {children}
      <span id={tipId} className="sr-only">{tip}</span>
    </span>
  )
}
