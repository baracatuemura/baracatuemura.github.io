import useScrollSpy from '../hooks/useScrollSpy'

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
  const active = useScrollSpy(sections)

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
