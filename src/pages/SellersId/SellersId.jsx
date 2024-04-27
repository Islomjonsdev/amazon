import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SellersId = () => {
  const [sellersId, setSellersId] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setSellersId(res?.data);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div>
      {sellersId !== null && sellersId ? (
        <img src={sellersId?.image} alt="" />
      ) : null}
    </div>
  );
};

export default SellersId;
