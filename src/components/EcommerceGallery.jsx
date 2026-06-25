import React from 'react'
import stores from '../data/ecommerce'

function hexToRgb(hex) {
  const v = parseInt(hex.slice(1), 16)
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255]
}

function luminance(r, g, b) {
  const [R, G, B] = [r, g, b].map(c => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4
  })
  return 0.2126 * R + 0.7152 * G + 0.0722 * B
}

function EcommerceGallery() {
  return (
    <section className="section" id="ecommerce">
      <div className="container">
        <h2>E-Commerce Stores</h2>
        <div className="ecom-grid">
          {stores.map((store) => {
            const [r, g, b] = hexToRgb(store.color)
            const textColor = luminance(r, g, b) > 0.5 ? '#1e293b' : '#fff'
            return (
              <div key={store.id} className="ecom-card">
                <div className="ecom-card-inner">
                  <div className="ecom-card-front">
                    <img src={`assets/images/ecommerce/${store.id}.png`} alt={store.name} />
                  </div>
                  <div
                    className="ecom-card-back"
                    style={{ '--card-color': store.color, '--card-text': textColor }}
                  >
                    <h3>{store.name}</h3>
                    <p>{store.description}</p>
                    <span className="ecom-url">{store.url}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EcommerceGallery
