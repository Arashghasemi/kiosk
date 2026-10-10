<script setup lang="ts">
import type { FeedbackFormState } from '~/types'

const { t } = useI18n()

const form = reactive<FeedbackFormState>({
  name: '',
  rating: 0,
  message: ''
})

const hoverRating = ref(0)
const isSubmitting = ref(false)
const isSubmitted = ref(false)
const submitFailed = ref(false)
const touched = reactive({ rating: false, message: false })

const messageError = computed(() => {
  if (!touched.message) return null
  return form.message.trim().length < 10 ? t('feedback.messageError') : null
})

const ratingError = computed(() => {
  if (!touched.rating) return null
  return form.rating < 1 ? t('feedback.ratingError') : null
})

const isValid = computed(() => form.rating >= 1 && form.message.trim().length >= 10)

function setRating(value: number) {
  form.rating = value
  touched.rating = true
}

async function handleSubmit() {
  touched.rating = true
  touched.message = true
  if (!isValid.value) return

  isSubmitting.value = true
  submitFailed.value = false

  try {
    await $fetch('/api/feedback', {
      method: 'POST',
      body: { name: form.name, rating: form.rating, message: form.message }
    })
    isSubmitted.value = true
  } catch {
    submitFailed.value = true
  } finally {
    isSubmitting.value = false
  }
}

function resetForm() {
  form.name = ''
  form.rating = 0
  form.message = ''
  touched.rating = false
  touched.message = false
  isSubmitted.value = false
  submitFailed.value = false
}
</script>

<template>
  <div class="linden-card feedback-form">
    <Transition name="fade" mode="out-in">
      <div v-if="isSubmitted" key="success" class="feedback-success" role="status">
        <span class="feedback-success__icon">
          <UIcon name="i-heroicons-check-circle" class="w-9 h-9" />
        </span>
        <h3>{{ t('feedback.successTitle') }}</h3>
        <p>{{ t('feedback.successBody') }}</p>
        <button type="button" class="feedback-form__secondary-btn" @click="resetForm">
          {{ t('feedback.sendAnother') }}
        </button>
      </div>

      <form v-else key="form" novalidate @submit.prevent="handleSubmit">
        <div class="feedback-field">
          <label for="feedback-name">{{ t('feedback.nameLabel') }}</label>
          <input
            id="feedback-name"
            v-model="form.name"
            type="text"
            autocomplete="name"
            :placeholder="t('feedback.namePlaceholder')"
          >
        </div>

        <div class="feedback-field">
          <span id="feedback-rating-label" class="feedback-field__label-text">{{ t('feedback.ratingLabel') }}</span>
          <div
            class="feedback-stars"
            role="radiogroup"
            aria-labelledby="feedback-rating-label"
          >
            <button
              v-for="star in 5"
              :key="star"
              type="button"
              role="radio"
              class="feedback-star"
              :aria-checked="form.rating === star"
              :aria-label="`${star} / 5`"
              @click="setRating(star)"
              @mouseenter="hoverRating = star"
              @mouseleave="hoverRating = 0"
            >
              <UIcon
                :name="(hoverRating || form.rating) >= star ? 'i-heroicons-star-solid' : 'i-heroicons-star'"
                class="w-7 h-7"
              />
            </button>
          </div>
          <p v-if="ratingError" class="feedback-field__error" role="alert">{{ ratingError }}</p>
        </div>

        <div class="feedback-field">
          <label for="feedback-message">{{ t('feedback.messageLabel') }}</label>
          <textarea
            id="feedback-message"
            v-model="form.message"
            rows="4"
            :placeholder="t('feedback.messagePlaceholder')"
            :aria-invalid="!!messageError"
            :aria-describedby="messageError ? 'feedback-message-error' : undefined"
            @blur="touched.message = true"
          />
          <p v-if="messageError" id="feedback-message-error" class="feedback-field__error" role="alert">
            {{ messageError }}
          </p>
        </div>

        <p v-if="submitFailed" class="feedback-field__error" role="alert">{{ t('feedback.submitError') }}</p>

        <button type="submit" class="feedback-form__submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? t('feedback.submitting') : t('feedback.submit') }}
        </button>

        <p class="feedback-form__privacy">{{ t('feedback.privacyNote') }}</p>
      </form>
    </Transition>
  </div>
</template>

<style scoped>
.feedback-form {
  padding: 2rem;
  max-width: 560px;
}

@media (min-width: 640px) {
  .feedback-form {
    padding: 2.5rem;
  }
}

.feedback-field {
  margin-bottom: 1.5rem;
}

.feedback-field label,
.feedback-field__label-text {
  display: block;
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--linden-green-900);
  margin-bottom: 0.5rem;
}

.feedback-field input,
.feedback-field textarea {
  width: 100%;
  border: 1.5px solid var(--linden-line);
  background: var(--linden-cream);
  border-radius: var(--linden-radius-sm);
  padding: 0.75rem 1rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--linden-charcoal);
  resize: vertical;
}

.feedback-field input:focus,
.feedback-field textarea:focus {
  border-color: var(--linden-green-700);
}

.feedback-field__error {
  margin-top: 0.5rem;
  color: var(--linden-terracotta-600);
  font-size: 0.85rem;
  font-weight: 500;
}

.feedback-stars {
  display: flex;
  gap: 0.4rem;
}

.feedback-star {
  color: var(--linden-terracotta);
  padding: 0.2rem;
  border-radius: 6px;
}

.feedback-form__submit-btn {
  width: 100%;
  padding: 0.9rem 1.5rem;
  border-radius: 999px;
  background: var(--linden-green-700);
  color: var(--linden-cream);
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.feedback-form__submit-btn:hover:not(:disabled) {
  background: var(--linden-green-900);
}

.feedback-form__submit-btn:disabled {
  opacity: 0.7;
  cursor: progress;
}

.feedback-form__secondary-btn {
  margin-top: 1.5rem;
  padding: 0.7rem 1.3rem;
  border-radius: 999px;
  border: 1.5px solid var(--linden-green-700);
  color: var(--linden-green-900);
  font-weight: 600;
  font-size: 0.9rem;
}

.feedback-form__secondary-btn:hover {
  background: var(--linden-green-100);
}

.feedback-form__privacy {
  margin-top: 1.25rem;
  font-size: 0.8rem;
  color: var(--linden-charcoal-soft);
  line-height: 1.55;
}

.feedback-success {
  text-align: center;
  padding: 1.5rem 0.5rem;
}

.feedback-success__icon {
  display: inline-flex;
  color: var(--linden-green-700);
  margin-bottom: 0.75rem;
}

.feedback-success h3 {
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
}

.feedback-success p {
  margin-bottom: 0.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
