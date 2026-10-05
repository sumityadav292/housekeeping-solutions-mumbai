import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import LocationMap from "./components/LocationMap";
import Footer from "./components/Footer";
import TrustStrip from "./components/TrustStrip";
import ScrollReveal from "./components/ScrollReveal";
import HousekeepingPage from "./pages/services/HousekeepingPage";
import HouseCleaningPage from "./pages/services/HouseCleaningPage";
import AboutPage from "./pages/AboutPage";
import OfficeBoyPage from "./pages/services/OfficeBoyPage";
import PantryBoyPage from "./pages/services/PantryBoyPage";
import FacilityManagementPage from "./pages/services/FacilityManagementPage";
import WhyUsPage from "./pages/WhyUsPage";
import ContactPage from "./pages/ContactPage";

function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Contact />
      <LocationMap />
      
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
  path="/services/housekeeping"
  element={<HousekeepingPage />}
/>

<Route
  path="/services/house-cleaning"
  element={<HouseCleaningPage />}
/>

<Route
  path="/services/office-boy"
  element={<OfficeBoyPage />}
/>

<Route
  path="/services/pantry-boy"
  element={<PantryBoyPage />}
/>

<Route
  path="/services/facility-management"
  element={<FacilityManagementPage />}
/>

<Route path="/why-us" element={<WhyUsPage />} />

<Route path="/contact" element={<ContactPage />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;