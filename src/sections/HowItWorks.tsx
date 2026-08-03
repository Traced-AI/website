import { howItWorks } from '../copy'

function CodeBlock() {
  return (
    <div className="code-block">
      <div className="code-bar">
        <span className="code-dot" style={{ background: '#EF4444' }} />
        <span className="code-dot" style={{ background: '#F59E0B' }} />
        <span className="code-dot" style={{ background: '#22C55E' }} />
        <span style={{ marginLeft: '6px' }}>traced_init.py</span>
      </div>
      <div className="code-body">
        <span className="c-keyword">import</span> traced_ai<br /><br />
        traced_ai.<span className="c-func">init</span>(<br />
        &nbsp;&nbsp;&nbsp;&nbsp;api_key=<span className="c-string">"trc_live_..."</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;rules=<span className="c-string">"eu-ai-act-annex-iii"</span><br />
        )<br />
        <span className="c-comment"># Your own call, already patched. No new LLM call, no new cost.</span><br />
        <span className="c-comment"># Its response now carries the rationale too, in the same shot.</span><br /><br />
        response = client.chat.completions.<span className="c-func">create</span>(...)<br /><br />
        <span className="c-comment"># Optional, to attach a human sign-off to that response.</span><br />
        traced_ai.<span className="c-func">sign_off</span>(<br />
        &nbsp;&nbsp;&nbsp;&nbsp;response,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;reviewer_id=<span className="c-string">"cosmin@company.com"</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;feedback=<span className="c-string">"Confirmed, no red flags"</span><br />
        )
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{howItWorks.sectionLabel}</div>

        <h1 className="section-heading" style={{ marginBottom: '8px' }}>
          {howItWorks.headline1}
        </h1>
        <h2 className="section-heading" style={{ marginBottom: '32px', color: 'var(--ac-text)' }}>
          {howItWorks.headline2}
        </h2>

        <p style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.75, maxWidth: '640px', marginBottom: '48px' }}>
          {howItWorks.intro}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div>
            {howItWorks.features.map((f, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <h3 className="f-display" style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--tx-0)',
                  marginBottom: '8px',
                  letterSpacing: '0.03em',
                }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--tx-1)', lineHeight: 1.75 }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          <div>
            <CodeBlock />
          </div>
        </div>
      </div>
    </section>
  )
}
