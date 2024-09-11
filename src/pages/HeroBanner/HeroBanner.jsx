import { useState, useEffect, useRef } from "react";
import heroBannerApi from "../../api/dummiy-data.heroBanner.json";
import { FcNext, FcPrevious } from "react-icons/fc";
import { v4 as uuidv4 } from "uuid";
import style from "./HeroBanner.module.scss";

const HeroBanner = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const elCarauselWrapper = useRef();

  const swipeLeft = () => {
    if (currentImg > 0) {
      setCurrentImg((currentImg) => currentImg - 1);
    } else {
      setCurrentImg(heroBannerApi.length - 1);
    }
  };

  const swipeRight = () => {
    if (currentImg < heroBannerApi.length - 1) {
      setCurrentImg((currentImg) => currentImg + 1);
    } else {
      setCurrentImg(0);
    }
  };

  useEffect(() => {
    elCarauselWrapper.current.scrollLeft =
      currentImg * elCarauselWrapper.current.offsetWidth;
  }, [currentImg]);

  return (
    <section className={style.container}>
      <div className={style.carausel}>
        <button
          className={style.carausel__btn}
          data-btn-type="left"
          onClick={swipeLeft}
        >
          <FcPrevious />
        </button>
        <div className={style.carausel__wrapper} ref={elCarauselWrapper}>
          {heroBannerApi?.map((item) => (
            <div key={uuidv4()}>
              <img className={style.carausel__img} src={item} alt="" />
            </div>
          ))}
          <div className={style.dots}>
            {heroBannerApi?.map((dots, index) => (
              <div
                key={index}
                style={
                  currentImg === index
                    ? { background: "green", transform: "scale(1.3" }
                    : null
                }
                onClick={() => setCurrentImg(index)}
                className={style.dot}
              ></div>
            ))}
          </div>
        </div>
        <button
          className={style.carausel__btn}
          data-btn-type="right"
          onClick={swipeRight}
        >
          <FcNext />
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
