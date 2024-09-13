import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import data from "../../../api/dummiy-data.json";
import { v4 as uuidv4 } from "uuid";
import style from "./HeaderBottom.module.scss";
import { useState } from "react";

const HeaderBottom = () => {
  const [openSidebarPopup, setOpenSidebarPopup] = useState(false);
  const jandleCloneAndOpenPopup = () => {
    setOpenSidebarPopup((openandClose) => !openandClose);
  };
  return (
    <>
      <div className={style.header__bottom}>
        <div className={style.header__bottom__btn__blog}>
          <button onClick={jandleCloneAndOpenPopup}>
            <GiHamburgerMenu />
            All
          </button>
          <ul>
            {data?.map((item) => (
              <li key={uuidv4()}>
                <Link>{item?.link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {openSidebarPopup && (
        <div>salom</div>
      )}
    </>
  );
};

export default HeaderBottom;
