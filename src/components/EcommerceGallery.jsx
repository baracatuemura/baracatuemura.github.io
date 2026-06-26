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
        <h2><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.17 14.75l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25z"/></svg>E-Commerce Stores</h2>
      </div>
      <div className="ecom-grid">
          {stores.map((store) => {
            const [r, g, b] = hexToRgb(store.color)
            const textColor = luminance(r, g, b) > 0.5 ? '#1e293b' : '#fff'
            return (
              <article key={store.id} className="ecom-card">
                <div className="ecom-card-inner">
                  <div className="ecom-card-front">
                    <img src={`assets/images/ecommerce/${store.id}.webp`} alt={store.name} loading="lazy" />
                  </div>
                  <div
                    className="ecom-card-back"
                    style={{ '--card-color': store.color, '--card-text': textColor }}
                  >
                    <h3>{store.name}</h3>
                    {store.role ? (
                      <p className="store-role"><strong>Tech Stack & Role:</strong> {store.role}</p>
                    ) : (
                      <p>{store.description}</p>
                    )}
                    <a
                      href={`https://${store.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ecom-url"
                    >
                      Visit Website ↗
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
    </section>
  )
}

export default EcommerceGallery
