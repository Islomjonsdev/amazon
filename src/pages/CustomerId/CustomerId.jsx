import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CustomerId = () => {
  const [customerId, setCustomerId] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res?.data);
        setCustomerId(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {customerId !== null && customerId ? (
        <div>
          <img src={customerId?.image} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default CustomerId;
