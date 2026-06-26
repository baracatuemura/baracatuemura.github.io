import { useState, useEffect } from 'react'

export default function useScrollSpy(sections, options = {}) {
  const [active, setActive] = useState('')
  const { rootMargin = '-40% 0px -55% 0px' } = options

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin },
      )
    })

    observers.forEach((obs, i) => {
      if (obs) {
        const el = document.getElementById(sections[i].id)
        if (el) obs.observe(el)
      }
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [sections, rootMargin])

  return active
}
