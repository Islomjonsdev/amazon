import React, { useState } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import style from "./Cart.module.scss";

const Cart = () => {
  const [cartNum, setcartNum] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  return (
    <div className={style.cart}>
      <Link className={style.cart__link} to={"/addtocart"}>
        <BsCart />
        <b>Cart</b>
      </Link>
        <span>{cartNum?.length}</span>
    </div>
  );
};

export default Cart;
