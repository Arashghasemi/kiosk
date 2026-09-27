import type { DayHours, HolidayHours } from '~/types'

/**
 * Regular weekly opening hours.
 * day: 0 = Sunday, 1 = Monday, ... 6 = Saturday (matches Date#getDay()).
 */
export const weeklyHours: DayHours[] = [
  { day: 1, open: '09:00', close: '20:00' }, // Monday
  { day: 2, open: '09:00', close: '20:00' }, // Tuesday
  { day: 3, open: '09:00', close: '20:00' }, // Wednesday
  { day: 4, open: '09:00', close: '20:00' }, // Thursday
  { day: 5, open: '09:00', close: '20:00' }, // Friday
  { day: 6, open: '10:00', close: '20:00' }, // Saturday
  { day: 0, open: '10:00', close: '20:00' } // Sunday
]

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
