import Nav from '../components/Nav'
import Header from '../components/Header'
import BrandCarousel from '../components/BrandCarousel'
import About from '../components/About'
import Skills from '../components/Skills'
import Brands from '../components/Brands'
import Experience from '../components/Experience'
import EcommerceGallery from '../components/EcommerceGallery'
import Education from '../components/Education'
import Languages from '../components/Languages'
import ExperienceBubbles from '../components/ExperienceBubbles'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Nav />
      <Header />
      <BrandCarousel />
      <About />
      <Skills />
      <Brands />
      <Experience />
      <EcommerceGallery />
      <Education />
      <Languages />
      <ExperienceBubbles />
      <Footer />
    </>
  )
}

export default Home
