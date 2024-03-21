import React from "react";
import style from "./HeaderForm.module.scss"
import { IoIosSearch } from "react-icons/io";

const HeaderForm = () => {
  return (
    <form className={style.header__form}>
      <select>
          <option value="all">All</option>
      </select>
      <input type="search" placeholder="Search Amazon"/>
      <button>
        <IoIosSearch />
      </button>
    </form>
  );
};

export default HeaderForm;
