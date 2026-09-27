<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()

interface LocaleOption {
  code: string
  name?: string
}

const allLocales = computed(() => locales.value as LocaleOption[])

async function change(code: string) {
  await navigateTo(switchLocalePath(code as 'de' | 'en'))
}
</script>

<template>
  <div class="flex items-center gap-1" role="group" :aria-label="$t('common.languageSwitcher')">
    <button
      v-for="l in allLocales"
      :key="l.code"
      type="button"
      class="lang-btn"
      :class="{ 'lang-btn--active': l.code === locale }"
      :aria-current="l.code === locale ? 'true' : undefined"
      @click="change(l.code)"
    >
      {{ l.code.toUpperCase() }}
    </button>
  </div>
</template>

<style scoped>
.lang-btn {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  color: var(--linden-charcoal-soft);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.lang-btn:hover {
  background: var(--linden-green-100);
  color: var(--linden-green-900);
}

.lang-btn--active {
  background: var(--linden-green-700);
  color: white;
}
</style>
