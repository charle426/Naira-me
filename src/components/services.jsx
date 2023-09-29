import logicties from "../assets/download.jpg"
import eComm from "../assets/IMG-20211111-WA0061.jpg"
import ride from "../assets/IMG-20211113-WA0000.jpg"
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

export default function Services() {
  const container = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.5,
        // delayChildren: 0.2,
        duration: 1,
        type: "spring",
        damping: 20,
      },
    },
  }; 
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
    transition: {
      duration: 1,
      type: "spring",
        damping: 20,
    },
  };
    return (
      <section
        id="hero-services"
        className="px-5 py-5 mb-5 lg:px-16 md:px-5 overflow-hidden w-full"
      >
        <div className="flex md:flex-row items-center justify-between flex-col mb-7">
          <h1>Our Services</h1>
          <p>Make everyday better</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{once:true}}
          className="flex service-container flex-col gap-5 md:flex-row"
        >
          <motion.div variants={item}>
            <div>
              <div className="py-0">
                <img src={ride} width="100%" className="h-[100%]" />
              </div>
              <div className="px-5 py-3">
                <h3>Ride Hailing</h3>
                <p>
                  Hire a vehicle with just your phone or any internet enabled
                  devices
                </p>
                <Link to="/services/ride-hailing">
                  <button>find out more</button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div>
              <div className="py-0">
                <img src={eComm} width="100%" />
              </div>
              <div className="px-5 py-3">
                <h3>E-Commerce</h3>
                <p>
                  Hire a vehicle with just your phone or any internet enabled
                  devices
                </p>
                <Link to="/services/e-commerce">
                  <button>find out more</button>
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div variants={item}>
            <div>
              <div className="py-0">
                <img src={logicties} width="100%" />
              </div>
              <div className="px-5 py-3">
                <h3>Logistics</h3>
                <p>
                  Hire a vehicle with just your phone or any internet enabled
                  devices
                </p>
                <Link to="/services/logistics">
                  <button>find out more</button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    );
}