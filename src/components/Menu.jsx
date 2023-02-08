import React from "react";
import { BiCartAlt, BiMenuAltLeft } from "react-icons/bi";
import { BiListUl } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import "../scss/Menu.scss";

const Menu = () => {
  return (
    <>
      <div className="menu-grid">
        <div className="menu-grid__left">
          <div className="menu-grid__left__icon">
            <BiMenuAltLeft />
          </div>
          <div className="menu-grid__left__text">MegaMart</div>
        </div>
        <div className="menu-grid__middle">
          <div className="menu-grid__middle__box">
            <div className="menu-grid__middle__box__input">
              <div className="menu-grid__middle__box__input__search">
                <BiSearch />
              </div>
              <input
                type="text"
                placeholder=" Search essentials, groceries and more..."
                className="text-input"
              />
              <div className="menu-grid__middle__box__input__list">
                <BiListUl />
              </div>
            </div>
          </div>
          <div className="menu-grid__middle__user">
            <div className="menu-grid__middle__user__icon">
              <BiUser />
            </div>
            <div className="menu-grid__middle__user__text">
              <span>
                <a href="#">Sign Up/</a>
              </span>
              <span>
                <a href="#">Sign In</a>
              </span>
            </div>
          </div>
          <div className="menu-grid__middle__line"></div>
          <div className="menu-grid__middle__cart">
            <div className="menu-grid__middle__cart__icon">
              <BiCart />
            </div>
            <div className="menu-grid__middle__cart__text">
              <a href="#">Cart</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
