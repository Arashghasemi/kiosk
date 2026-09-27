<script setup lang="ts">
import { parcelProviders } from '~/data/parcelProviders'

const { t } = useI18n()

useSeoMeta({
  title: () => t('nav.paketshop'),
  description: () => t('paketshop.subtitle')
})

const pageRef = ref<HTMLElement | null>(null)
useReveal(pageRef)
</script>

<template>
  <div ref="pageRef" class="linden-container section-page">
    <header class="section-page__head" data-reveal>
      <p class="linden-eyebrow">{{ t('paketshop.eyebrow') }}</p>
      <h1>{{ t('paketshop.title') }}</h1>
      <p class="section-page__subtitle">{{ t('paketshop.subtitle') }}</p>
    </header>

    <div class="provider-grid">
      <ParcelProviderCard v-for="provider in parcelProviders" :key="provider.id" :provider="provider" />
    </div>

    <div class="paketshop-info" data-reveal>
      <UIcon name="i-heroicons-shield-check" class="w-6 h-6 paketshop-info__icon" aria-hidden="true" />
      <div>
        <h2>{{ t('paketshop.infoBoxTitle') }}</h2>
        <p>{{ t('paketshop.infoBox') }}</p>
        <p class="paketshop-info__note">{{ t('paketshop.hoursNote') }}</p>
      </div>
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

.provider-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .provider-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .provider-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.paketshop-info {
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  padding: 1.75rem;
  border-radius: var(--linden-radius-md);
  background: var(--linden-terracotta-100);
  max-width: 68ch;
}

.paketshop-info__icon {
  color: var(--linden-terracotta-600);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.paketshop-info h2 {
  font-size: 1.05rem;
  color: var(--linden-green-900);
  margin-bottom: 0.5rem;
}

.paketshop-info p {
  color: var(--linden-charcoal);
  font-size: 0.95rem;
  line-height: 1.6;
}

.paketshop-info__note {
  margin-top: 0.5rem;
  color: var(--linden-charcoal-soft) !important;
  font-size: 0.85rem !important;
}
</style>
