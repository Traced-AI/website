import { useId, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CAL_BOOKING_URL,
  CONTACT_EMAIL,
  TALLY_FIELDS,
  TALLY_ROLE_OPTIONS,
  TALLY_SUBMIT_URL,
} from '../config'
import { waitlist } from '../copy'

const f = waitlist.form

type FieldName = 'email' | 'company' | 'role' | 'useCase'
type Values = Record<FieldName, string>
type Errors = Partial<Record<FieldName | 'submit', string>>

const EMPTY: Values = { email: '', company: '', role: '', useCase: '' }
const ORDER: FieldName[] = ['email', 'company', 'role', 'useCase']

/** Deliberately loose: this catches typos, Tally still does the real validation. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(v: Values): Errors {
  const e: Errors = {}
  if (!EMAIL.test(v.email.trim())) e.email = f.errors.email
  if (!v.company.trim()) e.company = f.errors.company
  if (!v.role) e.role = f.errors.role
  if (!v.useCase.trim()) e.useCase = f.errors.useCase
  return e
}

const inputClass = (invalid?: string) => `form-input${invalid ? ' form-input-invalid' : ''}`

export default function WaitlistForm() {
  const navigate = useNavigate()
  const formId = useId()
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  // ponytail: honeypot rather than a captcha. Revisit only if spam actually arrives.
  const honeypot = useRef<HTMLInputElement>(null)

  const fieldId = (name: string) => `${formId}-${name}`
  const errorId = (name: string) => `${formId}-${name}-error`

  function set(name: FieldName, value: string) {
    setValues(prev => ({ ...prev, [name]: value }))
    // Clear a field's error as soon as the visitor starts correcting it.
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return

    const found = validate(values)
    if (Object.keys(found).length > 0) {
      setErrors(found)
      const first = ORDER.find(name => found[name])
      if (first) document.getElementById(fieldId(first))?.focus()
      return
    }

    // A bot filled the hidden field. Behave as if it worked rather than explaining why not.
    if (honeypot.current?.value) {
      navigate('/thank-you')
      return
    }

    setSubmitting(true)
    setErrors({})
    try {
      const response = await fetch(TALLY_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionUuid: crypto.randomUUID(),
          respondentUuid: crypto.randomUUID(),
          responses: {
            [TALLY_FIELDS.email]: values.email.trim(),
            [TALLY_FIELDS.company]: values.company.trim(),
            [TALLY_FIELDS.role]: [values.role],
            [TALLY_FIELDS.useCase]: values.useCase.trim(),
          },
          captchas: {},
          isCompleted: true,
          password: null,
        }),
        // A hung request must not strand the button on "Joining…" forever.
        signal: AbortSignal.timeout(15_000),
      })
      if (!response.ok) {
        // Tally rejects a repeat submission from the same respondent with this
        // errorType. Say so plainly instead of the generic "went wrong" message.
        const body = await response.json().catch(() => null)
        setErrors({
          submit: body?.errorType === 'FORM_UNIQUE_SUBMISSION_CONFLICT' ? f.errors.duplicate : f.errors.submit,
        })
        setSubmitting(false)
        return
      }
      navigate('/thank-you')
    } catch {
      // Never strand a submission silently: surface it and keep what they typed.
      setErrors({ submit: f.errors.submit })
      setSubmitting(false)
    }
  }

  return (
    <section
      id="waitlist"
      style={{ background: 'var(--bg-0)', borderTop: '1px solid var(--br-subtle)' }}
    >
      <div className="page-section">
        <div className="section-label">{waitlist.sectionLabel}</div>

        <h2 className="section-heading" style={{ marginBottom: '8px', maxWidth: '560px' }}>
          {waitlist.headline}
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--tx-1)', marginBottom: '40px', maxWidth: '560px' }}>
          {waitlist.subheadline}
        </p>

        <div style={{ maxWidth: '560px' }}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor={fieldId('email')}>
                {f.email.label} <RequiredMark />
              </label>
              <input
                id={fieldId('email')}
                type="email"
                className={inputClass(errors.email)}
                placeholder={f.email.placeholder}
                value={values.email}
                autoComplete="email"
                required
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? errorId('email') : undefined}
                onChange={e => set('email', e.target.value)}
              />
              <FieldError id={errorId('email')} message={errors.email} />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor={fieldId('company')}>
                {f.company.label} <RequiredMark />
              </label>
              <input
                id={fieldId('company')}
                type="text"
                className={inputClass(errors.company)}
                placeholder={f.company.placeholder}
                value={values.company}
                autoComplete="organization"
                required
                aria-invalid={errors.company ? true : undefined}
                aria-describedby={errors.company ? errorId('company') : undefined}
                onChange={e => set('company', e.target.value)}
              />
              <FieldError id={errorId('company')} message={errors.company} />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor={fieldId('role')}>
                {f.role.label} <RequiredMark />
              </label>
              <select
                id={fieldId('role')}
                className={inputClass(errors.role)}
                value={values.role}
                required
                aria-invalid={errors.role ? true : undefined}
                aria-describedby={errors.role ? errorId('role') : undefined}
                onChange={e => set('role', e.target.value)}
              >
                <option value="" disabled>
                  {f.role.placeholder}
                </option>
                {TALLY_ROLE_OPTIONS.map(option => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
              <FieldError id={errorId('role')} message={errors.role} />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor={fieldId('useCase')}>
                {f.useCase.label} <RequiredMark />
              </label>
              <textarea
                id={fieldId('useCase')}
                className={`${inputClass(errors.useCase)} form-textarea`}
                placeholder={f.useCase.placeholder}
                value={values.useCase}
                rows={5}
                required
                aria-invalid={errors.useCase ? true : undefined}
                aria-describedby={errors.useCase ? errorId('useCase') : undefined}
                onChange={e => set('useCase', e.target.value)}
              />
              <FieldError id={errorId('useCase')} message={errors.useCase} />
            </div>

            {/* Off-screen and hidden from assistive tech: only an automated filler completes it. */}
            <input
              ref={honeypot}
              type="text"
              name="company-website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="honeypot"
            />

            <button type="submit" className="btn btn-primary btn-full" disabled={submitting}>
              {submitting ? f.submitting : f.submit}
            </button>

            {/* role="alert" so a failed submission is announced, not only shown. */}
            {errors.submit && (
              <p className="form-error" role="alert" style={{ marginTop: '12px' }}>
                {errors.submit}
                {errors.submit === f.errors.submit && (
                  <>
                    {' '}
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  </>
                )}
                {errors.submit === f.errors.duplicate && (
                  <>
                    {' '}
                    <a
                      href={CAL_BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--ac-text)', fontWeight: 600, textDecoration: 'underline' }}
                    >
                      {f.errors.duplicateCta} →
                    </a>
                  </>
                )}
              </p>
            )}
          </form>

          <p style={{ fontSize: '12px', color: 'var(--tx-2)', marginTop: '16px', lineHeight: 1.7 }}>
            {waitlist.finePrint}
          </p>
        </div>
      </div>
    </section>
  )
}

function RequiredMark() {
  return (
    <>
      <span aria-hidden="true">*</span>
      <span className="sr-only">{f.required}</span>
    </>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p className="form-error" id={id}>
      {message}
    </p>
  )
}
