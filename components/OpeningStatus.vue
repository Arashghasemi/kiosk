<script setup lang="ts">
const { t } = useI18n()

const props = withDefaults(defineProps<{ variant?: 'badge' | 'inline' }>(), {
  variant: 'badge'
})

const now = ref(new Date())
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 30000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const status = useOpeningStatus(computed(() => now.value))

const label = computed(() => {
  const s = status.value
  if (s.state === 'open') return t('status.closesAt', { time: s.time })
  if (s.state === 'closesSoon') return t('status.closesSoon', { time: s.time })
  if (s.state === 'opensAt') return t('status.opensAt', { time: s.time })
  return t('status.closed')
})

const isOpen = computed(() => status.value.state === 'open' || status.value.state === 'closesSoon')
</script>

<template>
  <ClientOnly>
    <span
      class="opening-status"
      :class="[`opening-status--${props.variant}`, isOpen ? 'opening-status--open' : 'opening-status--closed']"
      role="status"
    >
      <span class="opening-status__dot" aria-hidden="true" />
      {{ label }}
    </span>
    <template #fallback>
      <span class="opening-status opening-status--loading">{{ t('hero.statusLoading') }}</span>
    </template>
  </ClientOnly>
</template>

<style scoped>
.opening-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: var(--linden-card);
  color: var(--linden-green-900);
  border: 1px solid var(--linden-line);
}

.opening-status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--linden-charcoal-soft);
}

.opening-status--open .opening-status__dot {
  background: #4a7c59;
}

.opening-status--closed .opening-status__dot {
  background: var(--linden-terracotta);
}

.opening-status--loading {
  color: var(--linden-charcoal-soft);
}
</style>
