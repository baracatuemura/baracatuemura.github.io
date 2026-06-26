import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    id: 'dunkin',
    name: "Dunkin'",
    file: 'brand-dunkin.webp',
    description: 'Core architecture (Luma/Blank), dynamic UI components with Knockout.js, modular scripts via RequireJS, XML layout restructuring for scalability and performance.',
  },
  {
    id: 'papajohns',
    name: "Papa John's",
    file: 'brand-papajohns.webp',
    description: 'Scalable theme customizations via Magento\'s fallback system, LESS/CSS optimization, XML layout configuration, and back-end PHP adjustments.',
  },
  {
    id: 'rio2016',
    name: 'Rio 2016',
    file: 'brand-rio2016.webp',
    description: 'Digital experiences for the Rio 2016 Olympic Games.',
  },
  {
    id: 'fiat',
    name: 'Fiat',
    file: 'brand-fiat.webp',
    description: 'Digital advertising and campaign solutions for the automotive giant.',
  },
  {
    id: 'nissin',
    name: 'Nissin',
    file: 'brand-nissin.webp',
    description: 'Web platforms and brand experiences for the global food company.',
  },
  {
    id: 'jeep',
    name: 'Jeep',
    file: 'brand-jeep.webp',
    description: 'I had the opportunity to be part of the team that created the first Jeep website in Brazil.',
  },
]

function BrandCarousel() {
  const ref = React.useRef(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      el.querySelectorAll('.slick-slide[aria-hidden="true"]').forEach((slide) => {
        slide.setAttribute('inert', '')
      })
      el.querySelectorAll('.slick-slide[aria-hidden="false"]').forEach((slide) => {
        slide.removeAttribute('inert')
      })
    }

    const observer = new MutationObserver(update)
    observer.observe(el, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-hidden'] })
    update()
    return () => observer.disconnect()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '50px',
        },
      },
    ],
  }

  return (
    <section className="brand-carousel" id="brand-carousel" ref={ref}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="brand-carousel__slide">
            <div className="brand-carousel__content">
              <div className="brand-carousel__image">
                <img src={`assets/images/brands/${slide.file}`} alt={slide.name} loading="lazy" />
              </div>
              <div className="brand-carousel__info">
                <h2>{slide.name}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default BrandCarousel
