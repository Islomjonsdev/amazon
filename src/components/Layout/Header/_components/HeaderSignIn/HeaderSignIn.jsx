import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import style from "./HeaderSignIn.module.scss"

const HeaderSignIn = () => {
  return (
    <div className={style.header__signin}>
        <Link className={style.header__signin__link} to={"/signin"}>
            Hello, sign in
            <div>
                <p>Account & Lists</p>
                <FaCaretDown />
            </div>
        </Link>
    </div>
  )
}

export default HeaderSignIn