import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaSearchLocation } from "react-icons/fa";
export const Contact = () => {
  const form = useRef();
  const [isMailed, setIsMailed] = useState(false);
  const submit = (data) => {
    setIsLoading(true);
    console.log(data);
    setIsMailed(false);
    emailjs
      .sendForm(
        "service_kow2nt9",
        "template_cb400bp",
        form.current,
        "taWHxGleX6BjcDvid"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMailed(true);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div
      data-aos="zoom-out"
      data-aos-once="true"
      className="contact my-5"
      id="contact"
    >
      <div className=" d-flex justify-content-center">
        <h4 className="contactHeader pb-2">Contact me</h4>
      </div>
      <div className=" col-12 row">
        <div className=" col-md-6 col-12 mt-5 d-flex justify-content-end pe-5 mt-5">
          <div class="iconContainer mt-4 me-5">
            <div class="eachIcon d-flex mb-4">
              <FaPhone class="contactIcon fs-1 ms-5 pt-3" />
              <div class="ms-3">
                <div class="fs-5 contactIconHeader">Phone</div>
                <div class="contactMuted  text-white-50 fs-6">09796788834</div>
              </div>
            </div>

            <div class="eachIcon d-flex mb-4">
              <FaEnvelope class="contactIcon  fs-1 ms-5 pt-3" />
              <div class="ms-3">
                <div class="fs-5 contactIconHeader">Email</div>
                <div class="contactMuted text-white-50 fs-6">
                  kaungkhants892@gmail.com
                </div>
              </div>
            </div>

            <div class="eachIcon d-flex mb-4">
              <FaSearchLocation class="contactIcon fs-1 ms-5 pt-3" />
              <div class="ms-3">
                <div class="fs-5 contactIconHeader">Address</div>
                <div class="contactMuted  text-white-50 fs-6">Myingyan</div>
              </div>
            </div>
          </div>
        </div>

        <div className=" inputContainer col-md-6 col-12 mt-5 ms-md-0 ms-5">
          {isMailed && (
            <div class="alert alert-success">
              <strong>Success!</strong> You have successfully mailed to Kaung
              Khant Soe.
            </div>
          )}

          <form
            className="form d-flex flex-column  "
            onSubmit={handleSubmit(submit)}
            ref={form}
          >
            <input
              type="name"
              placeholder="Your Name"
              className="inputName mt-3 col-8 p-1"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <div className=" text-danger mt-1">Please fill your Name</div>
            )}
            <input
              type="name"
              placeholder="Your Email"
              className="inputEmail inputName mt-3 col-8 p-1"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className=" text-danger mt-1">
                Please fill your Email Address.
              </div>
            )}
            <input
              type="name"
              placeholder="Subject"
              className="inputSubject inputName mt-3 col-8 p-1"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <div className=" text-danger mt-1">Please fill the Subject.</div>
            )}
            <textarea
              className="message mt-3 col-10 "
              placeholder=" Message "
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <div className=" text-danger mt-1">
                Please fill in Message Box.
              </div>
            )}
            <button
              type="submit"
              value="Send"
              
              className="contactBtn col-3 p-1 my-2"
            >
              {isLoading ? "loading" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
