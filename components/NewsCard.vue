<script setup lang="ts">
import type { NewsItem } from '~/types'

const props = defineProps<{ item: NewsItem }>()
const { locale } = useI18n()

const formattedDate = computed(() => {
  const d = new Date(props.item.date)
  return new Intl.DateTimeFormat(locale.value === 'de' ? 'de-DE' : 'en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(d)
})
</script>

<template>
  <article class="news-card" data-reveal>
    <div class="news-card__meta">
      <span class="news-card__tag">{{ $t(item.tagKey) }}</span>
      <time :datetime="item.date" class="news-card__date">{{ formattedDate }}</time>
    </div>
    <h3 class="news-card__title">{{ $t(item.titleKey) }}</h3>
    <p class="news-card__body">{{ $t(item.bodyKey) }}</p>
  </article>
</template>

<style scoped>
.news-card {
  padding: 1.75rem;
  border-radius: var(--linden-radius-md);
  background: var(--linden-card);
  border: 1px solid var(--linden-line);
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.news-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.news-card__tag {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: var(--linden-green-100);
  color: var(--linden-green-700);
}

.news-card__date {
  font-size: 0.8rem;
  color: var(--linden-charcoal-soft);
}

.news-card__title {
  font-size: 1.1rem;
}

.news-card__body {
  font-size: 0.94rem;
  line-height: 1.6;
}
</style>
