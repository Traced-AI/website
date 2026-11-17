import { ANNEX_III_APPLICATION_DATE, EC_TIMELINE_URL } from '../config'
import { daysUntil } from '../deadline'

export default function DeadlineBadge() {
  const days = daysUntil(ANNEX_III_APPLICATION_DATE)
  const isPast = days <= 0
  const text = isPast
    ? `HIGH-RISK OBLIGATIONS IN EFFECT FOR ${Math.abs(days)} DAYS`
    : `${days} DAYS UNTIL HIGH-RISK OBLIGATIONS APPLY`

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
