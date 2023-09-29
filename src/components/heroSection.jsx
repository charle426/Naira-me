import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Hero(props) {
  // console.log(props.demo)
    return (
      <section className="relative overflow-hidden w-full">
        <div className="w-full overflow-hidden lg:h-[700px] h-[500px] hero">
          <video
            width="100%"
            className="md:h-auto h-[500px]"
            autoPlay
            loop
            muted
          >
            <source src={props.demo} type="video/mp4" />
          </video>
        </div>
        <motion.div
          className="absolute top-[50%] left-[50%] hero-zoom flex flex-col items-center w-full gap-5"
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            ease: "anticipate",
            // repeat: Infinity,
            // repeatType: "mirror",
            delay: 1,
            duration: 2,
          }}
        >
          <div className="flex flex-col items-center w-full gap-5">
            <div>{props.heroDesc}</div>
            {props.heroText && (
              <div className="text-white text-center mix-blend-difference">
                {props.heroText}
              </div>
            )}
            {props.heroText && (
              <a href={props.sectionId}>
                <FontAwesomeIcon
                  icon="angle-double-down"
                  className="text-white text-4xl md:block hidden"
                />
              </a>
            )}
          </div>
        </motion.div>
      </section>
    );
}