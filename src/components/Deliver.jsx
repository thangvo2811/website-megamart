import React from "react";
import location from "../assets/Location.svg";
import deliver from "../assets/deliver.svg";
import discount from "../assets/Discount.svg";
import "../scss/Deliver.scss";

const Deliver = () => {
  return (
    <>
      <div className="deliver">
        <div className="deliver__left">Welcome to worldwide Megamart!</div>
        <div className="deliver__right">
          <div className="deliver__right__location">
            <img src={location} alt="" />

            <div className="deliver__right__text">Deliver to 423651</div>
          </div>
          <div className="deliver__right__deliver">
            <img src={deliver} alt="" />
            <div className="deliver__right__text">Track your order</div>
          </div>
          <div className="deliver__right__discount">
            <img src={discount} alt="" />
            <div className="deliver__right__text">All Offers</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deliver;
