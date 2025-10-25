import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import SmallNav from "../Components/SmallNav";
import ContactUs from "../Components/ContactComponents/ContactUs";

export default function Contacts() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  console.log("Contacts page loaded");

  return (
    <>
      <SmallNav pageName="Contact Us" />
      <ContactUs />
      
    </>
  );
}
