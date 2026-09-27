<script setup lang="ts">
defineProps<{ icon: string; label: string }>()
</script>

<template>
  <div class="feature-item" data-reveal>
    <span class="feature-item__icon">
      <UIcon :name="icon" class="w-6 h-6" />
    </span>
    <span class="feature-item__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: var(--linden-radius-md);
  background: var(--linden-card);
  border: 1px solid var(--linden-line);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.feature-item:hover {
  transform: translateY(-3px);
  box-shadow: var(--linden-shadow-card);
}

.feature-item__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--linden-green-100);
  color: var(--linden-green-700);
}

.feature-item__label {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--linden-green-900);
}
</style>
