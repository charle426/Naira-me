import heroVideo from "../assets/heroBg.mp4";
import galleryPic1 from "../assets/IMG-20211111-WA0042.jpg";
import galleryPic2 from "../assets/IMG-20211111-WA0055.jpg";
import galleryPic3 from "../assets/IMG-20211111-WA0057.jpg";
import galleryPic4 from "../assets/IMG-20211111-WA0059.jpg";
import galleryPic5 from "../assets/IMG-20211111-WA0062.jpg";
import galleryPic6 from "../assets/IMG-20211111-WA0063.jpg";
import galleryPic7 from "../assets/IMG-20211113-WA0000.jpg";
import galleryPic8 from "../assets/IMG-20211113-WA0001.jpg";
import galleryPic9 from "../assets/IMG-20211113-WA0026.jpg";
import Hero from "../components/heroSection";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll"
import "@splidejs/react-splide/css/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {motion, animate} from "framer-motion"
export default function Gallery(props) {
  props.setActive("gallery");

  function heroImg() {
    return <h1 className="text-white uppercase">Gallery</h1>;
  }

  return (
    <>
      <Hero demo={heroVideo} heroDesc={heroImg()} />
      <section className="md:h-[80vh] 60vh gallery flex flex-col items-center justify-center">
        <div className="splide__container g-contain overflow-hidden flex py-5 items-start">
          <Splide
            hasTrack={false}
            options={{
              rewind: true,
              gap: "0.5rem",
              padding: "0.5rem",
              focus: "center",
              snap: true,
              lazyLoad: "nearby",
              drag: true,
              width: "100%",
              autoplay: true,
              perPage: 3,
              perMove: 1,
              type: "loop",
              arrows: true,
              pagination: false,
              rewindSpeed: "3000",
              extensions: { AutoScroll },
              autoScroll: {
                speed: 3,
                pauseOnHover: true,
                pauseOnFocus: false,
              },
              breakpoints: {
                800: {
                  perPage: 2,
                },

                550: {
                  perPage: 1,
                  gap: "0rem",
                  padding: "0",
                },
              },
            }}
            aria-label="NairaMe Gallery"
            className="gallery-container"
          >
            <div className="wrapper flex flex-col items-center gap-4">
              <SplideTrack className="">
                <SplideSlide className="gallery-img-div " data-id="1">
                  <img
                    src={galleryPic1}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
                <SplideSlide className="gallery-img-div transform" data-id="2">
                  <img
                    src={galleryPic2}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
                <SplideSlide className="gallery-img-div" data-id="3">
                  <img
                    src={galleryPic3}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
                <SplideSlide className="gallery-img-div" data-id="4">
                  <img
                    src={galleryPic4}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
                <SplideSlide className="gallery-img-div" data-id="5">
                  <img
                    src={galleryPic5}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
                <SplideSlide className="gallery-img-div" data-id="6">
                  <img
                    src={galleryPic6}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
                <SplideSlide className="gallery-img-div" data-id="7">
                  <img
                    src={galleryPic7}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
                <SplideSlide className="gallery-img-div " data-id="8">
                  <img
                    src={galleryPic8}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
                <SplideSlide className="gallery-img-div " data-id="9">
                  <img
                    src={galleryPic9}
                    alt="gallery-images"
                    draggable="false"
                    className="gallery-img rounded-md md:w-[500px] w-[350px]"
                  />
                </SplideSlide>
              </SplideTrack>
              <div className="splide__arrows flex gap-2 items-center">
                <button className="splide__arrow splide__arrow--prev bottom-0">
                  <FontAwesomeIcon icon="angle-left" />
                </button>
                <button className="splide__arrow splide__arrow--next bottom-0">
                  <FontAwesomeIcon icon="angle-right" />
                </button>
              </div>
            </div>
          </Splide>
        </div>
      </section>
    </>
  );
}