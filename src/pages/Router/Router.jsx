import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import DealsId from "../DealsId/DealsId";
import Explorenow from "../Explorenow/Explorenow";
import Home from "../../pages/Home/Home";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import Pdp from "../Pdp/Pdp";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explorenow" element={<Explorenow />} />
          <Route path="/dealsId/:id" element={<DealsId />} />
          <Route path="/pdp/:id" element={<Pdp />}/>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
