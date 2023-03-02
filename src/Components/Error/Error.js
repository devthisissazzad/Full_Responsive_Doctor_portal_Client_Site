import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ShearComponents/Button/Button";

const Error = () => {
  console.log(process.env.REACT_APP_url);
  return (
    <div className="bg-black h-screen flex flex-col  justify-center items-center ">
      <h2 className="text-white text-3xl pb-5  ">Coming Soon</h2>
      <span className="w-[40px] h-[40px] inline-block  rounded-full border-2 border-success mb-5 animate-pulse bg-white duration-500"></span>
      <Link to="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default Error;
