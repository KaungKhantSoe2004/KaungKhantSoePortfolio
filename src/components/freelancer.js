export const Freelancer = () => {
  return (
    <div
      data-aos="zoom-out"
      data-aos-once="true"
      className="freelancer p-2  container  my-3  "
    >
      <div className="aboutMeContainer col-12 row d-flex justify-content-center pb-3">
        <h3 className="aboutMe text-center pt-3 col-md-4  col-8 ">About Me</h3>
      </div>
      <div className="freelanceAndSkills p-3 row ">
        <div className=" col-md-5 col-11 mt-4 ms-md-0 ms-3">
          <h4 className=" text-white  my-3">Freelancer</h4>
          <div className="freelanceText col-12 text-white-50">
            As a freelancer, I have had the opportunity to work on a variety of
            exciting projects that span across different industries. My
            expertise lies in full-stack web development, where I specialize in
            building scalable and responsive applications using technologies
            like **Laravel**, **React**, and **Tailwind CSS**. Throughout my
            freelance career, I have successfully delivered several e-commerce
            platforms, admin dashboards, and custom web applications. In each
            project, I ensure seamless integration between the front-end and
            back-end, providing users with smooth and interactive experiences.
            Working independently has honed my skills in time management,
            problem-solving, and client communication. I have collaborated with
            clients from diverse backgrounds, understanding their unique
            requirements, and offering tailored solutions that meet their needs.
            I prioritize high-quality code, clean designs, and user-centric
            development, which has allowed me to build a solid reputation among
            my clients. I continue to stay updated with the latest trends and
            technologies in web development, ensuring that the projects I work
            on are always modern and efficient.
          </div>

          <div className=" mt-3 reviewsContainer col-12 row">
            <div className="reviewContainer col-4 ">
              <h3 className="reviewNum text-center m-0 p-0">10+</h3>
              <h6 className="reviewText m-0 p-0 text-center">
                Projects Completed
              </h6>
            </div>

            <div className="reviewContainer col-4 ">
              <h3 className="reviewNum text-center m-0 p-0">0</h3>
              <h6 className="reviewText m-0 p-0 text-center">Happy Clilents</h6>
            </div>

            <div className="reviewContainer col-4 ">
              <h3 className="reviewNum text-center m-0 p-0">0</h3>
              <h6 className="reviewText m-0 p-0 text-center ">
                Positive Reviews
              </h6>
            </div>
          </div>
        </div>
        <div className=" offset-md-1 col-md-6 col-12 mt-4 pb-4 ">
          <h4 className=" text-white ms-3">My Skills</h4>
          <div className=" skillsContainer col-11 ms-3">
            {/* <div>
              <div className=" ps-3 fs-5 text-white mt-4">HTML</div>
              <div className="skillcontainer">
                <div className="html overflow-hidden mt-1 text-white pe-3 ">
                  90%
                </div>
              </div>
            </div>

            <div>
              <div className=" ps-3 fs-5 text-white mt-2">CSS</div>
              <div className="skillcontainer">
                <div className="css mt-1 text-white pe-3">86%</div>
              </div>
            </div> */}

            <div>
              <div className=" ps-3 fs-5 text-white mt-2">Javascript</div>
              <div className="skillcontainer">
                <div className="js mt-1 text-white pe-3">80%</div>
              </div>
            </div>

            <div>
              <div className=" ps-3 fs-5 text-white mt-2">React</div>
              <div className="skillcontainer">
                <div className="react mt-1 text-white pe-3">70%</div>
              </div>
            </div>

            <div>
              <div className=" ps-3 fs-5 text-white mt-2">Laravel</div>
              <div className="skillcontainer">
                <div className="laravel mt-1 text-white pe-3">70%</div>
              </div>
            </div>

            <div>
              <div className=" ps-3 fs-5 text-white mt-2">Python</div>
              <div className="skillcontainer">
                <div className="php mt-1 text-white pe-3">80%</div>
              </div>
            </div>

            <div>
              <div className=" ps-3 fs-5 text-white mt-2">Vue</div>
              <div className="skillcontainer">
                <div className="vue mt-1 text-white pe-3">56%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
