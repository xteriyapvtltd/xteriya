import { Routes, Route } from "react-router-dom";
import Preloader from "./Components/Preloader";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import WhatWeThink from "./Pages/WhatWeThink";
import AboutPage from "./Pages/About";
import CareerPage from "./Pages/Career";
import Home from "./Pages/Home";
import ContactUs from "./Pages/Contacts";


function App() {
  return (
    <>
     <Preloader>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/"
          element={
            <>
              <Hero />
              <VideoSection />
              <Gallery />
              <TwoImageSection />
              <ThreeImageSection />
              <ContactForm />
            </>
          }
        /> */}
        {/* <Route
          path="/what-we-think"
          element={
            <>
              <WhatWeThink />
              <WhatWeThinkFourRowSection />
            </>
          }
        /> */}
        <Route path="/what-we-think" element={<WhatWeThink />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      </Preloader>
    </>
  );
}

export default App;
