import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import { DOMAIN, CONTACT_EMAIL } from '../config'
import { about } from '../copy'

interface TextSectionData {
  sectionLabel: string
  heading: string
  paragraphs: string[]
}

const PROSE_COLUMN = {
  maxWidth: '680px',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '1.5rem',
}

function TextSection({ id, bg, data, top = false }: { id: string; bg: string; data: TextSectionData; top?: boolean }) {
  const { sectionLabel, heading, paragraphs } = data
  const [first, ...rest] = paragraphs
  // The page's single <h1> rides on the first section, matching HowItWorks and Pricing.
  const Heading = top ? 'h1' : 'h2'
  return (
    <section id={id} style={{ background: bg, borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{sectionLabel}</div>
        <Heading className="section-heading">{heading}</Heading>
        <div style={PROSE_COLUMN}>
          <p className="prose-lead">{first}</p>
          {rest.map((p, i) => (
            <p key={i} className="prose-body">{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

function TheBetSection() {
  const { sectionLabel, heading, founderName, openingAfter, paragraphs, cta } = about.theBet
  return (
    <section id="the-bet" style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{sectionLabel}</div>
        <h2 className="section-heading">{heading}</h2>
        <div style={PROSE_COLUMN}>
          <p className="prose-lead">
            I&rsquo;m{' '}
            <a
              href="https://www.wandercode.ltd/about"
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link"
            >
              {founderName}
            </a>
            {openingAfter}
          </p>
          {paragraphs.map((p, i) => (
            <p key={i} className="prose-body">{p}</p>
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
      <link rel="canonical" href={`${DOMAIN}/about`} />
      <meta property="og:url" content={`${DOMAIN}/about`} />
      <meta property="og:title" content="About Traced AI" />
      <meta property="og:description" content="The vision, mission, and open invitation to co-build Traced AI." />
      <NavBar />
      <main>
        <TextSection id="vision" bg="var(--bg-1)" data={about.vision} top />
        <TextSection id="mission" bg="var(--bg-0)" data={about.mission} />
        <TheBetSection />
      </main>
      <Footer />
    </>
  )
}
