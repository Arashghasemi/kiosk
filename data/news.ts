import type { NewsItem } from '~/types'

/**
 * Sample news content. Replace or fetch from Supabase later —
 * the NewsCard component and aktuelles page only depend on this shape.
 */
export const newsItems: NewsItem[] = [
  {
    id: 'new-products-2026-09',
    date: '2026-09-18',
    tagKey: 'news.tags.products',
    titleKey: 'news.items.newProducts.title',
    bodyKey: 'news.items.newProducts.body'
  },
  {
    id: 'parcel-update-2026-08',
    date: '2026-08-27',
    tagKey: 'news.tags.parcel',
    titleKey: 'news.items.parcelUpdate.title',
    bodyKey: 'news.items.parcelUpdate.body'
  },
  {
    id: 'holiday-hours-2026-12',
    date: '2026-08-10',
    tagKey: 'news.tags.hours',
    titleKey: 'news.items.holidayHours.title',
    bodyKey: 'news.items.holidayHours.body'
  },
  {
    id: 'summer-offer-2026-07',
    date: '2026-07-02',
    tagKey: 'news.tags.offer',
    titleKey: 'news.items.summerOffer.title',
    bodyKey: 'news.items.summerOffer.body'
  }
]
