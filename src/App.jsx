import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import Homepage from "./pages/Hompage.jsx";
import About from "./pages/About.jsx";
import React from "react";
import {Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Ecommerce from "./pages/Ecommerce.jsx";
import RideHailingPage from "./pages/RideHailingPage.jsx";
import Logistics from "./pages/Logicties.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Career from "./pages/Carreer.jsx";
import Partnership from "./pages/Partnership.jsx";
import Faq from "./pages/faq.jsx";
import ProductDemo from "./pages/Product-demo.jsx";
// import {motion} from framer-motion
export default function App() {
  const [active, setActive] = React.useState("home")

  return (
    <>
      <Router>
        <Navbar active={active} />
        <Routes>
          <Route path="/" element={<Homepage setActive={setActive} />} />
          <Route path="/about" element={<About setActive={setActive} />} />
          <Route
            path="/services/e-commerce"
            element={<Ecommerce setActive={setActive} />}
          />
          <Route
            path="/services/ride-hailing"
            element={<RideHailingPage setActive={setActive} />}
          />
          <Route
            path="/services/logistics"
            element={<Logistics setActive={setActive} />}
          />
          <Route path="/gallery" element={<Gallery setActive={setActive} />} />
          <Route
            path="/contact-us"
            element={<Contact setActive={setActive} />}
          />
          <Route path="/careers" element={<Career setActive={setActive} />} />
          <Route
            path="/partnership"
            element={<Partnership setActive={setActive} />}
          />
          <Route path="/faq" element={<Faq setActive={setActive} />} />
          <Route path="/product-demo" element={<ProductDemo setActive={setActive} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

