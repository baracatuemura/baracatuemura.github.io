import React from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import BrandCarousel from './components/BrandCarousel'
import About from './components/About'
import Skills from './components/Skills'
import Brands from './components/Brands'
import EcommerceGallery from './components/EcommerceGallery'
import Experience from './components/Experience'
import Education from './components/Education'
import Languages from './components/Languages'
import ExperienceBubbles from './components/ExperienceBubbles'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <ExperienceBubbles />
      <About />
      <BrandCarousel />
      <Skills />
      <Brands />
      <Experience />
      <EcommerceGallery />
      <Education />
      <Languages />
      <Footer />
    </>
  )
}

export default App
