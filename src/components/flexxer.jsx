import nSprintScreen from "../assets/Nsprint-screen.png"
import nSprint from "../assets/NSPRINT-300x189.png";
import nFlex from "../assets/flezzers-300x158.png";
import appleStore from "..//assets/appstore.jpg";
import googlePlay from "..//assets/gplay.png";
import Nsprint from "./nsprint";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"
export default function Flexxer() {

  const container = {
      hidden: { opacity: 0, x: 100 },
      show: {
        opacity: 1,
        x: 0,
        transition: {
          staggerChildren: 0.5,
          // delayChildren: 0.2,
          duration: 0.5,
          type: "spring",
          damping: 20,
        },
      },
    };
    const item = {
      hidden: { opacity: 0, y: 100 },
      show: { opacity: 1, y: 0 },
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 20,
      },
  };
  
    return (
      <>
        <section className="lg:px-16 p-5 my-8 w-full overflow-hidden">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="flex md:flex-row gap-2 flex-col md:justify-around items-center"
          >
            <motion.div variants={item} className="w-[90%]">
              <img
                src={nSprintScreen}
                alt="nsprint"
                className="lg:w-[400px] w-full"
              />
            </motion.div>
            <div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="w-full"
              >
                <motion.h3 className="text-[#00A85A] mb-5">
                  We Pick, We Pack, We Deliver Swiftly!
                </motion.h3>
                <motion.div className="flex lg:flex-row flex-col-reverse items-start mb-8 gap-5">
                  <div className="flex flex-col gap-4">
                    <p className="lg:w-[450px] w-full">
                      <b>Nsprint</b> - Our mission is to partner with you to
                      ensure you keep your promise to your clients. With utmost
                      sense of satisfaction to our partners and consumers we
                      deliver your item nationwide overriding all hoodles and
                      bottlenecks.
                    </p>
                    <Link to="/services/logistics" className="block">
                      <button>Find out more</button>
                    </Link>
                  </div>
                  <motion.div variants={item} className="">
                    <img src={nSprint} alt="nsprint" width="200px" />
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  className="flex lg:flex-row flex-col items-start mb-8 gap-5"
                >
                  <motion.div variants={item} className="">
                    <img src={nFlex} alt="nFlex" width="200px" />
                  </motion.div>
                  <motion.div variants={item} className="flex flex-col gap-4">
                    <p className="lg:w-[450px] w-full">
                      <b>Flezzer</b> -The future of logistics is here! Our
                      ezzers take away all rigidity and bottlenecks for your
                      logistics concerns within and outside your city. Our
                      Sprint includes SAME and NEXT day delivery to get items
                      delivered to your chosen location in target time.
                    </p>
                    <a href="#" className="block">
                      <button>Find out more</button>
                    </a>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  className=" mt-8"
                >
                  <motion.p className=" w-full flex justify-end">
                    We are open to partnerships nationwide; register with your
                    bike, tricycle (keke) or car. Download on Playstore or
                    Appstore to get started. Learn More
                  </motion.p>
                  <Link to="/contact-us" className="block mt-4">
                    <button>Send Package</button>
                  </Link>
                  <motion.div
                    variants={item}
                    className="flex items-center gap-3 mt-3"
                  >
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
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        <div className="p-9 my-8"></div>
        </section>
        <Nsprint />
      </>
    );
}