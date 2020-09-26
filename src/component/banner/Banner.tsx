import React from "react";
import "./Banner.scss";
function Banner() {
  return (
    <header className="banner flex align-items-center position-relative">
      <div className="banner-content flex column">
        <h1 className="header-title margin-0 padding-bottom-8">
          Stranger Things
        </h1>
        <div className="header-buttons flex">
          <button className="">Play</button>
          <button>My List</button>
        </div>
        <h1 className="header-content-description">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces, and one strange
          little girl.
        </h1>
      </div>
      <div className="fade-bottom position-absolute bottom-0"></div>
    </header>
  );
}

export default Banner;
