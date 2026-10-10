<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('nav.hours'),
  description: () => t('hours.subtitle')
})

const pageRef = ref<HTMLElement | null>(null)
useReveal(pageRef)

const showUpcomingChangeNote = computed(() => new Date() < new Date('2026-10-31'))
</script>

<template>
  <div ref="pageRef" class="linden-container section-page">
    <header class="section-page__head" data-reveal>
      <p class="linden-eyebrow">{{ t('hours.eyebrow') }}</p>
      <h1>{{ t('hours.title') }}</h1>
      <p class="section-page__subtitle">{{ t('hours.subtitle') }}</p>
    </header>

    <div class="hours-layout">
      <div data-reveal>
        <OpeningStatus />
        <div class="hours-layout__table">
          <OpeningHours />
        </div>
      </div>

      <aside class="hours-note linden-card" data-reveal>
        <UIcon name="i-heroicons-calendar-days" class="w-6 h-6 hours-note__icon" aria-hidden="true" />
        <div>
          <p v-if="showUpcomingChangeNote" class="hours-note__upcoming">{{ t('hours.upcomingChangeNote') }}</p>
          <p>{{ t('hours.holidayNote') }}</p>
        </div>
      </aside>
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

.hours-layout {
  display: grid;
  gap: 2rem;
  max-width: 760px;
}

@media (min-width: 800px) {
  .hours-layout {
    grid-template-columns: 1.4fr 1fr;
    align-items: start;
  }
}

.hours-layout__table {
  margin-top: 1.5rem;
}

.hours-note {
  display: flex;
  gap: 0.85rem;
  padding: 1.5rem;
  font-size: 0.92rem;
  align-items: flex-start;
}

.hours-note__icon {
  color: var(--linden-green-700);
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.hours-note__upcoming {
  color: var(--linden-terracotta-600);
  font-weight: 600;
  margin-bottom: 0.6rem;
}
</style>
