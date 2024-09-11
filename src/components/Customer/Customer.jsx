import React from "react";
import style from "./Customer.module.scss";
import CustomerSwiper from "./CustomerSwiper/CustomerSwiper";

const Customer = ({ products }) => {
  return (
    <section className={style.customer}>
      <div className={style.customer__wrapper}></div>
      <CustomerSwiper customerSwiper={products} />
    </section>
  );
};

export default Customer;
