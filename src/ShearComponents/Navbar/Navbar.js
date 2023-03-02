import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { AuthContext } from "../../Context/Context";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { mode } = useContext(AuthContext);
  return (
    <div
      className={`main_nav shadow-lg ${
        mode ? "shadow-slate-500" : "shadow-slate-200"
      }`}
    >
      <div className="nav_bar lg:w-[1320px] lg:mx-auto md:w-full sm:w-full w-full lg:px-0 md:px-2 sm:px-2 px-2 py-4">
        <div className="nav_wrapper lg:flex md:flex sm:flex flex lg:justify-between md:justify-between sm:justify-between justify-between lg:items-center md:items-center sm:items-center items-center ">
          <div className="left_nav">
            <h3 className=" text-base">Doctors Portol</h3>
          </div>
          <div className="right_nav cursor-pointer">
            <ul
              className={`lg:flex md:flex gap-3 lg:static md:static sm:absolute absolute justify-center  ${
                menu ? "left-0" : "left-[-10000px]"
              } lg:w-fit md:w-fit sm:w-[80%] w-[80%] lg:bg-inherit md:bg-inherit ${
                mode ? "bg-black" : "bg-white"
              }   duration-700 ease-in-out lg:h-fit md:h-fit sm:h-full h-full top-0 text-base ${
                mode ? "shadow-md" : "shadow-md"
              } ${
                mode ? "shadow-gray-200" : "shadow-black"
              } lg:shadow-none md:shadow-none max-h-min z-50`}
            >
              <li className=" lg:w-fit md:w-fit sm:w-full w-full text-center lg:py-0 md:py-0 sm:py-2 py-2 lg:bg-inherit md:bg-inherit  hover:shadow-lg shadow-slate-300 lg:hover:shadow-none md:hover:shadow-none duration-500 ease-in-out lg:mb-0 md:mb-0 mb-2 ">
                <Link to="/home">Home</Link>
              </li>
              <li className=" lg:w-fit md:w-fit sm:w-full w-full text-center lg:py-0 md:py-0 sm:py-2 py-2 lg:bg-inherit md:bg-inherit  hover:shadow-lg lg:hover:shadow-none md:hover:shadow-none duration-500 ease-in-out lg:mb-0 md:mb-0 mb-2">
                <Link to="/about">About</Link>
              </li>
              <li className=" lg:w-fit md:w-fit sm:w-full w-full text-center lg:py-0 md:py-0 sm:py-2 py-2 lg:bg-inherit md:bg-inherit  hover:shadow-lg lg:hover:shadow-none md:hover:shadow-none duration-500 ease-in-out lg:mb-0 md:mb-0 mb-2">
                <Link to="/appointment">Appointment</Link>
              </li>
              <li className=" lg:w-fit md:w-fit sm:w-full w-full text-center lg:py-0 md:py-0 sm:py-2 py-2 lg:bg-inherit md:bg-inherit  hover:shadow-lg lg:hover:shadow-none md:hover:shadow-none duration-500 ease-in-out lg:mb-0 md:mb-0 mb-2">
                <Link to="/reviews">Reviews</Link>
              </li>
              <li className=" lg:w-fit md:w-fit sm:w-full w-full text-center lg:py-0 md:py-0 sm:py-2 py-2 lg:bg-inherit md:bg-inherit  hover:shadow-lg lg:hover:shadow-none md:hover:shadow-none duration-500 ease-in-out lg:mb-0 md:mb-0 mb-2">
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li className=" lg:w-fit md:w-fit sm:w-full w-full text-center lg:py-0 md:py-0 sm:py-2 py-2 lg:bg-inherit md:bg-inherit  hover:shadow-lg lg:hover:shadow-none md:hover:shadow-none duration-500 ease-in-out lg:mb-0 md:mb-0 mb-2">
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <div
              onClick={() => setMenu(!menu)}
              className="menu_icon lg:hidden md:hidden sm:static static"
            >
              {menu ? (
                <BiMenuAltRight className=" text-4xl" />
              ) : (
                <BiMenuAltLeft className=" text-4xl" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
