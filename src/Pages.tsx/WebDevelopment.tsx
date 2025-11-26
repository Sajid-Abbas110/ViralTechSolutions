import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WebDevelopmentSection from '../components/WebDevSection';
import Dream from '../components/Dream'
import Goals from '../components/Goals'
import Message from '../components/Message'
import Achieve from '../components/Achieve'
import FaqsWeb from '../components/FaqsWeb'
import Journey from '../components/Journey'
import Innovator from '../components/Innovator'
import GalleryWeb from '../components/GalleryWeb'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <WebDevelopmentSection/>
      <Dream/>
      <Goals/>
      <Message/>
      <GalleryWeb/>
      <Achieve/>
      <FaqsWeb/>
      <Journey/>
      <Innovator/>
      <Footer/>
    </div>
  )
}

export default Services
