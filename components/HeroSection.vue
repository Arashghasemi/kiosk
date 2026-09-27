<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="hero">
    <div class="linden-container hero__grid">
      <div class="hero__copy" data-reveal>
        <p class="linden-eyebrow">{{ t('hero.eyebrow') }}</p>
        <h1 class="hero__title">{{ t('hero.title') }}</h1>
        <p class="hero__subtitle">{{ t('hero.subtitle') }}</p>

        <div class="hero__status">
          <OpeningStatus />
        </div>

        <div class="hero__actions">
          <NuxtLink :to="localePath('/oeffnungszeiten')" class="hero__btn hero__btn--primary">
            {{ t('hero.ctaHours') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/paketshop')" class="hero__btn hero__btn--secondary">
            {{ t('hero.ctaParcel') }}
          </NuxtLink>
        </div>
      </div>

      <div class="hero__visual" data-reveal aria-hidden="true">
        <div class="hero__panel hero__panel--main">
          <UIcon name="i-heroicons-building-storefront" class="hero__panel-icon" />
        </div>
        <div class="hero__panel hero__panel--float-1">
          <UIcon name="i-heroicons-cube" class="hero__panel-icon-sm" />
        </div>
        <div class="hero__panel hero__panel--float-2">
          <UIcon name="i-heroicons-fire" class="hero__panel-icon-sm" />
        </div>
        <div class="hero__stripe" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-block: 3rem 4rem;
  overflow: hidden;
}

@media (min-width: 900px) {
  .hero {
    padding-block: 5rem 6rem;
  }
}

.hero__grid {
  display: grid;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 900px) {
  .hero__grid {
    grid-template-columns: 1.05fr 0.95fr;
    gap: 2rem;
  }
}

.hero__title {
  font-size: clamp(2.1rem, 4.4vw, 3.4rem);
  margin-top: 0.75rem;
  max-width: 16ch;
}

.hero__subtitle {
  margin-top: 1.25rem;
  font-size: 1.08rem;
  line-height: 1.6;
  max-width: 46ch;
}

.hero__status {
  margin-top: 1.75rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.98rem;
  text-decoration: none;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.hero__btn--primary {
  background: var(--linden-green-700);
  color: var(--linden-cream);
}

.hero__btn--primary:hover {
  background: var(--linden-green-900);
  transform: translateY(-1px);
}

.hero__btn--secondary {
  background: transparent;
  color: var(--linden-green-900);
  border: 1.5px solid var(--linden-green-700);
}

.hero__btn--secondary:hover {
  background: var(--linden-green-100);
}

.hero__visual {
  position: relative;
  min-height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__stripe {
  position: absolute;
  inset: 8% 6%;
  border-radius: 999px 999px 0 0 / 40% 40% 0 0;
  background: var(--linden-terracotta-100);
  z-index: 0;
  opacity: 0.6;
}

.hero__panel {
  position: relative;
  z-index: 1;
  border-radius: var(--linden-radius-lg);
  box-shadow: var(--linden-shadow-soft);
}

.hero__panel--main {
  width: min(340px, 80%);
  aspect-ratio: 4 / 5;
  background: var(--linden-green-700);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__panel-icon {
  width: 96px;
  height: 96px;
  color: var(--linden-cream);
  opacity: 0.9;
}

.hero__panel--float-1,
.hero__panel--float-2 {
  position: absolute;
  width: 84px;
  height: 84px;
  background: var(--linden-card);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--linden-radius-md);
}

.hero__panel--float-1 {
  top: 6%;
  right: 4%;
}

.hero__panel--float-2 {
  bottom: 8%;
  left: 2%;
  background: var(--linden-terracotta);
}

.hero__panel--float-2 .hero__panel-icon-sm {
  color: var(--linden-cream);
}

.hero__panel-icon-sm {
  width: 34px;
  height: 34px;
  color: var(--linden-green-700);
}

@media (max-width: 500px) {
  .hero__panel--float-1,
  .hero__panel--float-2 {
    width: 64px;
    height: 64px;
  }
}
</style>
