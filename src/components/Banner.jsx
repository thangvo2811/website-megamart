import React from "react";
import watch from "../assets/image 2.svg";
import "../scss/Banner.scss";

const Banner = () => {
  return (
    <div className="desc">
      <div className="banner">
        <div className="banner__content">
          <div className="banner__content__text">
            <h3>Best Deal Online on smart watches</h3>
            <h1>SMART WEARABLE.</h1>
            <h3>UP to 80% OFF</h3>
          </div>
          <div className="banner__content__img">
            <img src={watch} alt="watch" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
