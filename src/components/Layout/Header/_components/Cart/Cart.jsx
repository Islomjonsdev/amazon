import React from 'react';
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import style from "./Cart.module.scss"

const Cart = () => {
  return (
    <div className={style.cart}>
        <Link className={style.cart__link}>
            <BsCart />
            <b>Cart</b>
        </Link>
    </div>
  )
}

export default Cart