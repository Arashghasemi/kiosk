<script setup lang="ts">
import type { ParcelProvider } from '~/types'

const props = defineProps<{ provider: ParcelProvider }>()
</script>

<template>
  <article class="provider-card" data-reveal>
    <div class="provider-card__badge" :style="{ backgroundColor: props.provider.color }">
      {{ props.provider.name }}
    </div>
    <h3 class="provider-card__title">{{ props.provider.name }}</h3>
    <ul class="provider-card__services">
      <li v-for="key in props.provider.servicesKeys" :key="key">
        <UIcon name="i-heroicons-check-circle" class="w-4 h-4 provider-card__check" aria-hidden="true" />
        {{ $t(key) }}
      </li>
    </ul>
  </article>
</template>

<style scoped>
.provider-card {
  padding: 1.75rem;
  border-radius: var(--linden-radius-md);
  background: var(--linden-card);
  border: 1px solid var(--linden-line);
  height: 100%;
}

.provider-card__badge {
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  margin-bottom: 1rem;
}

.provider-card__title {
  font-size: 1.1rem;
  margin-bottom: 0.85rem;
}

.provider-card__services {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.92rem;
  color: var(--linden-charcoal-soft);
}

.provider-card__services li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.provider-card__check {
  color: var(--linden-green-700);
  flex-shrink: 0;
}
</style>
