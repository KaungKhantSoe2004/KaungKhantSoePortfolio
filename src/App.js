import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { Contact } from "./components/ContactComponent";
import { Portfolio } from "./components/PortfolioComponent";
import { About } from "./components/aboutComponent";
import { Footer } from "./components/footer";
import { Freelancer } from "./components/freelancer";
import { Home } from "./components/homeComponent";
import "./index.css";
import { WhatIDo } from "./whatIDo";
import { BrowserRouter } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Provider } from "react-redux";

export const App = () => {
  const [isNavBar, setIsNavBar] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <BrowserRouter>
      <div className="app w-100 overflow-hidden ">
        <NavBar isNavBar={isNavBar} setIsNavBar={setIsNavBar} />

        <div
          className="navIcon position-fixed top-25 "
          onClick={() => {
            setIsNavBar(!isNavBar);
            console.log(isNavBar);
            console.log("navBar is closed");
          }}
        >
          <div className={`navRow b ${!isNavBar && "rotateDown"}`}></div>
          <div className={`MnavRow ${!isNavBar && "d-none"}`}></div>
          <div className={`EnavRow" ${!isNavBar && "rotateUp"}`}></div>
        </div>

        <Home />
        <About className="  fadeInDown" />

        <Freelancer />

        {/* <WhatIDo /> */}
        <div className="anyProjects col-12  py-3 my-3">
          <h4 className=" text-center text-white">Do You Have Any Projects?</h4>
          <h3 className=" text-center text-white mt-3">
            I am Avilable for Freelancer Jobs.
          </h3>
          <div className=" d-flex justify-content-center mt-4 ">
            <a
              href="#contact"
              className=" btn text-decoration-none anyContact p-1 col-4 mb-3"
            >
              Contact
            </a>
          </div>
        </div>
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
