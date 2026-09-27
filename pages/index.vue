<script setup lang="ts">
import { categories, homeFeatureIds } from '~/data/categories'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('meta.title'),
  description: () => t('meta.description'),
  ogTitle: () => t('meta.title'),
  ogDescription: () => t('meta.description'),
  ogType: 'website'
})

const pageRef = ref<HTMLElement | null>(null)
useReveal(pageRef)

const featureCategories = computed(() => categories.filter((c) => homeFeatureIds.includes(c.id)))
</script>

<template>
  <div ref="pageRef">
    <HeroSection />

    <section class="features" aria-labelledby="features-heading">
      <div class="linden-container">
        <div class="features__head" data-reveal>
          <h2 id="features-heading">{{ t('features.title') }}</h2>
          <p>{{ t('features.subtitle') }}</p>
        </div>

        <div class="features__grid">
          <FeatureItem
            v-for="cat in featureCategories"
            :key="cat.id"
            :icon="cat.icon"
            :label="$t(cat.nameKey)"
          />
          <NuxtLink :to="localePath('/paketshop')" class="features__parcel-tile" data-reveal>
            <UIcon name="i-heroicons-inbox-stack" class="w-6 h-6" />
            <span>{{ t('nav.paketshop') }}</span>
          </NuxtLink>
        </div>

        <div class="features__cta" data-reveal>
          <NuxtLink :to="localePath('/sortiment')" class="features__cta-link">
            {{ t('features.seeAll') }}
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.features {
  padding-block: 2rem 5rem;
}

.features__head {
  max-width: 46ch;
  margin-bottom: 2.5rem;
}

.features__head h2 {
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
}

.features__head p {
  margin-top: 0.75rem;
  font-size: 1.02rem;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 640px) {
  .features__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1000px) {
  .features__grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.features__parcel-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem 1rem;
  border-radius: var(--linden-radius-md);
  background: var(--linden-terracotta);
  color: var(--linden-cream);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  transition: transform 0.25s ease;
}

.features__parcel-tile:hover {
  transform: translateY(-3px);
}

.features__cta {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
}

.features__cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--linden-green-900);
  text-decoration: none;
  border-bottom: 2px solid var(--linden-terracotta);
  padding-bottom: 2px;
}
</style>
