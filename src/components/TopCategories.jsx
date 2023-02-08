import React from "react";
import cate1 from "../assets/image1.svg";
import "../scss/TopCategories.scss";

const TopCategories = (props) => {
  return (
    <>
      <div className="top-category">
        <div className="top-category__img">
          <img src={props.item.img} alt="" />
        </div>
        <div className="top-category__text">{props.item.name}</div>
      </div>
    </>
  );
};

export default TopCategories;
