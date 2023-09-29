import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
import Store from "../components/Nstore";
export default function Ecommerce(props) {
    props.setActive("e-commerce");
     function heroImg() {
       return <h1 className="text-white">E-COMMERCE</h1>;
    }
    return (
        <>
            <Hero demo={ heroVideo } heroDesc={ heroImg() } />
            <Store/>
            
        </>
    
        )
     
}