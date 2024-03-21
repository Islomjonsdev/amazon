import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Customer from "../../components/Customer/Customer";
import Deals from "../../components/Deals/Deals";
import Sellers from "../../components/Sellers/Sellers";
import HeroBanner from "../HeroBanner/HeroBanner";
import Movies from "../Movies/Movies";
import ProductCards from "../ProductCards/ProductCards";

const Home = () => {
  const [getProducts, setGetProducts] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((res) => {
      setGetProducts(res?.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      <HeroBanner />
      <ProductCards />
      <Movies />
      <Deals />
      <Cards />
      <Sellers />
      <Customer products={getProducts} setProducts={setGetProducts}/>
    </div>
  );
};

export default Home;
