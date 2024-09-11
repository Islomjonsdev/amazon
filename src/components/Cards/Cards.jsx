import React from "react";
import { Link } from "react-router-dom";
import cardsApi from "../../api/cards.json";
import { v4 as uuidv4 } from "uuid";
import Sellers from "../Sellers/Sellers";
import style from "./Cards.module.scss";

const Cards = () => {
  return (
    <section className={style.container}>
      <div className={style.cards}>
        <ul className={style.cards__list}>
          {cardsApi?.map((item) => (
            <li className={style.cards__item} key={uuidv4()}>
              <h3>{item?.cards_title}</h3>
              <Link to={"/explorenow"}>
                <img src={item?.cards__img} alt="" />
                <p>{item?.cards__link}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cards;
