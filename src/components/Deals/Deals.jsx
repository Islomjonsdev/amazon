import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import style from "./Deals.module.scss";

const Deals = () => {
  const elProductWrapper = useRef()
  const [products, setProducts] = useState([]);
  const [swipeProduct, setSwipeProduct] = useState(0)
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const swipeLeft = () => {
    if (swipeProduct === 0) {
      setSwipeProduct((swipeProduct) => swipeProduct - 1)
    }else{
      setSwipeProduct(0)
    }
  }

  const swipeRight = () => {
    if (swipeProduct === 0) {
      setSwipeProduct((swipeProduct) => swipeProduct + 1)
    }else{
      setSwipeProduct(products.length - 1)
    }
  }

  useEffect(() => {
    elProductWrapper.current.scrollLeft = swipeProduct * elProductWrapper.current.offsetWidth
  }, [swipeProduct])
  return (
    <section className={style.container}>
      <div className={style.deals}>
        <div className={style.deals__heading}>
          <h3>Exciting deals</h3>
          <Link>See all deals</Link>
        </div>
        <div className={style.deals__main}>
          <button className={style.deals__btn} data-btn-type="left" onClick={swipeLeft}>
            <FcPrevious />
          </button>
          <ul className={style.deals__list} ref={elProductWrapper}>
            {products?.map((item, id) => (
              <li key={item?.id} className={style.deals__item}>
                <Link className={style.deals__link} to={`/dealsId/${item?.id}`}>
                  <img src={item?.image} alt="" />

                  <div className={style.deals__wrapper}>
                    <div>
                      <p>40% off</p>
                      <span>Limited time deal</span>
                    </div>
                    <p>{item?.price}</p>
                    <span>{item?.category}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <button className={style.deals__btn} data-btn-type="right" onClick={swipeRight}>
            <FcNext />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Deals;
