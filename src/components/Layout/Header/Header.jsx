import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../../assets/images/amazon-logo.webp";
import { GrLocation } from "react-icons/gr";
import style from "./Header.module.scss";
import HeaderForm from "./_components/HeaderForm/HeaderForm";
import HeaderLanguage from "./_components/HeaderLanguage/HeaderLanguage";
import HeaderSignIn from "./_components/HeaderSignIn/HeaderSignIn";
import Cart from "./_components/Cart/Cart";

const Header = () => {
  return (
    <header className={style.header}>
      <Link className={style.logo__link} to="/">
        <img className={style.header__logo} src={headerLogo} alt="" />
      </Link>

      <div className={style.header__delivery__address}>
        <GrLocation />
        <div className={style.delivery__wrapper}>
          <p>Delivery to</p>
          <b>Uzbekistan</b>
        </div>
      </div>
      <HeaderForm />
      <HeaderLanguage />
      <HeaderSignIn />

      <div className={style.header__return}>
        <p>Return</p>
        <b>&Orders</b>
      </div>
      <Cart />
    </header>
  );
};

export default Header;
