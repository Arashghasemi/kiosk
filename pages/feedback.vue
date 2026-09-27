<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('nav.feedback'),
  description: () => t('feedback.subtitle')
})

const pageRef = ref<HTMLElement | null>(null)
useReveal(pageRef)
</script>

<template>
  <div ref="pageRef" class="linden-container section-page">
    <header class="section-page__head" data-reveal>
      <p class="linden-eyebrow">{{ t('feedback.eyebrow') }}</p>
      <h1>{{ t('feedback.title') }}</h1>
      <p class="section-page__subtitle">{{ t('feedback.subtitle') }}</p>
    </header>

    <div data-reveal>
      <FeedbackForm />
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
</style>
