import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CgMathPlus, CgMathMinus, CgHeart, CgTrash } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import style from "./AddToCart.module.scss";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const accept = useSelector((state) => state);
  const [like, setLike] = useState(false)
  const dislike = (id) => (
    setLike((prev) => !prev)
  )
  const dispatch = useDispatch();
  return (
    <div className={style.cart}>
      <div className={style.container}>
        <div className={style.cart__wrapper}>
          <div className={style.cart__header}>
            <h1>Savatcha</h1>
          </div>

          <div className={style.cart__body}>
            {accept?.cart?.cart?.map((item) => (
              <div className={style.cart__item}>
                <div className={style.cart__left}>
                  <div className={style.cart__left__blog}>
                    <img src={item?.image} alt="" />
                    <div>
                      <Link>{item?.title}</Link>
                      <div className={style.cart__count__btn__wrapper}>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "decrement",
                              data: {
                                id: item.id,
                                count: item.count,
                              },
                            })
                          }
                        >
                          <CgMathMinus />
                        </button>
                        <span>{item?.count}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "increment",
                              data: item,
                            })
                          }
                        >
                          <CgMathPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={style.cart__remove__btn}>
                    <button onClick={dislike}>
                      {like ? <CgHeart /> : <FaHeart color="red"/>}
                    </button>
                    <button onClick={() => dispatch({
                      type: "remove_product",
                      data: item
                    })}>
                      <CgTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
