import React from "react";
import apple from "../assets/Group 48.svg";
import brand1 from "../assets/brand1.svg";

const ElectronicsBrands = (props) => {
  return (
    <>
      <div className="brand">
        <div className="brand__content">
          <div className="brand__content__desc">
            <div className="brand__content__desc__left">
              <div className="brand__content__desc__left__text">
                {props.item.name}
              </div>
              <div className="brand__content__desc__left__img">
                <img src={props.item.imgBrand} alt="" />
              </div>
              <div className="brand__content__desc__left__sales">
                {props.item.nameSales}
              </div>
            </div>
            <div className="brand__content__desc__right">
              <div className="brand__content__desc__right__img">
                <img src={props.item.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectronicsBrands;
