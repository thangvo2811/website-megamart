import React from "react";
import phone1 from "../assets/image1.svg";
import "../scss/SmartPhone.scss";

const SmartPhone = (props) => {
  return (
    <>
      <div className="product">
        <div className="product-card">
          <div className="product-card__desc">
            <div className="product-card__desc__img">
              <img src={props.item.img} alt="Phone1" />
            </div>
            <div className="product-card__desc__discount">56% OFF</div>
          </div>
          <div className="product-card__info">
            <div className="product-card__info__name">{props.item.name}</div>
            <div className="product-card__info__price">
              {props.item.price} <span>{props.item.discount}</span>
            </div>
            <div className="product-card__info__disc">
              <div className="product-card__info__disc__text">
                <a href="">Save - {props.item.sales}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartPhone;
