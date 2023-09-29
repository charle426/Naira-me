import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
import RideHailing from "../components/RideHailing";
export default function RideHailingPage(props) {
    props.setActive("ride-hailing");
     function heroImg() {
       return <h1 className="text-white">RIDE-HAILING</h1>;
    }
    return (
        <>
            <Hero demo={ heroVideo } heroDesc={ heroImg() } />;
            <RideHailing/>
        </>
    
        )
        
}