import { useMemo } from 'react'
import { ANNEX_III_APPLICATION_DATE, EC_TIMELINE_URL } from '../config'

export default function DeadlineBadge() {
  const { text, isPast } = useMemo(() => {
    const deadline = new Date(ANNEX_III_APPLICATION_DATE + 'T00:00:00')
    const now = new Date()
    const days = Math.ceil((deadline.getTime() - now.getTime()) / 86400000)
    if (days > 0) {
      return { text: `${days} DAYS UNTIL HIGH-RISK OBLIGATIONS APPLY`, isPast: false }
    }
    return { text: `HIGH-RISK OBLIGATIONS IN EFFECT FOR ${Math.abs(days)} DAYS`, isPast: true }
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
