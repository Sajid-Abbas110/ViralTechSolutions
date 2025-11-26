import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages.tsx/Home";
import About from "../src/Pages.tsx/About";
import Services from "../src/Pages.tsx/Services"
import WebDevelopment from "../src/Pages.tsx/WebDevelopment";
import MobileApps from "../src/Pages.tsx/MobileApps"
import GraphicDesign from '../src/Pages.tsx/GraphicDesign'
import Portfolio from "./Pages.tsx/Portfolio";
import ContactUs from "./Pages.tsx/ContactUs"
import OurTeam from "./Pages.tsx/OurTeam"
import ScrollToTopBar from "./components/ScrollToTopBar";


const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTopBar/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-development" element={<WebDevelopment/>} />
        <Route path="/mobile-apps" element={<MobileApps/>} />
        <Route path="/graphic-design" element={<GraphicDesign/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/our-team" element={<OurTeam/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
