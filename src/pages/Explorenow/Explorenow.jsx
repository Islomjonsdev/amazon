import axios from "axios";
import { useState, useEffect } from "react";
import explorenowApi from "../../api/explorenow.json";
import { v4 as uuidv4 } from "uuid";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./Explorenow.module.scss";
import Loading from "../../components/Loading/Loading";

const Explorenow = () => {
  const [productsExplore, setProductsExplore] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispacht = useDispatch();
  const dispatchProducts = (data) => {
    const getToLocalStorate = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCards = [...getToLocalStorate, data];

    localStorage.setItem("cart", JSON.stringify(updatedCards));
    const action = {
      type: "at_to_cart",
      data: data,
    };
    dispacht(action);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://658efbfd2871a9866e7a1bb4.mockapi.io/work")
      .then((res) => {
        setProductsExplore(res?.data);
        console.log(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={style.explorenow}>
      <div className={style.container}>
        <div className={style.explorenow__wrapper}>
          <div className={style.explorenow__left}>
            <h3>Departments</h3>
            {explorenowApi?.map((item) => (
              <div className={style.explorenow__left__wrapper} key={uuidv4()}>
                <input type="checkbox" name={item?.id} id={item?.id} />
                <label htmlFor={item?.id}>{item?.label}</label>
              </div>
            ))}
          </div>

          <ul className={style.explorenow__right}>
            {productsExplore?.map(({ id, image, title }) => (
              <li className={style.explorenow__item} key={id}>
                <Link to={`/pdp/${id}`}>
                  <img src={image} alt="" />
                  <div>
                    <span>Up to 60% off</span>
                    <p>With Prime</p>
                  </div>
                  <p>{title}</p>
                </Link>
                <button onClick={() => dispatchProducts({ id, image, title })}>
                  <BsCart />
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explorenow;
