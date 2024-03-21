import React from "react";
import style from "./Customer.module.scss";
import CustomerSwiper from "./CustomerSwiper/CustomerSwiper";

const Customer = ({ products }) => {
  return (
    <div className={style.customer}>
      <div className={style.customer__wrapper}></div>
      <CustomerSwiper customerSwiper={products} />
    </div>
  );
};

export default Customer;
