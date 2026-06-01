import type { Stat } from '../copy'

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({ stat }: StatCardProps) {
  return (
    <a
      href={stat.url}
      target="_blank"
      rel="noopener noreferrer"
      className="stat-card"
    >
      <div className={`stat-value f-display${stat.smallValue ? ' small' : ''}`}>
        {stat.value}
      </div>
      <div className="stat-label">{stat.label}</div>
    </a>
  )
}
