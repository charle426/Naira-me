import Hero from "../components/heroSection";
import HeroLogo from "../assets/white-logo-PNG-1536x680.png";
import Services from "../components/services";
import RideHailing from "../components/RideHailing";
import Store from "../components/Nstore";
import Flexxer from "../components/flexxer";
import SharePage from "../components/iShare";
import demoVideo from "../assets/heroBg.mp4";
import Partner from "../components/partnerWithUs";
export default function Homepage(props) {
  
  function heroImg(){
        return (
          <img
            src={HeroLogo}
            alt="demo-image"
            className="md:w-[600px] w-[300px]"
          />
        );
    }
    props.setActive("home");
    return (
      <>
        <Hero
          demo={demoVideo}
          heroDesc={ heroImg() }
          sectionId="#hero-services"
          heroText="Committed to providing smart and innovation solution and services to everyday lifestyle"
        />
        <Services />
        <RideHailing />
        <Store />
        <Flexxer />
        <SharePage />
        <Partner/>
      </>
    );
    
}