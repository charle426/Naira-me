import navLogo from "./assets/niarame-africa-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import HeroLogo from "./assets/white-logo-PNG-1536x680.png";
import React from "react";
export default function Navbar(props) {
  const navToggle = document.querySelectorAll(".navToggle")
  const nav = document.getElementById("nav")
  const logo = document.getElementById("logo")
  const {pathname} = useLocation()
  const [navState, setNavState] = React.useState(false)
  const ref = React.useRef(null)
  const logoRef = React.useRef(null)
  React.useEffect(() => {
    setNavState(false)
  }, [pathname])
  navToggle.forEach((nav) => {
    // console.log(nav.dataset.id);
    if (nav.dataset.id === props.active)
    {
      nav.classList.add("active")
      if (props.active === "e-commerce" || props.active === "logistics" || props.active === "ride-hailing")
      {
        nav.parentElement.parentElement.classList.add("active")
      }
    } else
    {
      nav.classList.remove("active");
    }
  })

  window.addEventListener("DOMContentLoaded", () => {
  })

  
React.useEffect(() => {
  const handleScroll = () => {
     if (window.scrollY > 500) {
       ref.current.classList.add("navScroll");
       logoRef.current.src = HeroLogo;
     } else {
       ref.current.classList.remove("navScroll");
       logoRef.current.src = navLogo;
     }
  }
 
  window.addEventListener("scroll", handleScroll);
}, [])
 
  



 

    return (
      <>
        <nav
          id="nav"
          ref={ref}
          className="nav bg-transparent z-[999] lg:px-16 md:py-5 py-2 px-5 absolute top-0 w-full text-white"
        >
          <input
            type="checkbox"
            id="toggleNav"
            checked={navState}
            onChange={() => setNavState((prev) => !prev)}
            className="opacity-0 -z-50 absolute toggleNav"
          />
          <div className="flex flex-row items-center justify-between lg:justify-evenly">
            <div className="w-full md:hidden">
              <label htmlFor="toggleNav" className="toggleShow">
                <div className="w-full flex flex-col items-start p-2 my-[1px] gap-[10px] toggle">
                  <div className="w-[32px] h-[3.5px] bg-white"></div>
                  <div className="w-[32px] h-[2.5px] bg-white"></div>
                  <div className="w-[32px] h-[3.5px] bg-white"></div>
                </div>
              </label>
            </div>

            <div className="logo">
              <Link to="/">
                <img
                  ref={logoRef}
                  src={navLogo}
                  width="200px"
                  alt="Niarame Africa Logo"
                  id="logo"
                />
              </Link>
              {/* <FontAwesomeIcon icon="fas fa-bars" className="text-[50px]" /> */}
            </div>
            <div className="md:flex-row md:flex hidden items-center justify-between md:relative absolute gap-[40px] lg:gap-[50px]">
              <ul className="flex md:flex-row items-center flex-col gap-[13px] capitalize">
                <li className="navToggle active" data-id="home">
                  <Link to="/">home</Link>
                </li>
                <li className="navToggle" data-id="about">
                  <Link to="/about">about us</Link>
                </li>
                <li className="nav-dropdown navToggle " data-id="services">
                  <div className="flex items-center cursor-pointer gap-[5px] lg:relative ">
                    services
                    <FontAwesomeIcon
                      icon="fa fa-angle-down"
                      className="text-[] navbar-angle duration-500"
                    />
                  </div>
                  <div className="flex flex-col nav-services fixed mt-1 px-0 z-10 duration-500 py-0 w-[250px] h-0 overflow-hidden gap-2 bg-[#00000037]">
                    <Link
                      to="/services/e-commerce"
                      className="navToggle text-white"
                      data-id="e-commerce"
                    >
                      e-commerce
                    </Link>
                    <Link
                      to="/services/logistics"
                      className="navToggle text-white"
                      data-id="logistics"
                    >
                      logistics
                    </Link>
                    <Link
                      to="/services/ride-hailing"
                      className="navToggle text-white"
                      data-id="ride-hailing"
                    >
                      ride-hailing
                    </Link>
                  </div>
                </li>
                <li className="navToggle" data-id="gallery">
                  <Link to="/gallery">gallery</Link>
                </li>
                <li className="navToggle" data-id="contact">
                  <Link to="/contact-us">contact us</Link>
                </li>
                <li className="navToggle" data-id="careers">
                  <Link to="/careers">careers</Link>
                </li>
                <li className="navToggle" data-id="partnership">
                  <Link to="/partnership">partnership</Link>
                </li>
                <li className="navToggle" data-id="product-demo">
                  <Link to="/product-demo">product demo</Link>
                </li>
                <li className="navToggle" data-id="faq">
                  <Link to="/faq">F.A.Qs</Link>
                </li>
              </ul>
              <div className="nav-social flex gap-6 items-center">
                <Link to="/#">
                  <FontAwesomeIcon
                    icon="fab fa-facebook"
                    className="text-[25px] text-blue-600 duration-100 hover:-translate-y-1"
                  />
                </Link>
                <Link to="/#">
                  <FontAwesomeIcon
                    icon="fab fa-instagram"
                    className="text-[25px] text-pink-600 duration-100 hover:-translate-y-1"
                  />
                </Link>
                <Link to="/#">
                  <FontAwesomeIcon
                    icon="fab fa-twitter"
                    className="text-[25px] text-blue-400 duration-100 hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mobileNone flex-col md:hidden flex fixed px-6 py- z-[9999] duration-500 bg-[#00A85A] gap-20">
            <ul className="items-start flex-col gap-[20px] capitalize">
              <li className="navToggle" data-id="home">
                <Link to="/">home</Link>
              </li>
              <li className="navToggle" data-id="about">
                <Link to="/about">about us</Link>
              </li>
              <li className="nav-dropdown navToggle " data-id="services">
                <div className="flex items-center cursor-pointer gap-[5px] relative ">
                  services
                  <FontAwesomeIcon
                    icon="fa fa-angle-down"
                    className="text-[] navbar-angle duration-500"
                  />
                </div>
                <div className="flex flex-col nav-services mt-1 px-0 z-10 duration-500 py-0 w-[250px] h-0 overflow-hidden gap-2 bg-[#00000037]">
                  <Link
                    to="/services/e-commerce"
                    className="navToggle text-white"
                    data-id="e-commerce"
                  >
                    e-commerce
                  </Link>
                  <Link
                    to="/services/logistics"
                    className="navToggle text-white"
                    data-id="logistics"
                  >
                    logistics
                  </Link>
                  <Link
                    to="/services/ride-hailing"
                    className="navToggle text-white"
                    data-id="ride-hailing"
                  >
                    ride-hailing
                  </Link>
                </div>
              </li>
              <li className="navToggle" data-id="gallery">
                <Link to="/gallery">gallery</Link>
              </li>
              <li className="navToggle" data-id="contact">
                <Link to="/contact-us">contact us</Link>
              </li>
              <li className="navToggle" data-id="careers">
                <Link to="/careers">careers</Link>
              </li>
              <li className="navToggle" data-id="partnership">
                <Link to="/partnership">partnership</Link>
              </li>
              <li className="navToggle" data-id="product-demo">
                <Link to="/product-demo">product demo</Link>
              </li>
              <li className="navToggle" data-id="faq">
                <Link to="/faq">F.A.Qs</Link>
              </li>
            </ul>
            <div className="nav-social flex gap-6 items-center">
              <Link to="/#">
                <FontAwesomeIcon
                  icon="fab fa-facebook"
                  className="text-[25px] text-blue-600 duration-100 hover:-translate-y-1"
                />
              </Link>
              <Link to="/#">
                <FontAwesomeIcon
                  icon="fab fa-instagram"
                  className="text-[25px] text-pink-600 duration-100 hover:-translate-y-1"
                />
              </Link>
              <Link to="/#">
                <FontAwesomeIcon
                  icon="fab fa-twitter"
                  className="text-[25px] text-blue-400 duration-100 hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </nav>
      </>
    );
}