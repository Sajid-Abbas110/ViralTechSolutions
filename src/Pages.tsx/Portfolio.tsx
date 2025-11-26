import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PortfolioSection from "../components/PortfolioSection"
import Card from "../components/Card"
import TestimonialSection from "../components/Testimonial"
import Success from "../components/Success"

const Portfolio = () => {
  return (
    <div>
      <Navbar/>
      <PortfolioSection/>
      <Card/>
      <TestimonialSection/>
      <Success/>
      
      <Footer/>
    </div>
  )
}

export default Portfolio
