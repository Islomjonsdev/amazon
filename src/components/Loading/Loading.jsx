import React from "react";
import style from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={style.loading_wrapper}>
      <div className={style.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
