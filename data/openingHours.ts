import type { DayHours, HolidayHours, ScheduleVersion } from '~/types'

/**
 * Versioned weekly opening hours. Each version applies from its
 * `effectiveFrom` date (inclusive) until the next version's date.
 * day: 0 = Sunday, 1 = Monday, ... 6 = Saturday (matches Date#getDay()).
 *
 * To change the regular weekly hours going forward, add a new version
 * below with its effectiveFrom date — OpeningStatus and OpeningHours
 * automatically switch over on that date, no other code changes needed.
 */
export const scheduleVersions: ScheduleVersion[] = [
  {
    effectiveFrom: '2000-01-01',
    hours: [
      { day: 1, open: '09:00', close: '20:00' }, // Monday
      { day: 2, open: '09:00', close: '20:00' }, // Tuesday
      { day: 3, open: '09:00', close: '20:00' }, // Wednesday
      { day: 4, open: '09:00', close: '20:00' }, // Thursday
      { day: 5, open: '09:00', close: '20:00' }, // Friday
      { day: 6, open: '10:00', close: '20:00' }, // Saturday
      { day: 0, open: '10:00', close: '20:00' } // Sunday
    ]
  },
  {
    // From 31 Oct 2026: closed on Saturdays, Sunday unchanged.
    effectiveFrom: '2026-10-31',
    hours: [
      { day: 1, open: '09:00', close: '20:00' }, // Monday
      { day: 2, open: '09:00', close: '20:00' }, // Tuesday
      { day: 3, open: '09:00', close: '20:00' }, // Wednesday
      { day: 4, open: '09:00', close: '20:00' }, // Thursday
      { day: 5, open: '09:00', close: '20:00' }, // Friday
      { day: 6, open: null, close: null }, // Saturday — closed
      { day: 0, open: '10:00', close: '20:00' } // Sunday
    ]
  }
]

/** Returns the weekly schedule that is active for the given date. */
export function getActiveWeeklyHours(date: Date): DayHours[] {
  const iso = date.toISOString().slice(0, 10)
  const sorted = [...scheduleVersions].sort((a, b) => a.effectiveFrom.localeCompare(b.effectiveFrom))
  let active = sorted[0]!
  for (const version of sorted) {
    if (version.effectiveFrom <= iso) active = version
    else break
  }
  return active.hours
}

/**
 * Special / holiday hours override the weekly schedule for a specific date.
 * Add new entries here (or connect this to Supabase later) — the
 * OpeningStatus and OpeningHours components already know how to read them.
 * Set open/close to null for a full closure.
 *
 * Example:
 * { date: '2026-12-24', open: '09:00', close: '14:00', labelKey: 'hours.holiday.christmasEve' }
 */
export const holidayHours: HolidayHours[] = []
