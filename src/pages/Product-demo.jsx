import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
import appleStore from "..//assets/appstore.jpg";
import googlePlay from "..//assets/gplay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {motion, } from "framer-motion"
export default function ProductDemo(props) {
  props.setActive("product-demo");
  function heroImg() {
    return <h1 className="text-white">PRODUCT DEMO</h1>;
  }
  return (
    <>
      <Hero demo={heroVideo} heroDesc={heroImg()} />
      <section className="p-5 md:px-16">
        <div className=" flex items-center justify-center flex-col">
          <div className="md:w-[70%] md:h-[80vh] w-full h-[320px] flex items-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SlRSOwNnTMM?si=TCMZkGhxxyDQQluf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="flex items-center gap-3 mt-8">
            <a href="#">
              <div>
                <img src={googlePlay} width="200px" alt="" />
              </div>
            </a>
            <a href="#">
              <div>
                <img src={appleStore} width="200px" alt="" />
              </div>
            </a>
          </div>
          <a href="#" className="flex items-center gap-3 mt-8">
            <button className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon="handshake"
                className="text-white md:block hidden"
                shake
              />
              PARTNER NOW
            </button>
          </a>
        </div>
      </section>
    </>
  );
}