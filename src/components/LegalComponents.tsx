import type { ReactNode } from 'react'
import { ui } from '../copy'

interface LegalSectionProps {
  id: string
  title: string
  children: ReactNode
  prefix?: string
}

interface NoteProps {
  children: ReactNode
}

export function LegalSection({ id, title, children, prefix = '' }: LegalSectionProps) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2 className="f-display" style={{
        fontSize: '1.1rem',
        fontWeight: 500,
        letterSpacing: '0.04em',
        color: 'var(--tx-0)',
        marginBottom: '16px',
        paddingBottom: '8px',
        borderBottom: '1px solid var(--br-subtle)',
      }}>
        {prefix}{id}. {title}
      </h2>
      <div className="legal-body">
        {children}
      </div>
    </section>
  )
}

export function Note({ children }: NoteProps) {
  return (
    <div style={{
      background: 'var(--bg-2)',
      border: '1px solid var(--br-default)',
      borderLeft: '3px solid var(--warning)',
      borderRadius: 'var(--r-md)',
      padding: '12px 16px',
      fontSize: '12px',
      color: 'var(--tx-2)',
      lineHeight: 1.7,
      margin: '16px 0',
    }}>
      <strong style={{ color: 'var(--tx-1)', display: 'block', marginBottom: '4px' }}>{ui.noteLabel}</strong>
      {children}
    </div>
  )
}
