<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const isMenuOpen = ref(false)
const route = useRoute()

const navItems = computed(() => [
  { key: 'home', to: localePath('/') },
  { key: 'sortiment', to: localePath('/sortiment') },
  { key: 'paketshop', to: localePath('/paketshop') },
  { key: 'hours', to: localePath('/oeffnungszeiten') },
  { key: 'news', to: localePath('/aktuelles') },
  { key: 'feedback', to: localePath('/feedback') }
])

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  }
)
</script>

<template>
  <header class="linden-header">
    <div class="linden-container linden-header__inner">
      <NuxtLink :to="localePath('/')" class="linden-header__brand">
        <span class="linden-header__mark">L</span>
        <span class="linden-header__name">{{ t('brand.name') }}</span>
      </NuxtLink>

      <nav class="linden-header__nav" :aria-label="t('nav.home')">
        <NuxtLink
          v-for="item in navItems"
          :key="item.key"
          :to="item.to"
          class="linden-header__link"
          active-class="linden-header__link--active"
        >
          {{ t(`nav.${item.key}`) }}
        </NuxtLink>
      </nav>

      <div class="linden-header__actions">
        <LanguageSwitcher class="hidden sm:flex" />
        <button
          type="button"
          class="linden-header__toggle"
          :aria-expanded="isMenuOpen"
          :aria-label="isMenuOpen ? t('nav.menuClose') : t('nav.menuOpen')"
          @click="isMenuOpen = !isMenuOpen"
        >
          <UIcon :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <Transition name="drawer">
      <div v-if="isMenuOpen" id="mobile-menu" class="linden-drawer">
        <nav class="linden-drawer__nav" :aria-label="t('nav.home')">
          <NuxtLink
            v-for="item in navItems"
            :key="item.key"
            :to="item.to"
            class="linden-drawer__link"
            @click="isMenuOpen = false"
          >
            {{ t(`nav.${item.key}`) }}
          </NuxtLink>
        </nav>
        <div class="linden-drawer__footer">
          <LanguageSwitcher />
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.linden-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(244, 237, 224, 0.86);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--linden-line);
}

.linden-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.linden-header__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}

.linden-header__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--linden-green-700);
  color: var(--linden-cream);
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.1rem;
}

.linden-header__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  color: var(--linden-green-900);
}

.linden-header__nav {
  display: none;
  align-items: center;
  gap: 1.75rem;
}

@media (min-width: 900px) {
  .linden-header__nav {
    display: flex;
  }
}

.linden-header__link {
  position: relative;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--linden-charcoal-soft);
  text-decoration: none;
  padding-block: 0.25rem;
}

.linden-header__link:hover {
  color: var(--linden-green-900);
}

.linden-header__link--active {
  color: var(--linden-green-900);
}

.linden-header__link--active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 2px;
  background: var(--linden-terracotta);
  border-radius: 2px;
}

.linden-header__actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.linden-header__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  color: var(--linden-green-900);
}

.linden-header__toggle:hover {
  background: var(--linden-green-100);
}

@media (min-width: 900px) {
  .linden-header__toggle {
    display: none;
  }
}

.linden-drawer {
  border-top: 1px solid var(--linden-line);
  background: var(--linden-cream);
  padding: 1rem 1.5rem 1.5rem;
}

.linden-drawer__nav {
  display: flex;
  flex-direction: column;
}

.linden-drawer__link {
  padding: 0.85rem 0.25rem;
  border-bottom: 1px solid var(--linden-line);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--linden-green-900);
  text-decoration: none;
}

.linden-drawer__footer {
  padding-top: 1rem;
}

.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .drawer-enter-active,
  .drawer-leave-active {
    transition: none;
  }
}
</style>
