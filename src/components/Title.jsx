import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "../scss/Title.scss";

const Title = (props) => {
  return (
    <>
      <div className="title">
        <div className="title-content">
          <div className="title-content__item">
            <div className="title-content__item__name">
              {props.name}
              <span>{props.name1}</span>
            </div>
          </div>

          <div className="title-content__view">
            <div className="title-content__view__text">View All</div>
            <div className="title-content__view__icon">
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
