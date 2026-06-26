import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const slides = [
  {
    id: 'dunkin',
    name: "Dunkin'",
    file: 'brand-dunkin.png',
    description: 'Digital campaigns and platform development for one of the largest coffee and baked goods chains.',
  },
  {
    id: 'rio2016',
    name: 'Rio 2016',
    file: 'brand-rio2016.png',
    description: 'Digital experiences for the Rio 2016 Olympic Games.',
  },
  {
    id: 'fiat',
    name: 'Fiat',
    file: 'brand-fiat.png',
    description: 'Digital advertising and campaign solutions for the automotive giant.',
  },
  {
    id: 'nissin',
    name: 'Nissin',
    file: 'brand-nissin.png',
    description: 'Web platforms and brand experiences for the global food company.',
  },
  {
    id: 'jeep',
    name: 'Jeep',
    file: 'brand-jeep.png',
    description: 'I had the opportunity to be part of the team that created the first Jeep website in Brazil.',
  },
]

function BrandCarousel() {
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
  }

  return (
    <section className="brand-carousel" id="brand-carousel">
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
