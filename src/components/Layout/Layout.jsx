import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import FooterTop from "./Footer/_components/FooterTop/FooterTop";
import Header from "./Header/Header";
import BacktoTop from "../BacktoTop/BacktoTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <Outlet />
      <BacktoTop />
      <FooterTop />
      <Footer />
    </div>
  );
};

export default Layout;
