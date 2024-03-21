import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./BacktoTop.module.scss";

const BacktoTop = () => {
  const { pathname } = useLocation();

  const scrollTop = () => {
      window.scrollTo(0, 0)
  }

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className={style.back} onClick={scrollTop}>
      <Link>Back to top</Link>
    </div>
  );
};

export default BacktoTop;
