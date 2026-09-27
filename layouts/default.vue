<script setup lang="ts">
const { t, locale } = useI18n()

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  titleTemplate: (chunk) => {
    if (!chunk) return t('meta.title')
    // Avoid "Lindenbüdchen – … · Lindenbüdchen" on pages (like Home) whose
    // own title already contains the brand name.
    return chunk.includes(t('meta.titleSuffix')) ? chunk : `${chunk} · ${t('meta.titleSuffix')}`
  }
}))
</script>

<template>
  <div class="linden-app">
    <a href="#main-content" class="skip-link">{{ t('nav.skipToContent') }}</a>
    <AppHeader />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
