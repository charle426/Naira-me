import iShareScreen from "../assets/ishare-screen.png"
import iShare from "../assets/ishare.png"
import iShare1 from "../assets/image-1.png";
import appleStore from "..//assets/appstore.jpg";
import googlePlay from "..//assets/gplay.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
export default function SharePage() {
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
      <section
        id="nsprint-section"
        className=" md:px-16 lg:px-24 px-5 py-5 mt-16 w-full overflow-hidden"
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex lg:flex-row flex-col gap-7 items-center justify-center lg:justify-between"
        >
          <div className="w-full">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="flex flex-col gap-4"
            >
              <motion.img
                variants={item}
                src={iShare}
                alt=""
                className="block w-[200px]"
              />
              <motion.p variants={item} className="max-w-[600px]">
                <b>ishare</b> - Share in our growth and profit as we fulfil our
                brand promise to our teeming clientele around the globe. You can
                enjoy a robust return on your investment in our FleetVest and
                FinVest categories. Interestingly, you can monitor your daily
                profit with our iShare app - the Partners’ business App.
              </motion.p>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="flex flex-col gap-4 mt-8"
            >
              <motion.img
                variants={item}
                src={iShare1}
                alt=""
                className="block md:w-[80%] w-[100%] "
              />
              <motion.p className="max-w-[600px]">
                Join thousands of store owners who trust NairaMe Vendor to sell
                online. We offer restaurants and store owners opportunity to
                enlist their food and products on Nvendor for consumers to shop
                on
              </motion.p>
            </motion.div>
          </div>
          <motion.div variants={item} className="w-full flex justify-center">
            <img
              src={iShareScreen}
              alt="ishareimg"
              className=" md:w-[300px] max-w-[300px] "
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="mt-5"
        >
          <a href="#" className="block w-fit">
            <motion.button variants={item}>Find out more</motion.button>
          </a>
          <motion.div variants={item} className="flex items-center gap-3 mt-3">
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
          <Link to="/partnership" className="block uppercase mt-3">
            <motion.button
              variants={item}
              className="flex gap-3 items-center uppercase font-bold"
            >
              <FontAwesomeIcon
                icon="handshake"
                className="text-white text-4xl md:block hidden"
              />
              partner now
            </motion.button>
          </Link>
        </motion.div>
      </section>
    );
}