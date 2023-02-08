import React from "react";
import "../scss/Footer.scss";
import ios from "../assets/ios.svg";
import android from "../assets/android.svg";
import icon1 from "../assets/icon.svg";
import icon2 from "../assets/icon1.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer__left">
          <div className="footer__left__name">MegaMart</div>
          <div className="footer__left__contact">Contact Us</div>
          <div className="footer__left__app">
            <div className="footer__left__app__icon">
              <img src={icon1} alt="" />
            </div>
            <div className="footer__left__app__content">
              <div className="footer__left__app__text">What's App</div>
              <div className="footer__left__app__phone">+1 202-918-2132</div>
            </div>
          </div>
          <div className="footer__left__app">
            <div className="footer__left__app__icon">
              <img src={icon2} alt="" />
            </div>
            <div className="footer__left__app__content">
              <div className="footer__left__app__content__text">Call Us</div>
              <div className="footer__left__app__content__phone">
                +1 202-918-2132
              </div>
            </div>
          </div>
          <div className="footer__left__down">
            <div className="footer__left__down__text">Download App</div>
            <div className="footer__left__down__app">
              <img src={ios} alt="" />
              <img
                className="footer__left__down__app__app-android"
                src={android}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__middle__name">Most Popular Categories</div>
          <div className="footer__middle__items">
            <li>Stapes</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruit</li>
            <li>Snack & Food</li>
            <li>Dairy & Barkey</li>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right__name">Customer Services</div>
          <div className="footer__right__items">
            <li>About Us</li>
            <li>Corn & Conditions</li>
            <li>Personal Care</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom__text">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </div>
      </div>
    </div>
  );
};

export default Footer;
