import { waitlist } from './copy'

const f = waitlist.form

export type FieldName = 'email' | 'company' | 'role' | 'useCase'
export type Values = Record<FieldName, string>
export type Errors = Partial<Record<FieldName | 'submit', string>>

/** Deliberately loose: this catches typos, Tally still does the real validation. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validate(v: Values): Errors {
  const e: Errors = {}
  if (!EMAIL.test(v.email.trim())) e.email = f.errors.email
  if (!v.company.trim()) e.company = f.errors.company
  if (!v.role) e.role = f.errors.role
  if (!v.useCase.trim()) e.useCase = f.errors.useCase
  return e
}
