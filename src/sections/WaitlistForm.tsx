import { useEffect } from 'react'
import { TALLY_FORM_ID } from '../config'
import { waitlist } from '../copy'

type TallyWindow = Window & { Tally?: { loadEmbeds: () => void } }

function TallyEmbed() {
  useEffect(() => {
    if (TALLY_FORM_ID === 'PLACEHOLDER') return

    const existing = document.getElementById('tally-js')
    if (existing) {
      if (typeof (window as TallyWindow).Tally !== 'undefined') {
        (window as TallyWindow).Tally?.loadEmbeds()
      }
      return
    }

    const s = document.createElement('script')
    s.src = 'https://tally.so/widgets/embed.js'
    s.id = 'tally-js'
    s.onload = () => {
      (window as TallyWindow).Tally?.loadEmbeds()
    }
    document.body.appendChild(s)
  }, [])

  if (TALLY_FORM_ID === 'PLACEHOLDER') {
    return (
      <div style={{
        border: '1px dashed var(--br-default)',
        borderRadius: 'var(--r-md)',
        padding: '40px',
        textAlign: 'center',
        color: 'var(--tx-2)',
        fontFamily: 'var(--f-mono)',
        fontSize: '12px',
        letterSpacing: '0.08em',
      }}>
        TALLY FORM EMBED: configure TALLY_FORM_ID in src/config.ts
      </div>
    )
  }

  return (
    <iframe
      data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      width="100%"
      height="500"
      frameBorder="0"
      title="Join the Traced AI waitlist"
    />
  )
}

export default function WaitlistForm() {
  return (
    <section id="waitlist" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{waitlist.sectionLabel}</div>

        <h2 className="section-heading" style={{ marginBottom: '8px', maxWidth: '560px' }}>
          {waitlist.headline}
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--tx-1)', marginBottom: '40px', maxWidth: '560px' }}>
          {waitlist.subheadline}
        </p>

        <div style={{ maxWidth: '560px' }}>
          <TallyEmbed />
          <p style={{ fontSize: '12px', color: 'var(--tx-2)', marginTop: '16px', lineHeight: 1.7 }}>
            {waitlist.finePrint}
          </p>
        </div>
      </div>
    </section>
  )
}
