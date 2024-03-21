import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FcNext, FcPrevious } from "react-icons/fc";
import style from "./Sellers.module.scss";
import { useRef } from "react";

const Sellers = () => {
  const [getSellers, setGetSellers] = useState([]);
  const [swipe, setSwipe] = useState(0);
  const elSwipe = useRef();

  const leftSwipe = () => {
    if (swipe === 0) {
      setSwipe((swipe) => swipe - 1);
    } else {
      setSwipe(0);
    }
  };

  const rightSwipe = () => {
    if (swipe === 0) {
      setSwipe((swipe) => swipe + 1);
    } else {
      setSwipe(getSellers.length - 1);
    }
  };

  useEffect(() => {
    elSwipe.current.scrollLeft = swipe * elSwipe.current.offsetWidth;
  }, [swipe]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setGetSellers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.sellers}>
        <h3>Top Sellers in Books for you</h3>
        <div className={style.sellers__wrapper}>
          <button
            className={style.sellers__btn}
            data-btn-type="left"
            onClick={leftSwipe}
          >
            <FcPrevious />
          </button>
          <ul className={style.sellers__list} ref={elSwipe}>
            {getSellers?.map((item, id) => (
              <li className={style.sellers__item} key={item?.id}>
                <Link>
                  <img src={item?.image} alt="" />
                </Link>
              </li>
            ))}
          </ul>
          <button
            className={style.sellers__btn}
            data-btn-type="right"
            onClick={rightSwipe}
          >
            <FcNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
