import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../scss/Category.scss";

const Category = (props) => {
  return (
    <>
      <div className="category">
        <div className="category-card">
          <div className="category-card__name">{props.name}</div>
          <div className="category-card__icon">
            {" "}
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
