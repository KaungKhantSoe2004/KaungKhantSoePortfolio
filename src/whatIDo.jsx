import { FaCode, FaEdit, FaLightbulb } from "react-icons/fa";

export const WhatIDo = () => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-once="true"
      className="whatIDo container my-5"
    >
      <div className=" d-flex justify-content-center">
        <h4 className="whatIDoHeader pb-1 mt-4">What I Do!</h4>
      </div>
      <div className=" iDoContainer d-flex justify-content-around row">
        <div className=" mt-2  col-md-3  offset-md-1  col-10 ms-md-5 ms-4 eachDo mb-5">
          <div className="doLogo d-flex justify-content-center">
            <FaCode className=" fs-3 mt-3 eachLogo" />
          </div>
          <h5 className=" mt-2  text-center text-white"> Web Development</h5>
          <div className="para p-3 text-white-50 col-12">
            Starting off, I saw you tube videos learning programming langauges
            and I found out that I am interested in web development. So I
            decided to choose programming as my career path.Then I started
            learning programming languages and frameworks outside schools.
            Although I don't have a computer science degree, I believe I can
            build websites and can work with senior programmers properly. Also I
            am planning to attend computer science major in online
            universities.As a programmer, I will continue learning more new
            technologies and build more elegant apps.
          </div>
        </div>
        <div className=" mt-2 col-md-3 offset-md-1  ms-md-5 ms-4  eachDo mb-5 col-10">
          <div className="doLogo d-flex justify-content-center">
            <FaEdit className=" fs-3 mt-3 eachLogo" />
          </div>
          <h5 className="mt-2 text-center text-white">
            Translator and Encoder
          </h5>
          <div className="para p-3 text-white-50">
            I also work as the eng translator in telegram movie channels and
            manga channels.After I have seen some translating and encoding jobs
            in movie channels, I wanted to experience in translating field. So I
            started working as a translator and encoder.
          </div>
        </div>
        <div className=" mt-2 col-md-3  offset-md-1  col-10  ms-md-5 ms-4 eachDo mb-5">
          {" "}
          <div className="doLogo d-flex justify-content-center">
            <FaLightbulb className=" fs-3 mt-3 eachLogo" />
          </div>
          <h5 className=" text-center text-white"> Creative Idea</h5>
          <div className="para p-3 text-white-50">
            Starting off, it only makes the most sense to list this quality as
            the number one step in what it takes to become a good developer.
            Having the technical ability to do your job task day-to-day plays a
            huge part of being the best developer you can be professionally.
            Being able to pull your workload’s weight without hesitation is a
            massive step forward in the process. If you have the experience and
            knowledge in the programming language you spend the most time coding
            during the day, then you’re starting off in the perfect spot to mold
            into becoming a good developer.
          </div>
        </div>
      </div>
    </div>
  );
};
