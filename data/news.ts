import type { NewsItem } from '~/types'

/**
 * News content. Replace or fetch from Supabase later —
 * the NewsCard component and aktuelles page only depend on this shape.
 */
export const newsItems: NewsItem[] = [
  {
    id: 'parcel-hermes-2026-09',
    date: '2026-09-01',
    tagKey: 'news.tags.parcel',
    titleKey: 'news.items.parcelHermes.title',
    bodyKey: 'news.items.parcelHermes.body'
  },
  {
    id: 'saturday-closed-2026-10',
    date: '2026-10-31',
    tagKey: 'news.tags.hours',
    titleKey: 'news.items.saturdayClosed.title',
    bodyKey: 'news.items.saturdayClosed.body'
  }
]
