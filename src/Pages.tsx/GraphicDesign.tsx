import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import GraphicSection from '../components/GraphicSection'
import Designer from '../components/Designer'
import Imagine from '../components/Imagine'
import GrapgicGallery from '../components/GraphicGallery'
import Message from '../components/Message'
import Appeal from '../components/Appeal'
import FaqsDesigning from '../components/FaqsDesigning'
import Impact from '../components/Impact'
import Innovator from "../components/Innovator"

const GraphicDesign = () => {
  return (
    <div>
      <Navbar/>
      <GraphicSection/>
      <Designer/>
      <Imagine/>
      <GrapgicGallery/>
      <Message/>
      <Appeal/>
      <FaqsDesigning/>
      <Impact/>
      <Innovator/>

      <Footer/>
    </div>
  )
}

export default GraphicDesign
