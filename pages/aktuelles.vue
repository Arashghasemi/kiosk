<script setup lang="ts">
import { newsItems } from '~/data/news'

const { t } = useI18n()

useSeoMeta({
  title: () => t('nav.news'),
  description: () => t('news.subtitle')
})

const pageRef = ref<HTMLElement | null>(null)
useReveal(pageRef)

const sortedNews = computed(() =>
  [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
)
</script>

<template>
  <div ref="pageRef" class="linden-container section-page">
    <header class="section-page__head" data-reveal>
      <p class="linden-eyebrow">{{ t('news.eyebrow') }}</p>
      <h1>{{ t('news.title') }}</h1>
      <p class="section-page__subtitle">{{ t('news.subtitle') }}</p>
    </header>

    <div class="news-grid">
      <NewsCard v-for="item in sortedNews" :key="item.id" :item="item" />
    </div>
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

.news-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
