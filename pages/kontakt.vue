<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('nav.contact'),
  description: () => t('contact.subtitle')
})

const pageRef = ref<HTMLElement | null>(null)
useReveal(pageRef)

const CONTACT_ADDRESS = 'Lindenstraße 230, 40235 Düsseldorf'
const CONTACT_EMAIL = 'lindenbuedchen@gmail.com'
// Not provided yet — shown as a placeholder until the real number is set.
const CONTACT_PHONE_PLACEHOLDER: string | null = null

const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_ADDRESS)}`
</script>

<template>
  <div ref="pageRef" class="linden-container section-page">
    <header class="section-page__head" data-reveal>
      <p class="linden-eyebrow">{{ t('contact.eyebrow') }}</p>
      <h1>{{ t('contact.title') }}</h1>
      <p class="section-page__subtitle">{{ t('contact.subtitle') }}</p>
    </header>

    <div class="linden-card contact-card" data-reveal>
      <dl>
        <div class="contact-card__row">
          <dt>{{ t('contact.addressLabel') }}</dt>
          <dd>{{ CONTACT_ADDRESS }}</dd>
        </div>
        <div class="contact-card__row">
          <dt>{{ t('contact.phoneLabel') }}</dt>
          <dd>
            <a :href="`tel:${CONTACT_PHONE_PLACEHOLDER ?? ''}`">
              {{ CONTACT_PHONE_PLACEHOLDER ?? t('contact.phonePlaceholder') }}
            </a>
          </dd>
        </div>
        <div class="contact-card__row">
          <dt>{{ t('contact.emailLabel') }}</dt>
          <dd>
            <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
          </dd>
        </div>
      </dl>

      <a :href="GOOGLE_MAPS_URL" target="_blank" rel="noopener noreferrer" class="contact-card__cta">
        <UIcon name="i-heroicons-map-pin" class="w-5 h-5" aria-hidden="true" />
        {{ t('contact.mapCta') }}
      </a>

      <p class="contact-card__note">{{ t('contact.placeholderNote') }}</p>
    </div>
  </div>
</template>

<style scoped>
.section-page {
  padding-block: 3rem 5rem;
}

.section-page__head {
  max-width: 60ch;
  margin-bottom: 2.5rem;
}

.section-page__head h1 {
  font-size: clamp(1.9rem, 3.2vw, 2.6rem);
  margin-top: 0.6rem;
}

.section-page__subtitle {
  margin-top: 0.9rem;
  font-size: 1.05rem;
}

.contact-card {
  padding: 2rem;
  max-width: 480px;
}

.contact-card__row {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 1.25rem;
}

.contact-card__row dt {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--linden-charcoal-soft);
}

.contact-card__row dd {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--linden-green-900);
}

.contact-card__row a {
  text-decoration: none;
  color: var(--linden-green-900);
}

.contact-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.8rem 1.4rem;
  border-radius: 999px;
  background: var(--linden-terracotta);
  color: var(--linden-cream);
  text-decoration: none;
  font-weight: 600;
}

.contact-card__cta:hover {
  background: var(--linden-terracotta-600);
}

.contact-card__note {
  margin-top: 1.25rem;
  font-size: 0.82rem;
  color: var(--linden-charcoal-soft);
}
</style>
