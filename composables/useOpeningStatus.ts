import { computed, type ComputedRef } from 'vue'
import { getActiveWeeklyHours, holidayHours } from '~/data/openingHours'

export type OpeningState = 'open' | 'closed' | 'opensAt' | 'closesSoon'

export interface OpeningStatusResult {
  state: OpeningState
  time: string | null
  todayOpen: string | null
  todayClose: string | null
}

function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return (h ?? 0) * 60 + (m ?? 0)
}

function todayIso(d: Date): string {
  return d.toISOString().slice(0, 10)
}

/**
 * Computes the kiosk's current opening status from the visitor's local time.
 * Holiday entries in data/openingHours.ts override the regular weekly hours
 * for their date.
 */
export function useOpeningStatus(now: ComputedRef<Date> | Date = new Date()): ComputedRef<OpeningStatusResult> {
  return computed(() => {
    const current = 'value' in now ? now.value : now
    const day = current.getDay()
    const iso = todayIso(current)
    const minutesNow = current.getHours() * 60 + current.getMinutes()

    const holiday = holidayHours.find((h) => h.date === iso)
    const todaySchedule = holiday ?? getActiveWeeklyHours(current).find((h) => h.day === day)

    if (!todaySchedule || todaySchedule.open === null || todaySchedule.close === null) {
      return { state: 'closed', time: null, todayOpen: null, todayClose: null }
    }

    const openMin = toMinutes(todaySchedule.open)
    const closeMin = toMinutes(todaySchedule.close)

    if (minutesNow < openMin) {
      return { state: 'opensAt', time: todaySchedule.open, todayOpen: todaySchedule.open, todayClose: todaySchedule.close }
    }

    if (minutesNow >= closeMin) {
      return { state: 'closed', time: null, todayOpen: todaySchedule.open, todayClose: todaySchedule.close }
    }

    if (closeMin - minutesNow <= 30) {
      return { state: 'closesSoon', time: todaySchedule.close, todayOpen: todaySchedule.open, todayClose: todaySchedule.close }
    }

    return { state: 'open', time: todaySchedule.close, todayOpen: todaySchedule.open, todayClose: todaySchedule.close }
  })
}
