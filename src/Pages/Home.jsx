import { useEffect } from "react";
import AOS from "aos";
import Hero from "../Components/HomeComponents/Hero";
import VideoSection from "../Components/HomeComponents/VideoSection";
import Gallery from "../Components/HomeComponents/Gallery";
import TwoImageSection from "../Components/HomeComponents/TwoImageSection";
import ThreeImageSection from "../Components/HomeComponents/ThreeImageSection";
import ContactForm from "../Components/HomeComponents/ContactForm";



function Home(){
useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    return (
    <>
              <Hero />
              <VideoSection />
              <Gallery />
              <TwoImageSection />
              <ThreeImageSection />
              <ContactForm />
            
  
    </>
    )
}

export default Home;