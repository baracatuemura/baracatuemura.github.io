import React, { useRef, useEffect, useState, useCallback } from 'react'
import experience from '../data/experience'

const clientBrands = {
  summa: [
    "Dunkin'", "Papa John's", 'Popeyes', 'Bembos', 'China Wok',
    'Don Belisario', 'Melt Pizzas', 'Rosen',
    'Cetrogar', 'Efe', 'Casa del Audio', 'Hendel', 'Promelsa',
    'Ceven', 'Paruolo', 'Ver', 'Devre', 'Grisino', 'Broer',
    'Crisol', 'LikeMe', 'Skullcandy', 'Club de Beneficios',
    'Motocorp',
  ],
  bees: [
    'AB InBev', 'Budweiser', 'Stella Artois', 'Corona',
    'Brahma', 'Skol', 'Antarctica', 'Beck\'s',
  ],
  redstage: ['Catgenie', 'Tweezerman', 'Yummy Mummy', "Gerber Children's"],
  isobar_ms: ['Rio 2016'],
  esfera: ['Norte Marketing', 'Ativo.com', 'Circuito das Estações', 'Night Run', 'Bravus Race'],
  isobar2: ['Fiat', 'Jeep', 'Chrysler'],
  zaboo: ['Zaboo! (Startup)'],
  brancozulu: [
    'Dunlop Pneus', 'CertSign', 'Rede Frango Assado',
    'Rascal', 'Trevisan', 'Cervejaria Nacional',
    'Central Clinic', 'TV Zimbo',
  ],
  ogilvy: [
    'The Office Frei Caneca', 'Ventura Enceada Guaruja', 'Lumina', 'Graciosa Home Resort',
    'Ecoville', 'Osasco Prime Center', 'Rossi Allegro',
  ],
}

const TEXT_COLOR_OVERRIDES = {
  bees: '#000',
  zaboo: '#000',
}

function bubbleTextColor(hex, id) {
  if (id && TEXT_COLOR_OVERRIDES[id]) return TEXT_COLOR_OVERRIDES[id]
  return '#fff'
}

function radiusFor(count) {
  if (count >= 20) return 76
  if (count >= 10) return 56
  if (count >= 4) return 42
  if (count >= 2) return 32
  return 26
}

const LOGO_COLORS = {
  summa: '#26757c',
  bees: '#fefe00',
  redstage: '#6330f5',
  isobar_ms: '#fa4f00',
  esfera: '#121fc8',
  isobar2: '#fa4f00',
  presenca: '#354cfd',
  zaboo: '#99ee99',
  brancozulu: '#000000',
  ogilvy: '#eb3e42',
}

const COLORS = [
  '#6366f1', '#ec4899', '#14b8a6', '#f59e0b',
  '#8b5cf6', '#06b6d4', '#f97316', '#84cc16',
]

function ExperienceBubbles() {
  const svgRef = useRef(null)
  const requestRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const smoothMouse = useRef({ x: -9999, y: -9999 })
  const bubblesRef = useRef([])
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)
  const [dims, setDims] = useState({ w: 800, h: 500 })
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const parent = svg.parentElement
    const w = parent.clientWidth
    const h = parent.clientHeight || 500
    setDims({ w, h })

    const brandsArr = Object.entries(clientBrands)
    const bubbles = experience.map((job, i) => {
      const brands = brandsArr.find(([id]) => id === job.id)
      const count = brands ? brands[1].length : 0
      const r = radiusFor(count)
      const color = LOGO_COLORS[job.id] || COLORS[i % COLORS.length]
      return {
        id: job.id,
        company: job.company,
        title: job.title,
        date: job.date,
        description: job.description,
        projects: job.projects || [],
        logo: job.logo,
        placeholder: job.placeholder,
        brands: brands ? brands[1] : [],
        brandCount: count,
        r,
        mass: r * 2,
        x: 80 + Math.random() * (w - 160),
        y: 80 + Math.random() * (h - 160),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        color,
      }
    })
    bubblesRef.current = bubbles
  }, [])

  const animate = useCallback(() => {
    const bubs = bubblesRef.current
    if (!bubs.length) {
      requestRef.current = requestAnimationFrame(animate)
      return
    }
    const raw = mouseRef.current
    const sm = smoothMouse.current
    sm.x += (raw.x - sm.x) * 0.12
    sm.y += (raw.y - sm.y) * 0.12
    const { x: mx, y: my } = sm
    const { w, h } = dims

    for (let i = 0; i < bubs.length; i++) {
      const b = bubs[i]

      for (let j = i + 1; j < bubs.length; j++) {
        const o = bubs[j]
        const dx = o.x - b.x
        const dy = o.y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        const minDist = (b.r + o.r) * 3
        if (dist < minDist) {
          const force = (minDist - dist) * 0.003
          const nx = dx / dist
          const ny = dy / dist
          b.vx -= nx * force
          b.vy -= ny * force
          o.vx += nx * force
          o.vy += ny * force
        }
      }

      if (mx > 0 && my > 0) {
        const dx = mx - b.x
        const dy = my - b.y
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        const grav = Math.min(600 / (dist + 80), 0.25)
        b.vx += (dx / dist) * grav * 0.02
        b.vy += (dy / dist) * grav * 0.02
      }

      const cx = w / 2
      const cy = h / 2
      const cdx = cx - b.x
      const cdy = cy - b.y
      const cdist = Math.sqrt(cdx * cdx + cdy * cdy) || 1
      b.vx += (cdx / cdist) * 0.003
      b.vy += (cdy / cdist) * 0.003

      b.vx *= 0.98
      b.vy *= 0.98

      b.x += b.vx
      b.y += b.vy

      const margin = b.r + 4
      if (b.x < margin) { b.x = margin; b.vx *= -0.3 }
      if (b.x > w - margin) { b.x = w - margin; b.vx *= -0.3 }
      if (b.y < margin) { b.y = margin; b.vy *= -0.3 }
      if (b.y > h - margin) { b.y = h - margin; b.vy *= -0.3 }
    }

    requestRef.current = requestAnimationFrame(animate)
    setTick((t) => t + 1)
  }, [dims])

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [animate])

  const handleMouseMove = useCallback((e) => {
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 }
    smoothMouse.current = { x: -9999, y: -9999 }
    setHovered(null)
  }, [])

  const handleBubbleEnter = useCallback((id) => {
    setHovered(id)
  }, [])

  const handleBubbleLeave = useCallback(() => {
    setHovered(null)
  }, [])

  const [origin, setOrigin] = useState(null)
  const [phase, setPhase] = useState(null)

  const handleBubbleClick = useCallback((id, e) => {
    setSelected((prev) => {
      if (prev === id) return prev
      const svg = svgRef.current
      if (!svg) return id
      const rect = svg.getBoundingClientRect()
      const bubble = bubblesRef.current.find((b) => b.id === id)
      if (!bubble) return id
      setOrigin({
        x: rect.left + bubble.x,
        y: rect.top + bubble.y,
        r: bubble.r,
        color: bubble.color,
        textColor: bubbleTextColor(bubble.color, id),
      })
      setPhase('entering')
      return id
    })
  }, [])

  const closeDetail = useCallback(() => {
    setPhase('leaving')
  }, [])

  const handleAnimEnd = useCallback(() => {
    if (phase === 'leaving') {
      setSelected(null)
      setOrigin(null)
      setPhase(null)
    }
    if (phase === 'entering') {
      setPhase('open')
    }
  }, [phase])

  const bubbles = bubblesRef.current

  return (
    <section className="section" id="experience-bubbles">
      <div className="bubbles-wrapper">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${dims.w} ${dims.h}`}
          className="bubbles-svg"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {bubbles.map((b) => {
            const isHovered = hovered === b.id
            const isSelected = selected === b.id
            const showSatellites = isHovered && !isSelected
            const currentR = isSelected ? b.r * 1.6 : b.r

            return (
              <g key={b.id}>
                {showSatellites && b.brands.map((brand, bi) => {
                  const angle = (2 * Math.PI * bi) / b.brands.length - Math.PI / 2
                  const dist = b.r + 100 + (b.brandCount > 10 ? 50 : 0)
                  const sx = b.x + Math.cos(angle) * dist
                  const sy = b.y + Math.sin(angle) * dist
                  const sr = Math.max(28, Math.min(50, 90 / Math.sqrt(b.brandCount)))
                  return (
                    <g key={brand}>
                      <line
                        x1={b.x} y1={b.y} x2={sx} y2={sy}
                        stroke={b.color} strokeWidth="1.2"
                        strokeDasharray="3,3" opacity="0.4"
                      />
                      <circle
                        cx={sx} cy={sy} r={sr}
                        fill={b.color} opacity="0.7"
                      />
                      <text
                        x={sx} y={sy}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize="11"
                        fill={bubbleTextColor(b.color, b.id)}
                        fontWeight="600"
                      >
                        {brand.length > 10 ? brand.slice(0, 10) + '…' : brand}
                      </text>
                    </g>
                  )
                })}

                {showSatellites && (
                  <circle
                    cx={b.x} cy={b.y}
                    r={currentR * 1.15}
                    fill="none"
                    stroke={b.color}
                    strokeWidth="1.5"
                    opacity="0.5"
                    strokeDasharray="3,3"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from={`0 ${b.x} ${b.y}`}
                      to={`360 ${b.x} ${b.y}`}
                      dur="8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}

                <clipPath id={`clip-${b.id}`}>
                  <circle cx={b.x} cy={b.y} r={currentR - 1} />
                </clipPath>

                <circle
                  cx={b.x} cy={b.y}
                  r={currentR}
                  fill={isSelected ? b.color : `${b.color}dd`}
                  stroke={isHovered || isSelected ? '#fff' : b.color}
                  strokeWidth={isHovered || isSelected ? 2 : 0}
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={() => handleBubbleEnter(b.id)}
                  onMouseLeave={handleBubbleLeave}
                  onClick={(e) => handleBubbleClick(b.id, e)}
                />

                {b.logo ? (
                  <image
                    href={b.logo}
                    x={b.x - currentR + 3}
                    y={b.y - currentR + 3}
                    width={(currentR - 3) * 2}
                    height={(currentR - 3) * 2}
                    clipPath={`url(#clip-${b.id})`}
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  />
                ) : (
                  <text
                    x={b.x} y={b.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={bubbleTextColor(b.color, b.id)}
                    fontSize={Math.min(currentR * 0.5, 18)}
                    fontWeight="700"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {b.placeholder || b.company.slice(0, 6)}
                  </text>
                )}

                {isSelected && (
                  <text
                    x={b.x} y={b.y + currentR * 0.45}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill={bubbleTextColor(b.color, b.id)}
                    fontSize="14"
                    fontWeight="600"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {b.brandCount} {b.brandCount === 1 ? 'brand' : 'brands'}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {selected && origin && experience.find((e) => e.id === selected) && (() => {
        const job = experience.find((e) => e.id === selected)
        return (
          <div className="bubbles-expand" onClick={closeDetail}>
            <div
              className={`bubbles-expand-circle ${phase === 'leaving' ? 'bubbles-expand-circle--leave' : ''}`}
              style={{
                '--origin-x': `${origin.x}px`,
                '--origin-y': `${origin.y}px`,
                '--start-r': `${origin.r}px`,
                '--bg-color': origin.color,
              }}
              onAnimationEnd={handleAnimEnd}
            />
            <div className={`bubbles-expand-content${phase === 'leaving' ? ' bubbles-expand-content--leave' : ''}`} onClick={(e) => e.stopPropagation()}>
              <button className="bubbles-expand-close" onClick={closeDetail}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="bubbles-expand-logo">
                {job.logo ? (
                  <img src={job.logo} alt={`${job.company} logo`} />
                ) : (
                  <div className="bubbles-expand-logo-placeholder">
                    {job.placeholder}
                  </div>
                )}
              </div>
              <div className="bubbles-detail-header">
                <h3>{job.company}</h3>
                <span className="bubbles-detail-date">{job.date}</span>
              </div>
              <p className="bubbles-detail-title" style={{ color: origin.textColor }}>{job.title}</p>
              <div
                className="bubbles-detail-desc"
                style={{ color: origin.textColor }}
                dangerouslySetInnerHTML={{ __html: job.description }}
              />
              {job.projects?.length > 0 && (
                <ul className="bubbles-detail-projects">
                  {job.projects.map((p) => <li key={p}>{p}</li>)}
                </ul>
              )}
            </div>
          </div>
        )
      })()}
    </section>
  )
}

export default ExperienceBubbles
