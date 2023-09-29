import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import rideHailImage from "../assets/useful.png"
import appleStore from "..//assets/appstore.jpg"
import googlePlay from "..//assets/gplay.png"
import { motion } from "framer-motion";

export default function RideHailing() {
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
      <section className="rideHail md:px-16 overflow-hidden w-full px-5 py-5 shadow-slate-400 shadow-sm pb-7">
        <div className="md:hidden block mb-3">
          <h2>Ride Hailing</h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex md:flex-row w-full justify-between items-center flex-col"
        >
          <motion.div
            variants={item}
            className="w-full flex items-center md:justify-start justify-center mb-2"
          >
            <img src={rideHailImage} className="md:w-[75%] w-[90%]" alt="" />
          </motion.div>
          <motion.div variants={container} initial="hidden"
          whileInView="show" className="w-full">
            <motion.h3 variants={item}>
              Our ride hailing enables passagers
            </motion.h3>
            <motion.p variants={item}>
              Hire a vehicle using your phone and other internet-enabled
              devices. You can book a ride schedule a trip or hire a driver, all
              available in the app. Download and srart enjoying now
            </motion.p>
            <motion.div
              variants={item}
              className="flex items-center gap-2 mt-3"
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
            <motion.p className="mt-7">
              <b>Ndriver</b> offers lucrative opportunity to cash out with our
              driver`s app. you can earn up to N20,000 Naira or more daily with
              lots of incentives and weekend bounses. Drive and earn at your
              convenience. Download the Drivers app to start enjoying a new
              world of possibilities
            </motion.p>
            <motion.div
              variants={item}
              className="flex items-center gap-2 mt-3"
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
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex gap-5 items-end justify-end w-full mt-5"
        >
          <motion.a href="#" variants={container}>
            <button className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon="car"
                className="text-white md:block hidden"
              />
              Book a ride
            </button>
          </motion.a>
          <motion.a href="#" variants={container}>
            <button className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon="key"
                className="text-white md:block hidden"
              />
              Privacy Policy
            </button>
          </motion.a>
        </motion.div>
      </section>
    );
}