import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import style from "./AddToCart.module.scss";

const AddToCart = () => {
  const accept = useSelector((state) => state);
  const dispacht = useDispatch()
  console.log(accept);
  return (
    <div className={style.cart}>
        {accept?.cart?.cart?.map((item) => (
          <img src={item?.image} alt="" />
        ))}
    </div>
  );
};

export default AddToCart;
