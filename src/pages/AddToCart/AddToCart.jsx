import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CgMathPlus, CgMathMinus, CgHeart, CgTrash } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import cartImg from "../../assets/images/cart.png";
import style from "./AddToCart.module.scss";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  const dislike = (id) => setLike((prev) => !prev);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateCartInLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const removeProduct = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    updateCartInLocalStorage(updatedCart);
    dispatch({ type: "remove_product", data: item });
  };

  const incrementProduct = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
    updateCartInLocalStorage(updatedCart);
    dispatch({ type: "increment", data: item });
  };

  const decrementProduct = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.count > 1
        ? { ...cartItem, count: cartItem.count - 1 }
        : cartItem
    );
    updateCartInLocalStorage(updatedCart);
    dispatch({
      type: "decrement",
      data: {
        id: item.id,
        count: item.count,
      },
    });
  };

  return (
    <div className={style.cart}>
      <div className={style.container}>
        <div className={style.cart__wrapper}>
          <div className={style.cart__header}>
            {cartItems.length > 0 ? (
              <h1>Savatcha</h1>
            ) : (
              <img src={cartImg} alt="" />
            )}
          </div>

          <div className={style.cart__body}>
            {cartItems?.map((item, index) => (
              <div className={style.cart__item} key={index}>
                <div className={style.cart__left}>
                  <div className={style.cart__left__blog}>
                    <img src={item?.image} alt="" />
                    <div>
                      <Link>{item?.title}</Link>
                      <div className={style.cart__count__btn__wrapper}>
                        <button onClick={() => decrementProduct(item)}>
                          <CgMathMinus />
                        </button>
                        <span>{item?.count}</span>
                        <button onClick={() => incrementProduct(item)}>
                          <CgMathPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={style.cart__remove__btn}>
                    <button onClick={dislike}>
                      {like ? <FaHeart color="red" /> : <CgHeart />}
                    </button>
                    <button onClick={() => removeProduct(item)}>
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
