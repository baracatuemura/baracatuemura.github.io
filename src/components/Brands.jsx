import React from 'react'
import brands from '../data/brands'

function Brands() {
  return (
    <section className="section" id="brands">
      <div className="container">
        <h2>Brands I've Worked With</h2>
        <div className="brand-grid">
          {brands.map((brand) => (
            <div key={brand.id} className="brand-item">
              <img src={`assets/images/brands/${brand.file}`} alt={brand.name} />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
