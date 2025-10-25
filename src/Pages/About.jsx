
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmallNav from "../Components/SmallNav";
import Hero from "../Components/AboutComponents/Hero";
import MissionVission from "../Components/AboutComponents/MissionVission";
import OurCoreValue from "../Components/AboutComponents/OurCoreValue";
import MeetOurTeam from "../Components/AboutComponents/MeetOurTeam";


export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    
    <SmallNav pageName="About Us" />  
    <Hero />
      <MissionVission />
      <OurCoreValue />
      <MeetOurTeam />
    
</>
  );
}
