import brands from '../data/brands'

function Brands() {
  return (
    <section className="section" id="brands">
      <div className="container">
        <h2>Brands I've Worked With</h2>
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
