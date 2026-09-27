import type { ProductCategory } from '~/types'

export const categories: ProductCategory[] = [
  { id: 'drinks', icon: 'i-heroicons-beaker', nameKey: 'categories.drinks.name', descriptionKey: 'categories.drinks.description' },
  { id: 'snacks', icon: 'i-heroicons-cake', nameKey: 'categories.snacks.name', descriptionKey: 'categories.snacks.description' },
  { id: 'sweets', icon: 'i-heroicons-gift', nameKey: 'categories.sweets.name', descriptionKey: 'categories.sweets.description' },
  { id: 'tobacco', icon: 'i-heroicons-fire', nameKey: 'categories.tobacco.name', descriptionKey: 'categories.tobacco.description' },
  { id: 'household', icon: 'i-heroicons-home-modern', nameKey: 'categories.household.name', descriptionKey: 'categories.household.description' },
  { id: 'ice', icon: 'i-heroicons-sun', nameKey: 'categories.ice.name', descriptionKey: 'categories.ice.description' },
  { id: 'coffee', icon: 'i-heroicons-fire', nameKey: 'categories.coffee.name', descriptionKey: 'categories.coffee.description' },
  { id: 'other', icon: 'i-heroicons-sparkles', nameKey: 'categories.other.name', descriptionKey: 'categories.other.description' }
]

/** Shorter subset used in the homepage feature strip. */
export const homeFeatureIds = ['drinks', 'snacks', 'sweets', 'tobacco', 'household']
