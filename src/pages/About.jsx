import Hero from "../components/heroSection";
import heroVideo from "../assets/heroBg.mp4";
import team1 from "../assets/PORTRAITS3-e1659710938638-portrait-0b555dff7baef832f0bd497b6dea7548-wnsmdky18cjf.png";
import team2 from "../assets/PORTRAITS2-e1659711096630-portrait-43d0f46534fa606d64bbb813f4ab8214-ogpfbc1qdreu.png";
import team3 from "../assets/257418007_2066554313501088_9211720300769310502_n-portrait-952593922d0838cc016435714128f79d-35oqzdbnlper.jpg";
import team4 from "../assets/54257459_111678339996322_8229720787305627648_n-portrait-3d936e71d1ac24c8530aded59e42a018-0cd1b25s6qv3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
export default function About(props) {
  props.setActive("about")
     function heroImg(){
        return (
          <h1 className="text-white">ABOUT US</h1>
        );
    }
        
    return (
      <>
        <Hero demo={heroVideo} heroDesc={heroImg()} />
        <section className="about-us px-7 md:px-20 py-10">
          <h2 className="text-center">Meet the team</h2>
          <div className="flex md:flex-row flex-col gap-10 mt-14 items-start justify-around">
            <motion.div
              initial={{ opacity: 0, x: "-50px" }}
              whileInView={{ opacity: 1, x: "0" }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                ease: "anticipate",
                // repeat: Infinity,
                // repeatType: "mirror",
                delay: 0.5,
                duration: 0.5,
              }}
            >
              <div>
                <div className="max-w-[500px] max-h-[700px]">
                  <img
                    src={team1}
                    alt=""
                    width="100%"
                    className="block rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex gap-1 mt-6 flex-col items-center justify-center">
                    <h4>Jacobson Francis</h4>
                    <p>Founder/CEO</p>
                    <p>USA</p>
                  </div>
                  <div className="flex gap-3 mt-4 text-[25px] items-center justify-center">
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fab fa-twitter"
                        className="text-blue-400 hover:translate-y-[-2px] p-1"
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fab fa-linkedin-in"
                        className="text-blue-600 hover:translate-y-[-2px] p-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial={{ opacity: 0, x: "50px" }}
              whileInView={{ opacity: 1, x: "0" }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                ease: "anticipate",
                // repeat: Infinity,
                // repeatType: "mirror",
                delay: 0.5,
                duration: 0.5,
              }}
            >
              <div>
                <div className="max-w-[500px] max-h-[700px]">
                  <img
                    src={team2}
                    alt=""
                    width="100%"
                    className="block rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex gap-1 mt-6 flex-col items-center justify-center">
                    <h4>Marie Jacobson</h4>
                    <p>co-founder</p>
                    <p>USA</p>
                  </div>
                  <div className="flex gap-3 mt-4 text-[25px] items-center justify-center">
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fab fa-twitter"
                        className="text-blue-400 hover:translate-y-[-2px] p-1"
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fab fa-linkedin-in"
                        className="text-blue-600 hover:translate-y-[-2px] p-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="ab"
            initial={{ opacity: 0, y: "-50px" }}
            whileInView={{ opacity: 1, y: "0" }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              ease: "anticipate",
              // repeat: Infinity,
              // repeatType: "mirror",
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <div className="mt-8 text-center text-[20px]">
              <p>
                NairaMe is an IT/`fintect organization committed to providing
                smartly and innovative solution and services to everyday
                lifestyles in payment transactions, transportation, food
                delivery, e-shopping and lots more. We leverage technology and
                innovation to provide smartly affordable convenient and seamless
                solutions to individual and corporate operation and processes
              </p>
            </div>
          </motion.div>
          <div className="flex md:flex-row flex-col gap-10 mt-14 items-start justify-around">
            <motion.div
              className=""
              initial={{ opacity: 0, x: "50px" }}
              whileInView={{ opacity: 1, x: "0" }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                ease: "anticipate",
                // repeat: Infinity,
                // repeatType: "mirror",
                delay: 0.5,
                duration: 0.5,
              }}
            >
              <div>
                <div className="max-w-[500px] max-h-[700px]">
                  <img
                    src={team3}
                    alt=""
                    width="100%"
                    className="block rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex gap-1 mt-6 flex-col items-center justify-center">
                    <h4>Agu Stanley</h4>
                    <p>Country Director</p>
                    <p>NIGERIA</p>
                  </div>
                  <div className="flex gap-3 mt-4 text-[25px] items-center justify-center">
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fab fa-twitter"
                        className="text-blue-400 hover:translate-y-[-2px] p-1"
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fab fa-linkedin-in"
                        className="text-blue-600 hover:translate-y-[-2px] p-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className=""
              initial={{ opacity: 0, x: "-50px" }}
              whileInView={{ opacity: 1, x: "0" }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                ease: "anticipate",
                // repeat: Infinity,
                // repeatType: "mirror",
                delay: 0.5,
                duration: 0.5,
              }}
            >
              <div>
                <div className="max-w-[500px] max-h-[700px]">
                  <img
                    src={team4}
                    alt=""
                    width="100%"
                    className="block rounded-lg"
                  />
                </div>
                <div>
                  <div className="flex gap-1 mt-6 flex-col items-center justify-center">
                    <h4>Emmanuel Brown</h4>
                    <p>Business Development Strategist</p>
                    <p>NIGERIA</p>
                  </div>
                  <div className="flex gap-3 mt-4 text-[25px] items-center justify-center">
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fab fa-twitter"
                        className="text-blue-400 hover:translate-y-[-2px] p-1"
                      />
                    </a>
                    <a href="#">
                      <FontAwesomeIcon
                        icon="fab fa-linkedin-in"
                        className="text-blue-600 hover:translate-y-[-2px] p-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        <div className="uppercase about-location flex flex-col mt-11 items-center gap-3 px-7 text-white md:px-20 py-10">
          <h2>NOW IN</h2>
          <div className="locations flex items-center text-center justify-center gap-2 flex-wrap">
            <h4>usa</h4>
            <h4>lagos</h4>
            <h4>abuja</h4>
            <h4>aba</h4>
            <h4>owerri</h4>
            <h4>onitsha</h4>
            <h4>umuahia</h4>
            <h4>abakaliki</h4>
            <h4>port harcourt</h4>
            <h4>uyo</h4>
            <h4>calabar</h4>
            <h4>enugu</h4>
            <h4>akwa ibom</h4>
          </div>
        </div>
      </>
    );
}