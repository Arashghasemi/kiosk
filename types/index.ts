export interface DayHours {
  /** 0 = Sunday ... 6 = Saturday, matching JS Date#getDay() */
  day: number
  open: string | null
  close: string | null
}

export interface ScheduleVersion {
  /** ISO date (inclusive) from which this weekly schedule applies. */
  effectiveFrom: string
  hours: DayHours[]
}

export interface HolidayHours {
  /** ISO date string, e.g. "2026-12-24" */
  date: string
  open: string | null
  close: string | null
  labelKey: string
}

export interface ProductCategory {
  id: string
  icon: string
  nameKey: string
  descriptionKey: string
}

export interface ParcelProvider {
  id: 'dpd' | 'hermes' | 'gls' | 'ups'
  name: string
  color: string
  logoIcon: string
  servicesKeys: string[]
}

export interface NewsItem {
  id: string
  date: string
  tagKey: string
  titleKey: string
  bodyKey: string
}

export interface FeedbackFormState {
  name: string
  rating: number
  message: string
}
