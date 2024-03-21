import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../../../assets/images/amazon-logo.webp"
import { GiUsaFlag } from "react-icons/gi";
import style from "./FooterMain.module.scss"

const FooterMain = () => {
  return (
    <div className={style.footer__main}>
        <div className={style.footer__main__wrapper}>
            <Link to="/">
                <img src={logo} alt="" />
            </Link>

            <div className={style.footer__main__bottom}>
                <select name="" id="">
                    <option value="en">Eng</option>
                </select>
                <Link>$ USD-U.S.Dollar</Link>

                <Link>
                    <GiUsaFlag />
                    <p>United States</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default FooterMain