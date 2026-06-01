interface DangerHighlightProps {
  tip: string;
  children: React.ReactNode;
}

export default function DangerHighlight({ tip, children }: DangerHighlightProps) {
  return (
    <span className="danger-highlight" data-tip={tip}>
      {children}
    </span>
  )
}
