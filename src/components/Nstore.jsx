import nDasher from "../assets/ndasher.png"
import nStore from "../assets/nstore.png"
import nVendor from "../assets/nvendor.png"
import appleStore from "..//assets/appstore.jpg";
import googlePlay from "..//assets/gplay.png";
import nStoreScreen from "../assets/nstore-screen.png"
import { motion } from "framer-motion";
export default function Store() {
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
      <section className="py-5 px-5 lg:px-16 w-full overflow-hidden  shadow-sm shadow-slate-400">
        <div className="flex md:flex-row gap-10 flex-col items-center justify-between">
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              
              className="flex flex-col gap-6 mb-9 w-full max-w-[950px]"
            >
              <motion.img
                variants={item}
                src={nStore}
                alt=""
                className="block w-[350px]"
              />
              <motion.p variants={item}>
                We are set to re-define the e-commerce landscape by bringing to
                shoppers an unforgettable experience. At NairaMe Store, we have
                your favorite restaurants and shops enlisted for your shopping
                pleasure. Shop and place your order at your convenience and get
                it delivered in a dash. Get started by downloading our app.
              </motion.p>
              <motion.div variants={item}>
                <a href="#" className="block">
                  <button>Find out more</button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              // viewport={{once:true}}
              className="flex flex-col gap-6 mb-9 w-full max-w-[950px]"
            >
              <motion.img
                variants={item}
                src={nVendor}
                alt=""
                className="block w-[350px]"
              />
              <motion.p variants={item}>
                Join thousands of store owners who trust NairaMe Vendor to sell
                online. We offer restaurants and store owners opportunity to
                enlist their food and products on Nvendor for consumers to shop
                on
              </motion.p>
              <motion.div variants={item}>
                <a href="#" className="block">
                  <button>Find out more</button>
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              // viewport={{once:true}}
              className="flex flex-col gap-6 mb-9 w-full max-w-[950px]"
            >
              <motion.img
                variants={item}
                src={nDasher}
                alt=""
                className="block w-[350px]"
              />
              <motion.p variants={item}>
                We have a one-stop delivery solution for all your items. Our aim
                is to provide fast, affordable and secure delivery to your
                clientele. You can trust in our corporate integrity
              </motion.p>
              <motion.div variants={item}>
                <a href="#" className="block">
                  <button>Find out more</button>
                </a>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            // viewport={{once:true}}
            className="w-full flex flex-col md:items-end items-center gap-5"
          >
            <motion.img
              variants={item}
              src={nStoreScreen}
              alt="n-store-screen"
              width="400px"
              className="block"
            />
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
          </motion.div>
        </div>
      </section>
    );
}