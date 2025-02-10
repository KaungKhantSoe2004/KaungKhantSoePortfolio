import { useState } from "react";
import { faTentArrowLeftRight } from "@fortawesome/free-solid-svg-icons";
import { Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import { BrowserRouter, Routes } from "react-router-dom";
import { Home } from "./components/homeComponent";
import { Portfolio } from "./components/PortfolioComponent";
import { Contact } from "./components/ContactComponent";
import { About } from "./components/aboutComponent";

export const NavBar = ({ isNavBar, setIsNavBar }) => {
  // const [isNavBar, setIsNavBar] = useState(false);
  const [offSetLeft, setOffSetLeft] = useState();

  return (
    <div
      className={`navBa col-md-3 h-100 col-6 d-flex flex-column  justify-content-center align-items-center  ${
        isNavBar && "navBarClose"
      }`}
    >
      <div className="">
        <div className="imgContainer">
          <img
            // "https://lh3.googleusercontent.com/a/AAcHTteNz6PfWzte4htG8BwAeeku3gSuA8dCRCkaP6-VrjKQrvk=s360-c-no"
            src={require("./components/img/profile.jpg")}
            className="myImg start"
          />
        </div>
        <h4 className="myname">Kaung Khant Soe</h4>
        <div className="myname job">Full Stack Developer</div>
        <div className="logoContainer">
          <faTentArrowLeftRight />
        </div>
        <div className="navContainer">
          {" "}
          {/* <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter> */}{" "}
          {/* <div className="hom "> */}
          <Link className="navBarLink w-md-100 w-75 d-block" to="#home">
            Home
          </Link>
          {/* </div> */}
          {/* <div className="#about"> */}
          <Link className="navBarLink w-md-100 w-75 d-block" to="#about">
            About
          </Link>
          {/* </div> */}
          {/* <div className="portfolio"> */}
          <Link className="navBarLink w-md-100 w-75 d-block" to="#portfolio">
            Portfolio
          </Link>
          {/* </div> */}
          {/* <div className="#contact"> */}
          <Link className="navBarLink w-md-100 w-75 d-block" to="#contact">
            Contact
          </Link>
          <a
            href={require("./components/img/KaungKhantSoe.pdf")}
            download="KaungKhantSoecv.pdf"
            className="navBarLink w-md-100 w-75 d-block"
          >
            Download CV
          </a>
          {/* </div> */}
        </div>

        <button
          className="toggleContainer d-md-flex d-none justify-content-center align-items-center  "
          onClick={() => {
            setIsNavBar(!isNavBar);
          }}
        >
          <h3 className="toggleButton text-center  ">
            {" "}
            {isNavBar ? ">" : "<"}{" "}
          </h3>
        </button>
      </div>
    </div>
  );
};
