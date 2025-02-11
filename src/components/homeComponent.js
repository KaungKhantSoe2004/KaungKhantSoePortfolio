export const Home = () => {
  return (
    <div
      data-aos="fade-in"
      className="home   d-flex flex-column align-items-center justify-content-center"
      id="home"
    >
      <h4 className="intro text-center text-info homeUText ">
        Hello there, My name is Kaung Khant Soe,{" "}
      </h4>
      <br></br>
      <div className="writerContainer">
        <h2 className="text-writer z-3"></h2>
      </div>
      <h5 className=" mt-2 text-muted homeBText abs">
        I can help you with Clean, Smooth, Elegant and User-friendly Websites.
      </h5>
    </div>
  );
};
