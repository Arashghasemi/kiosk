<script setup lang="ts">
import { categories } from '~/data/categories'

const { t } = useI18n()

useSeoMeta({
  title: () => t('nav.sortiment'),
  description: () => t('categories.sectionSubtitle')
})

const pageRef = ref<HTMLElement | null>(null)
useReveal(pageRef)
</script>

<template>
  <div ref="pageRef" class="linden-container section-page">
    <header class="section-page__head" data-reveal>
      <p class="linden-eyebrow">{{ t('nav.sortiment') }}</p>
      <h1>{{ t('categories.sectionTitle') }}</h1>
      <p class="section-page__subtitle">{{ t('categories.sectionSubtitle') }}</p>
    </header>

    <div class="sortiment-grid">
      <CategoryCard v-for="cat in categories" :key="cat.id" :category="cat" />
    </div>

    <p class="sortiment-note" data-reveal>
      <UIcon name="i-heroicons-information-circle" class="w-5 h-5" aria-hidden="true" />
      {{ t('categories.availabilityNote') }}
    </p>
  </div>
</template>

<style scoped>
.section-page {
  padding-block: 3rem 5rem;
}

.section-page__head {
  max-width: 60ch;
  margin-bottom: 2.5rem;
}

.section-page__head h1 {
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  margin-top: 0.6rem;
}

.section-page__subtitle {
  margin-top: 0.9rem;
  font-size: 1.05rem;
}

.sortiment-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .sortiment-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .sortiment-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.sortiment-note {
  margin-top: 2.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.92rem;
  color: var(--linden-charcoal-soft);
  max-width: 60ch;
}
</style>
