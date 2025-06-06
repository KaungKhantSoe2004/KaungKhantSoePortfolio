import { motion } from "framer-motion"; // Import Framer Motion
import { PortfolioBox } from "./portfolioBox";

export const Portfolio = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3, // Delay children animations
        staggerChildren: 0.2, // Stagger animations for each child
      },
    },
  };

  // Animation variants for each project item
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      data-aos="zoom-out"
      data-aos-once="true"
      className="protfolioContainer my-3 container bg-black"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }} // Animate only once
    >
      <div className="d-flex justify-content-center mt-3">
        <h3 className="pt-4 pb-1 text-center myPortfolio">My Portfolio</h3>
      </div>
      <motion.div
        className="projectsContainer row ps-md-4 ps-1"
        variants={containerVariants}
      >
        {/* <motion.div variants={itemVariants}> */}
        <PortfolioBox
          img={require("./img/adminAmzscout.png")}
          name={"Han-commerce Backend project "}
          ke={5}
          link={"http://help.z256600-ll9lz.ps02.zwhhosting.com/"}
          lang={" used Html, Css, Bootstrap, mysql and Laravel// React Version"}
        />
        {/* </motion.div> */}
        {/* <motion.div variants={itemVariants}> */}
        <PortfolioBox
          img={require("./img/han-commerce.jpeg")}
          name={"Han-commerce Front-end project  "}
          ke={5}
          link={"http://z256600-ll9lz.ps02.zwhhosting.com/"}
          lang={
            " used Html, Css, Tailwind Css, React,React-redux //React Version "
          }
        />
        {/* </motion.div> */}
        {/* <motion.div variants={itemVariants}> */}
        <PortfolioBox
          img={require("./img/recipe.png")}
          name={"Recipe App "}
          ke={10}
          link={"https://kaung-khant-soe-recipe-app.vercel.app/"}
          lang={" used Html, Css, React and the Meal db Api"}
        />
        {/* </motion.div> */}
        {/* <motion.div variants={itemVariants}> */}
        <PortfolioBox
          img={require("./img/workout.png")}
          ke={"3"}
          name={"Work Out App"}
          link={"https://lin-work-out.vercel.app/"}
          lang={" used Html, Css, Js, Bootstrap, React and WorkOut Api "}
        />
        <PortfolioBox
          img={require("./img/lms-admin-side.png")}
          name={
            " Learning Management System Full stack with OTP login and paypal payment system"
          }
          ke={7}
          link={"https://github.com/KaungKhantSoe2004/adminSideLMS/tree/master"}
          lang={" used Html, Css , JS and Laravel"}
        />

        <PortfolioBox
          img={require("./img/jobPortal.png")}
          name={"Job Portal with Admin Panel And User Side"}
          link={
            "https://github.com/KaungKhantSoe2004/SaSaKiJobPortal/tree/master"
          }
          ke={"4"}
          lang={" used Html, Css, Js, Bootstrap, Laravel"}
        />
        {/* </motion.div> */}
        {/* <motion.div variants={itemVariants}> */}
        {/* <PortfolioBox
          img={require("./img/user-side-news.png")}
          link={"https://github.com/KaungKhantSoe2004/userSidemedia"}
          name={"News Website user Side  "}
          ke={6}
          lang={" used Html, Css, Js, Vuejs"}
        /> */}
        {/* </motion.div> */}
        {/* <motion.div variants={itemVariants}> */}
        {/* <PortfolioBox
          img={require("./img/pizza-order-system.png")}
          name={"Pizza order System with Admin Panel and User side"}
          link={
            "https://github.com/KaungKhantSoe2004/pizza-order-system/tree/master"
          }
          ke={2}
          lang={" used Html, Css, Js, Bootstrap, Laravel"}
        /> */}
        {/* </motion.div> */}
      </motion.div>
    </motion.div>
  );
};
