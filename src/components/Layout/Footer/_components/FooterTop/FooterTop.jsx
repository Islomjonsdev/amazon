import React from "react";
import { Link } from "react-router-dom";
import FooterMain from "../../_components/FooterMain/FooterMain";
import style from "./FooterTop.module.scss";

const FooterTop = () => {
  return (
    <div className={style.footer__top}>
      <ul className={style.footer__top__wrapper}>
        <li className={style.footer__top__item}>
          <h3>Get to Know Us</h3>

          <ul className={style.footer__top__list}>
            <li className={style.footer__top__item}>
              <Link>Carees</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Blog</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>About Amazon</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Investor Relations</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Amazon Devices</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Amazon Science</Link>
            </li>
          </ul>
        </li>
        <li className={style.footer__top__item}>
          <h3>Make Money with Us</h3>
          <ul className={style.footer__top__list}>
            <li className={style.footer__top__item}>
              <Link>Sell products on Amazon</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Sell on Amazon Business</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Sell apps on Amazon</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Become an Affiliate</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Advertise Your Products</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Self-Publish with Us</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Host an Amazon Hub</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>›See More Make Money with Us</Link>
            </li>
          </ul>
        </li>
        <li className={style.footer__top__item}>
          <h3>Amazon Payment Products</h3>
          <ul className={style.footer__top__list}>
            <li className={style.footer__top__item}>
              <Link>Amazon Business Card</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Shop with Points</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Reload Your Balance</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Amazon Currency Converter</Link>
            </li>
          </ul>
        </li>
        <li className={style.footer__top__item}>
          <h3>Let Us Help You</h3>
          <ul className={style.footer__top__list}>
            <li className={style.footer__top__item}>
              <Link>Amazon and COVID-19</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Your Account</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Your Orders</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Shipping Rates & Policies</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Returns & Replacements</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Manage Your Content and Devices</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Amazon Assistant</Link>
            </li>
            <li className={style.footer__top__item}>
              <Link>Help</Link>
            </li>
          </ul>
        </li>
      </ul>
      <FooterMain />
    </div>
  );
};

export default FooterTop;
