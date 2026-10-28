import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export function useLenis() {
  useEffect(() => {
    // Respect user's motion preference - skip smooth scroll if preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    // Initialize ultra-smooth Lenis instance with standard high-performance lerp
    // Lerp mode provides continuous, zero-jank 60/120fps scrolling without duration stutter
    const lenis = new Lenis({
      lerp: 0.09,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      infinite: false,
      autoRaf: true,
    })

    // Expose lenis instance to window for global access if needed
    ;(window as unknown as { __lenis?: Lenis }).__lenis = lenis

    // Handle internal anchor clicks with Lenis smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement) {
          lenis.scrollTo(targetElement as HTMLElement, { offset: -70, duration: 1.0 })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      lenis.destroy()
      delete (window as unknown as { __lenis?: Lenis }).__lenis
    }
  }, [])
}
