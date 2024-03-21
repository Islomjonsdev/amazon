import axios from "axios";
import { useState, useEffect } from "react";
import explorenowApi from "../../api/explorenow.json";
import { v4 as uuidv4 } from "uuid";
import style from "./Explorenow.module.scss";
import { Link } from "react-router-dom";

const Explorenow = () => {
  const [productsExplore, setProductsExplore] = useState([]);
  useEffect(() => {
    axios
      .get("https://658efbfd2871a9866e7a1bb4.mockapi.io/work")
      .then((res) => {
        setProductsExplore(res?.data);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            {productsExplore?.map((products, id) => (
              <li className={style.explorenow__item} key={products?.id}>
                <Link to={`/pdp/${products?.id}`}>
                  <img src={products?.image} alt="" />
                  <div>
                    <span>Up to 60% off</span>
                    <p>With Prime</p>
                  </div>
                  <p>{products?.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explorenow;
