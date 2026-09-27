<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const links = computed(() => [
  { key: 'sortiment', to: localePath('/sortiment') },
  { key: 'paketshop', to: localePath('/paketshop') },
  { key: 'hours', to: localePath('/oeffnungszeiten') },
  { key: 'news', to: localePath('/aktuelles') }
])

const year = new Date().getFullYear()
</script>

<template>
  <footer class="linden-footer">
    <div class="linden-container linden-footer__grid">
      <div class="linden-footer__brand">
        <span class="linden-footer__name">{{ t('brand.name') }}</span>
        <p class="linden-footer__tagline">{{ t('footer.tagline') }}</p>
      </div>

      <div>
        <h2 class="linden-footer__heading">{{ t('footer.quickLinks') }}</h2>
        <ul class="linden-footer__list">
          <li v-for="link in links" :key="link.key">
            <NuxtLink :to="link.to">{{ t(`nav.${link.key}`) }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="linden-footer__heading">{{ t('footer.getInTouch') }}</h2>
        <ul class="linden-footer__list">
          <li>
            <NuxtLink :to="localePath('/kontakt')">{{ t('nav.contact') }}</NuxtLink>
          </li>
          <li>
            <a href="#" aria-disabled="true">{{ t('footer.legal') }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="linden-container linden-footer__bottom">
      <p>© {{ year }} {{ t('brand.name') }} — {{ t('footer.rights') }}</p>
      <p>{{ t('footer.madeWith') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.linden-footer {
  background: var(--linden-green-900);
  color: var(--linden-cream);
  padding-block: 3.5rem 2rem;
  margin-top: 4rem;
}

.linden-footer__grid {
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1.4fr 1fr 1fr;
}

@media (max-width: 700px) {
  .linden-footer__grid {
    grid-template-columns: 1fr;
  }
}

.linden-footer__name {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--linden-cream);
}

.linden-footer__tagline {
  margin-top: 0.5rem;
  color: rgba(244, 237, 224, 0.7);
}

.linden-footer__heading {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(244, 237, 224, 0.6);
  margin-bottom: 1rem;
}

.linden-footer__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.linden-footer__list a {
  color: rgba(244, 237, 224, 0.85);
  text-decoration: none;
}

.linden-footer__list a:hover {
  color: var(--linden-terracotta);
}

.linden-footer__bottom {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(244, 237, 224, 0.15);
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  justify-content: space-between;
  font-size: 0.85rem;
  color: rgba(244, 237, 224, 0.6);
}
</style>
