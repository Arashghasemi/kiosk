import { onMounted, onBeforeUnmount, type Ref } from 'vue'

/**
 * Applies a single, restrained fade+translate reveal to all [data-reveal]
 * elements within the given container once they enter the viewport.
 * Respects prefers-reduced-motion via the CSS in assets/css/main.css.
 */
export function useReveal(containerRef: Ref<HTMLElement | null>) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const root = containerRef.value
    if (!root) return

    const targets = root.querySelectorAll<HTMLElement>('[data-reveal]')

    if (typeof IntersectionObserver === 'undefined' || targets.length === 0) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el, index) => {
      el.classList.add('reveal')
      el.style.transitionDelay = `${Math.min(index * 60, 240)}ms`
      observer?.observe(el)
    })
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
  })
}
