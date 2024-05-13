import { PortfolioBox } from "./portfolioBox";
// import "avatars-0000"
export const Portfolio = () => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-once="true"
      className="protfolioContainer my-3 container "
    >
      <div className=" d-flex justify-content-center mt-3">
        <h3 className=" pt-4 pb-1 myPortfolio">My Portfolio</h3>
      </div>
      <div className="projectsContainer row ps-md-4 ps-1">
        {/* <a href="https://book-store-by-kks.vercel.app/">
          <img src={require("./img/R.png")} alt="" class="img-thumbnail" />
        </a> */}
        <PortfolioBox
          img={require("./img/lms-student-side.png")}
          name={" Learning Management System Student Side "}
          ke={1}
          link={"https://github.com/KaungKhantSoe2004/studentSideLms"}
          lang={" used Html, Css, Js,Bootstrap, React, Laravel API"}
        />
        <PortfolioBox
          img={require("./img/lms-admin-side.png")}
          name={
            " Learning Management System Admin side with OTP login and paypal payment system"
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
        <PortfolioBox
          img={require("./img/workout.png")}
          ke={"3"}
          name={"Work Out App"}
          link={"https://github.com/KaungKhantSoe2004/LinWorkOut"}
          lang={" used Html, Css, Js, Bootstrap, React and WorkOut Api "}
        />

        <PortfolioBox
          img={require("./img/admin-side-news.png")}
          name={"Media Project with Admin Panel "}
          ke={5}
          link={
            "https://github.com/KaungKhantSoe2004/LinCodeLabMedia/tree/master"
          }
          lang={" used Html, Css, Bootstrap, and Laravel"}
        />
        <PortfolioBox
          img={require("./img/user-side-news.png")}
          link={"https://github.com/KaungKhantSoe2004/userSidemedia"}
          name={"News Website user Side  "}
          ke={6}
          lang={" used Html, Css, Js, Vuejs"}
        />

        <PortfolioBox
          img={require("./img/pizza-order-system.png")}
          name={"Pizza order System with Admin Panel and User side"}
          link={
            "https://github.com/KaungKhantSoe2004/pizza-order-system/tree/master"
          }
          ke={2}
          lang={" used Html, Css, Js, Bootstrap, Laravel"}
        />

        <PortfolioBox
          img={require("./img/linNews.png")}
          name={"News App "}
          ke={10}
          link={"https://github.com/KaungKhantSoe2004/Lin-News-by-KKS"}
          lang={" used Html, Css, React and News Api"}
        />
        {/* <PortfolioBox
          img={require("./img/Screenshot (4).png")}
          name={"Note App"}
          ke={8}
          lang={" used Html, Css, Js, React"}
        /> */}
        {/* <PortfolioBox
          img="./img/Screenshot (5).png"
          name={"Weather App"}
          ke={9}
          lang={" used Html, Css, Js, React"}
        />
        <PortfolioBox
          img={require("./img/Screenshot (7).png")}
          name={"Lin Recipe App "}
          ke={10}
          lang={" used Html, Css, Js, React"}
        /> */}
        {/* <PortfolioBox
          img={require("./img/Screenshot (10).png")}
          name={"E-Commerce Store with dashboard "}
          ke={11}
          lang={" used Html, Css, Js, React, Php, Laravel"}
        />
        <PortfolioBox
          img={require("./img/Screenshot (12).png")}
          name={" Lin Chat App "}
          ke={12}
          lang={" used Html, Css, Js, React, Laravel"}
        /> */}
      </div>
    </div>
  );
};
