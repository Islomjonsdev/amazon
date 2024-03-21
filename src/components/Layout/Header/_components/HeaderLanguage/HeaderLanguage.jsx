import React from 'react';
import style from "./HeaderLanguage.module.scss"

const HeaderLanguage = () => {
  return (
    <div className={style.header__language}>
        <select>
            <option value="uz">Uz</option>
            <option value="en">En</option>
        </select>
    </div>
  )
}

export default HeaderLanguage