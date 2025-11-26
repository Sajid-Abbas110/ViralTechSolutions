import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import MobileAppsSection from '../components/MobileAppsSection'
import Choose from '../components/Choose'
import Audience from '../components/Audience'
import AppGallery from '../components/AppGallery'
import Message from '../components/Message'
import Spectrum from '../components/Spectrum'
import Tech from '../components/Tech'
import FaqsMobile from '../components/FaqsMobile'
import Partner from '../components/Partner'
import Innovator from "../components/Innovator"

const MobileApps = () => {
  return (
    <div>
      <Navbar/>
      <MobileAppsSection/>
      <Choose/>
      <Audience/>
      <AppGallery/>
      <Message/>
      <Spectrum/>
      <Tech/>
      <FaqsMobile/>
      <Partner/>
      <Innovator/>
      <Footer/>
    </div>
  )
}

export default MobileApps
