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
          <div className="freelanceText  col-12 text-white-50">
            Freelancers are usually solitary workers. Moving from workplace to
            workplace is difficult as they all have slightly different quirks
            and working practices. Ask what you can do to help, make suggestions
            about what you can do next if you come to the end of one task, and
            let people know that you are available. Always keep yourself fit for
            the work. Doing your job effectively and efficiently is very
            important. 8. Provide value for money Providing a good service for a
            fair level of remuneration is valuable. You should be skilled,
            experienced and talent. You should have worth for getting higher
            rate than other freelancers. You will be able to earn more. 9. Try
            to continually add value to what you offer Try to improve your
            skill.
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
            <div>
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
            </div>

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
              <div className=" ps-3 fs-5 text-white mt-2">PHP</div>
              <div className="skillcontainer">
                <div className="php mt-1 text-white pe-3">65%</div>
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
