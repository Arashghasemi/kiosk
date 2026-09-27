<script setup lang="ts">
import { weeklyHours } from '~/data/openingHours'

const { t } = useI18n()

const now = ref(new Date())
let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 60000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const todayIndex = computed(() => now.value.getDay())

const orderedDays = computed(() => {
  // Present the week starting Monday, ending Sunday.
  const order = [1, 2, 3, 4, 5, 6, 0]
  return order.map((day) => weeklyHours.find((h) => h.day === day)!).filter(Boolean)
})
</script>

<template>
  <div class="linden-card opening-hours" role="table" :aria-label="t('hours.title')">
    <div
      v-for="entry in orderedDays"
      :key="entry.day"
      class="opening-hours__row"
      :class="{ 'opening-hours__row--today': entry.day === todayIndex }"
      role="row"
    >
      <span class="opening-hours__day" role="cell">
        {{ t(`hours.days.${entry.day}`) }}
        <span v-if="entry.day === todayIndex" class="opening-hours__today-tag">{{ t('hours.today') }}</span>
      </span>
      <span class="opening-hours__time" role="cell">
        <template v-if="entry.open && entry.close">{{ entry.open }} – {{ entry.close }}</template>
        <template v-else>{{ t('hours.closedLabel') }}</template>
      </span>
    </div>
  </div>
</template>

<style scoped>
.opening-hours {
  padding: 0.5rem 1.5rem;
}

.opening-hours__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem 0;
  border-bottom: 1px solid var(--linden-line);
  gap: 1rem;
}

.opening-hours__row:last-child {
  border-bottom: none;
}

.opening-hours__row--today {
  color: var(--linden-green-900);
}

.opening-hours__day {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 500;
  color: var(--linden-charcoal);
}

.opening-hours__today-tag {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: var(--linden-terracotta-100);
  color: var(--linden-terracotta-600);
}

.opening-hours__time {
  font-variant-numeric: tabular-nums;
  color: var(--linden-charcoal-soft);
  font-weight: 500;
}

.opening-hours__row--today .opening-hours__time {
  color: var(--linden-green-900);
  font-weight: 700;
}
</style>
