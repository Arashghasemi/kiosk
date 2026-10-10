/**
 * Receives feedback submissions from FeedbackForm.vue and emails them to
 * the kiosk's inbox via Resend (https://resend.com).
 *
 * Setup: create a free Resend account with lindenbuedchen@gmail.com, create
 * an API key, and set it as the NUXT_RESEND_API_KEY environment variable
 * (in Vercel: Project → Settings → Environment Variables). Because the
 * recipient below is the same address the Resend account is created with,
 * no sending-domain verification is required.
 *
 * Without that env var set, submissions are still accepted (the form still
 * shows success) but are only logged server-side, not emailed.
 */
const RECIPIENT = 'lindenbuedchen@gmail.com'

interface FeedbackBody {
  name?: string
  rating?: number
  message?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<FeedbackBody>(event)

  const name = (body?.name ?? '').toString().trim().slice(0, 100)
  const rating = Number(body?.rating)
  const message = (body?.message ?? '').toString().trim().slice(0, 2000)

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid rating' })
  }
  if (message.length < 10) {
    throw createError({ statusCode: 400, statusMessage: 'Message too short' })
  }

  const config = useRuntimeConfig()
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating)

  if (!config.resendApiKey) {
    console.warn('[feedback] NUXT_RESEND_API_KEY not set — submission logged only:', {
      name: name || '(no name given)',
      rating,
      message
    })
    return { ok: true, delivered: false }
  }

  await $fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${config.resendApiKey}` },
    body: {
      from: 'Lindenbüdchen Feedback <onboarding@resend.dev>',
      to: [RECIPIENT],
      subject: `Neues Feedback (${stars})`,
      text: `Name: ${name || '(nicht angegeben)'}\nBewertung: ${stars} (${rating}/5)\n\nNachricht:\n${message}`
    }
  })

  return { ok: true, delivered: true }
})
