import Hero from "./heroSection";
import demoVideo from "../assets/nsprintBg.mp4";
export default function Nsprint() {
     function heroDesc() {
       return (
        <h1 className="uppercase text-[#00a85a]">Nsprint</h1>
       );
     }
     function heroText() {
       return (
         <h2 className="capitalize text-white lg:w-[700px]">
               Fastest way of sending packages nationwide.
               
         </h2>
       );
     }
    return (
      <Hero
        demo={demoVideo}
        heroDesc={heroDesc()}
        heroText={heroText()}
        sectionId="#nsprint-section"
      />
    );
}