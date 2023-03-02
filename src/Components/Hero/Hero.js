import React from "react";
import Button from "../../ShearComponents/Button/Button";
import hero from "../../assets/images/chair.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero_main lg:flex md:flex  lg:w-[1320px] md:w-full sm:w-full w-full  mx-auto lg:px-0 md:px-2 sm:px-2 px-2 lg:items-center lg:py-24 md:py-20 md:items-center sm:py-10 py-10">
      <div className="hero_left ">
        <h2 className=" lg:text-5xl md:text-5xl  text-5xl font-bold lg:pr-20 mb-3 ">
          Your New Smile Starts Here
        </h2>
        <p className="text-base leading-6 pb-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </p>
        <Link to="/appointment">
          <Button>GET STARTED</Button>
        </Link>
      </div>
      <div className="hero_right lg:pt-0 md:pt-0 sm:pt-5 pt-5">
        <img className="w-full" src={hero} alt="heroImg" />
      </div>
    </div>
  );
};

export default Hero;
