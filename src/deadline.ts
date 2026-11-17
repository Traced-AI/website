const DAY_MS = 86400000

/** Whole days from `now` until local midnight of an ISO date; <= 0 once the date has passed. */
export function daysUntil(isoDate: string, now: Date = new Date()): number {
  const deadline = new Date(isoDate + 'T00:00:00')
  return Math.ceil((deadline.getTime() - now.getTime()) / DAY_MS)
}
