import { useMemo } from 'react'
import { ENFORCEMENT_DEADLINE, EC_TIMELINE_URL } from '../config'

export default function DeadlineBadge() {
  const { text, isPast } = useMemo(() => {
    const deadline = new Date(ENFORCEMENT_DEADLINE + 'T00:00:00')
    const now = new Date()
    const days = Math.ceil((deadline.getTime() - now.getTime()) / 86400000)
    if (days > 0) {
      return { text: `${days} DAYS UNTIL FULL ENFORCEMENT`, isPast: false }
    }
    return { text: `ENFORCEMENT BEGAN ${Math.abs(days)} DAYS AGO`, isPast: true }
  }, [])

  return (
    <a
      href={EC_TIMELINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`deadline-pill${isPast ? ' past' : ''}`}
    >
      <span className="deadline-dot" />
      <span>{text}</span>
    </a>
  )
}
