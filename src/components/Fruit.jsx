import React from "react";
const Fruit = (props) => {
  return (
    <>
      <div className="fruit">
        <div className="fruit__card">
          <img src={props.item.img} alt="" />
        </div>
        <div className="fruit__text">
          <div className="fruit__text__name">{props.item.name}</div>
          <div className="fruit__text__sales">UP to 50% OFF</div>
        </div>
      </div>
    </>
  );
};

export default Fruit;
