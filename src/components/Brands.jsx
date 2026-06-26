import brands from '../data/brands'

function Brands() {
  return (
    <section className="section" id="brands">
      <div className="container">
        <h2><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>Brands I've Worked With</h2>
        <ul className="brand-grid">
          {brands.map((brand) => (
            <li key={brand.id} className="brand-item">
              <img src={`assets/images/brands/${brand.file}`} alt={brand.name} loading="lazy" />
              <span>{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Brands
