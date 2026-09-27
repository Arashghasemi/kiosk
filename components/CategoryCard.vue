<script setup lang="ts">
import type { ProductCategory } from '~/types'

defineProps<{ category: ProductCategory }>()
</script>

<template>
  <article class="category-card" data-reveal>
    <span class="category-card__icon">
      <UIcon :name="category.icon" class="w-7 h-7" />
    </span>
    <h3 class="category-card__title">{{ $t(category.nameKey) }}</h3>
    <p class="category-card__desc">{{ $t(category.descriptionKey) }}</p>
  </article>
</template>

<style scoped>
.category-card {
  padding: 1.75rem;
  border-radius: var(--linden-radius-md);
  background: var(--linden-card);
  border: 1px solid var(--linden-line);
  height: 100%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--linden-shadow-card);
}

.category-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: var(--linden-terracotta-100);
  color: var(--linden-terracotta-600);
  margin-bottom: 1.1rem;
}

.category-card__title {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.category-card__desc {
  font-size: 0.93rem;
  line-height: 1.55;
}
</style>
