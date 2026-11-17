import { expect, test } from 'bun:test'
import { validate } from '../src/waitlistValidation'
import { daysUntil } from '../src/deadline'

const ok = { email: 'a@b.co', company: 'Acme', role: 'x', useCase: 'logging' }

test('valid input has no errors', () => {
  expect(validate(ok)).toEqual({})
})

test('flags each bad field', () => {
  const e = validate({ email: 'nope', company: ' ', role: '', useCase: '' })
  expect(Object.keys(e).sort()).toEqual(['company', 'email', 'role', 'useCase'])
})

test('trims the email before testing', () => {
  expect(validate({ ...ok, email: '  a@b.co ' }).email).toBeUndefined()
})

test('daysUntil counts down and goes non-positive after the date', () => {
  expect(daysUntil('2027-12-02', new Date('2027-12-01T00:00:00'))).toBe(1)
  expect(daysUntil('2027-12-02', new Date('2027-12-02T00:00:00'))).toBe(0)
  expect(daysUntil('2027-12-02', new Date('2027-12-05T00:00:00'))).toBe(-3)
})
