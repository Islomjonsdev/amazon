import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import style from "./DealsId.module.scss";

const DealsId = () => {
  const [productId, setProductId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res?.data);
        setProductId(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={style.dealsId}>
      <div className={style.container}>
        {productId !== null && productId ? (
          <div className={style.dealsId__wrapper}>
            <div className={style.dealsId__left}>
              <img src={productId?.image} alt="" />
            </div>

            <div className={style.dealsId__right}>
              <div>
                <h3>{productId?.description}</h3>
                <div className={style.dealsId__right__rating}>
                  <p>{productId?.rating?.rate}</p>
                  {productId?.rating % 1 === 0 ? (
                    new Array(productId?.rating?.rate)
                      .fill("#")
                      .map((star) => <FaStar key={uuidv4()} />)
                  ) : (
                    <>
                      {new Array(Math.floor(productId?.rating?.rate))
                        .fill("#")
                        .map((start) => (
                          <FaStar />
                        ))}
                      <FaRegStarHalfStroke key={uuidv4()} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DealsId;
