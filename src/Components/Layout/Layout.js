import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/Context";
import Footer from "../../ShearComponents/Footer/Footer";
import Navbar from "../../ShearComponents/Navbar/Navbar";

const Layout = () => {
  const { mode } = useContext(AuthContext);
  return (
    <div
      className={`${mode ? "bg-black" : "bg-white"} ${
        mode ? "text-white" : "text-black"
      }`}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
