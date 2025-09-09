import { useEffect } from "react";
import AboutSection from "./components/about/About";
import AirDetoxSection from "./components/AirDetoxSection/AirDetoxSection";
import BeforeAfterSection from "./components/beforeAfterSection/BeforeAfterSection";
import PricingSection from "./components/choosePlan/ChoosePlan";
import DnaSection from "./components/dnaScanSection/DnaScanSection";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import MemberSection from "./components/memberSection/MemberSection";
import MobileSidebar from "./components/menubar/Menubar";
import NatureinfusedInterior from "./components/natureInfusedInterior/NatureInfusedInterior";
import ProductMatrix from "./components/productMatrux/ProductMatrix";
import StatsSection from "./components/statsSection/StateSection";
import Testimonials from "./components/Testimonial/Testimonial";
import WhoItsFor from "./components/WhoItsFor/WhoItsFor";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="">
      <HeroSection />
      <AboutSection />
      <DnaSection />
      <ProductMatrix />
      <PricingSection />
      <WhoItsFor />
      <AirDetoxSection />
      <NatureinfusedInterior />
      <MemberSection />
      <BeforeAfterSection />
      <Testimonials />
      <StatsSection />
      <Footer />
    </div>
  );
}

export default App;
