import type { ReactNode } from 'react'

interface BadgeProps {
  variant?: 'teal' | 'green' | 'red' | 'muted' | 'info';
  children: ReactNode;
}

export default function Badge({ variant = 'muted', children }: BadgeProps) {
  return <span className={`badge badge-${variant}`}>{children}</span>
}
