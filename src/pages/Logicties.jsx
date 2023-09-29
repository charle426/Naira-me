import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
import Flexxer from "../components/flexxer";
export default function Logistics(props) {
  props.setActive("logistics");
  function heroImg() {
    return <h1 className="text-white uppercase">logistics</h1>;
  }
  return (
    <>
      <Hero demo={heroVideo} heroDesc={heroImg()} />;
      <Flexxer />
    </>
  );
}
