export const PortfolioBox = ({ img, name, ke, projectName, lang, link }) => {
  return (
    <a
      href={link}
      className="portfolioBoxContainer position-relative col-md-5 ms-md-5 ms-2 mb-4 col-11   "
      id="portfolio"
    >
      <img
        src={img}
        alt={ke}
        className="portfolioImg w-100 "
        aria-label="For screen readers"
      />
      <div className="portfolioText align-items-end pb-3 d-flex justify-content-center ">
        <div className="textcontainer">
          <h5 className=" fw-bold">{name}</h5>
          {/* <button className="demo col-12 p-1 ms-1">Source Code</button> */}
          <div className="lang fw-bold">{lang}</div>
        </div>
      </div>
    </a>
  );
};
