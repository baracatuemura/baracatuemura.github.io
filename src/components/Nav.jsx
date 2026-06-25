import React from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'brands', label: 'Brands' },
  { id: 'experience', label: 'Experience' },
  { id: 'ecommerce', label: 'E‑Commerce' },
  { id: 'education', label: 'Education' },
  { id: 'languages', label: 'Languages' },
]

function Nav() {
  const [active, setActive] = React.useState('')

  React.useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px' },
      )
    })

    observers.forEach((obs, i) => {
      if (obs) obs.observe(document.getElementById(sections[i].id))
    })

    return () => observers.forEach((obs) => obs?.disconnect())
  }, [])

  return (
    <nav className="m3-nav">
      <ul className="m3-nav__list">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`m3-nav__item${active === id ? ' active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
