import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el) => {
      new IntersectionObserver(([e]) => e.isIntersecting && el.classList.add('visible'), { threshold: 0.1 }).observe(el)
    })
  }, [])
}
