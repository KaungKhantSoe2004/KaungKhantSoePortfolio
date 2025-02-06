import { FaFacebook, FaTwitter, FaTelegram, FaLinkedin } from "react-icons/fa";
export const About = () => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-once="true"
      className="about my-5 fade-left  row"
      id="about"
    >
      <div className="col-md-6 textContainer mt-5 col-12">
        <div className=" d-md-flex ms-md-5 ms-3 flex-column align-items-end justify-content-center d-block  mt-3">
          <p className="col-md-10 col-12 text-white-50">
            Hello, my name is Kaung Khant Soe,{" "}
            <h3 className=" text-uppercase text-info fw-normal">
              A web developer
            </h3>
            I am a web developer specializing in both front-end and back-end
            development. I worked remotely for agencies, consult for startups,
            and collaborate with talented teams to create digital products for
            business and customer use. My programming journey began in 2022 when
            I started learning HTML, CSS, and JavaScript through YouTube. After
            building responsive websites with API integrations, I expanded my
            skills by attending a React class, where I spent a year building
            API-based React applications and mastering React hooks and
            React-Redux. Wanting to dive deeper, I enrolled in a full-stack
            course, learning HTML, CSS, JS, jQuery, Vue.js, PHP, and Laravel.
            This allowed me to build full-stack applications using Laravel for
            the back-end, and React or Vue.js for the front-end. One of my
            projects includes a Learning Management System (LMS) app, where I
            integrated PayPal and implemented OTP-based email authentication for
            the admin side. I am currently in my fourth term at the University
            of the People (UoPeople), an online institution, where I manage my
            assignments and coursework on public weekends. I'm eager for job
            opportunities where I can contribute, learn, and grow. Feel free to
            contact me if you have a role or project that aligns with my skills
            and experience.
            {/* and consumer use. I'm quietly confident, naturally curious, and
            perpetually working on improving my chops one design problem at a
            time. As a designer,I value simple content structure, clean design
            patterns, and thoughtful interactions and I enjoy designing Webs,
            Apps, Logos.And as a front-end developer ,I value simple content
            structure, clean design patterns, and thoughtful interactions and
            always ready to improve the Empoyer's business.I'm open to Job
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to contact me. */}
            <br></br>
            <a href="#contact">
              <button className="contactbutton mt-3 ">Contact Me</button>
            </a>
          </p>

          {/* <div className="mt-4  ">
            <p className=" d-inline-block p-0 text-white-50 ">
              Hello, my name is{" "}
            </p>
            <h4 className="  d-inline-block text-white-50 fst-italic fw-normal ms-3 p-0 m-0">
              Kaung Khant Soe ,
            </h4>
          </div> */}
          {/* <h1 className=" text-info fw-normal ">A WEB DEVELOPER</h1> */}
          {/* <p className=" text-white-50 col-7 ">
            based in Myanmar.I am a front-end developer and UX designer. I do
            remote work for agencies, consulted for startups, and collaborated
            with talented people to create digital products for both business
            and consumer use. I'm quietly confident, naturally curious, and
            perpetually working on improving my chops one design problem at a
            time. As a designer,I value simple content structure, clean design
            patterns, and thoughtful interactions and I enjoy designing Webs,
            Apps, Logos.And as a front-end developer ,I value simple content
            structure, clean design patterns, and thoughtful interactions and
            always ready to improve the Empoyer's business.I'm open to Job
            opportunities where I can contribute, learn and grow. If you have a
            good opportunity that matches my skills and experience then don't
            hesitate to contact me.
          </p> */}
        </div>
      </div>
      <div className="col-md-6 aboutImgContainer d-flex flex-column mt-3 order-first order-md-0">
        <div className="   ms-md-5 ms-3">
          <div className=" d-md-block d-flex justify-content-center">
            <img
              src={require("./img/profile.jpg")}
              // src="https://lh3.googleusercontent.com/a/AAcHTteNz6PfWzte4htG8BwAeeku3gSuA8dCRCkaP6-VrjKQrvk=s360-c-no"
              // src="https://th.bing.com/th/id/OIP.BqxIzZVThLNzqr-_yR-q5QHaFY?w=221&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="myImg aboutImg   "
            />
          </div>
          <div className="socialContainer mt-3  ms-5">
            <a
              href="https://www.facebook.com/profile.php?id=100050827651170"
              className=" socialA"
            >
              <FaFacebook className=" socialMedia" />
            </a>

            <a href="https://twitter.com/kaungkhants892" className="  socialA">
              <FaTwitter className=" socialMedia" />
            </a>
            <a href="https://t.me/Kaungkhant9koji" className="   socialA">
              <FaTelegram className=" socialMedia" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaung-khant-soe-5432b0289/"
              className=" w-25  socialA"
            >
              <FaLinkedin className=" socialMedia" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
