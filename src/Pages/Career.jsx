import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallNav from "../Components/SmallNav";
import Hero from "../Components/CareersComponents/Hero";
import OpenPositions from "../Components/CareersComponents/OpenPositions";
import ApplicationForm from "../Components/CareersComponents/ApplicationForm";
import LifeAtXteriya from "../Components/CareersComponents/LifeAtXteriya";

export default function CareerPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  return (

    <>

   <SmallNav pageName="Careers" />  
    <Hero />
     <OpenPositions />
     <ApplicationForm />
     <LifeAtXteriya />
     
    </>
  );
}
