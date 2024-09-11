import React from "react";
import { Link } from "react-router-dom";
import data from "../../api/dummiy-data.ProductCards.json";
import { v4 as uuidv4 } from "uuid";
import style from "./ProductCards.module.scss";

const ProductCards = () => {
  return (
    <section className={style.container}>
      <div className={style.product__cards}>
        <ul className={style.product__cards__list}>
          {data?.map((item) => (
            <li key={uuidv4()} className={style.product__cards__item}>
              <h3>{item?.title}</h3>

              <Link to={"/explorenow"}>
                <img src={item?.img} alt="" />
                <p>{item?.link}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductCards;
