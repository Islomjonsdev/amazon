import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import DealsId from "../DealsId/DealsId";
import Explorenow from "../Explorenow/Explorenow";
import Home from "../../pages/Home/Home";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import Pdp from "../Pdp/Pdp";
import AddToCart from "../AddToCart/AddToCart";
import CustomerId from "../CustomerId/CustomerId";
import SellersId from "../SellersId/SellersId";
import MoviesId from "../MoviesId/MoviesId";
import Notfound from "../Notfound/Notfound";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explorenow" element={<Explorenow />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/dealsId/:id" element={<DealsId />} />
          <Route path="/pdp/:id" element={<Pdp />} />
          <Route path="/customer/:id" element={<CustomerId />} />
          <Route path="/sellers/:id" element={<SellersId />} />
          <Route path="/movies/:id" element={<MoviesId />} />
        </Route>
        <Route path="*" element={<Notfound />}/>
      </Routes>
    </div>
  );
};

export default Router;
