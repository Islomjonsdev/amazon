import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import style from "./CustomerSwiper.module.scss";
import { Link } from "react-router-dom";

const CustomerSwiper = ({ customerSwiper }) => {
  return (
    <div className={style.customer__swipwer}>
      <div className={style.container}>
        <div className={style.customer__swipwer__wrapper}>
          <div className={style.customer__swipwer__top}>
            <h3>
              Customers who viewed items in your browsing history also viewed
            </h3>
            <p>Page 1 of 6</p>
          </div>

          <div className={style.customer__swipwer__main}>
            <Swiper
              slidesPerView={7}
              spaceBetween={30}
              className="mySwiper"
            >
              {customerSwiper?.map((item, id) => (
                <SwiperSlide className={style.customer__swiper} key={item?.id}>
                  <Link className={style.customer__swiper__link} to={`/customer/${item?.id}`}>
                    <img src={item?.image} alt="" />
                    <p>{item?.description.slice(0, 60)}</p>
                    <span>${item?.price}</span>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={style.customer__swiper__bottom}>
            <div>
              <p>See personalized recommendations</p>
              <Link className={style.customer__swiper__signin} to={"/signin"}>Sign in</Link>
              <span>
                New customer? <Link className={style.customer__swiper__signup} to={"/signup"}>Start here</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSwiper;
