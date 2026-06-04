import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import { CONTACT_EMAIL } from '../config'
import { about } from '../copy'

function VisionSection() {
  const { sectionLabel, heading, paragraphs } = about.vision
  return (
    <section id="vision" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{sectionLabel}</div>
        <h2 className="section-heading">{heading}</h2>
        <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: i === 0 ? '17px' : '15px',
                fontWeight: i === 0 ? 500 : 400,
                color: i === 0 ? 'var(--tx-0)' : 'var(--tx-1)',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

function MissionSection() {
  const { sectionLabel, heading, paragraphs } = about.mission
  return (
    <section id="mission" style={{ background: 'var(--bg-0)', borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{sectionLabel}</div>
        <h2 className="section-heading">{heading}</h2>
        <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: i === 0 ? '17px' : '15px',
                fontWeight: i === 0 ? 500 : 400,
                color: i === 0 ? 'var(--tx-0)' : 'var(--tx-1)',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

function BuildWithMeSection() {
  const { sectionLabel, heading, founderName, openingAfter, paragraphs, cta } = about.buildWithMe
  return (
    <section id="build-with-me" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{sectionLabel}</div>
        <h2 className="section-heading">{heading}</h2>
        <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={{ fontSize: '17px', fontWeight: 500, color: 'var(--tx-0)', lineHeight: 1.85, margin: 0 }}>
            I&rsquo;m{' '}
            <a
              href="https://www.wandercode.ltd/about"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--ac)', textDecoration: 'underline', textDecorationColor: 'var(--ac-border)' }}
            >
              {founderName}
            </a>
            {openingAfter}
          </p>
          {paragraphs.map((p, i) => (
            <p
              key={i}
              style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.85, margin: 0 }}
            >
              {p}
            </p>
          ))}
        </div>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="btn btn-primary"
          style={{ marginTop: '2.5rem', display: 'inline-block' }}
        >
          {cta}
        </a>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <title>About · Traced AI</title>
      <meta name="description" content="The vision, mission, and open invitation to co-build Traced AI." />
      <link rel="canonical" href="https://traced-ai.com/about" />
      <meta property="og:url" content="https://traced-ai.com/about" />
      <meta property="og:title" content="About Traced AI" />
      <meta property="og:description" content="The vision, mission, and open invitation to co-build Traced AI." />
      <NavBar />
      <main>
        <VisionSection />
        <MissionSection />
        <BuildWithMeSection />
      </main>
      <Footer />
    </>
  )
}
