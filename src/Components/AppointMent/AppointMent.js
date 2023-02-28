import React from "react";
import Button from "../../ShearComponents/Button/Button";
import appoinment from "../../assets/images/doctor.png";
import "./AppoinMent.css";
import { Link } from "react-router-dom";

const AppointMent = () => {
  return (
    <div className="treatMent lg:py-24 md:py-20 sm:py-10 py-10">
      <div className="lg:w-[1320px] mx-auto md:px-2 sm:px-2 px-2 treatMent_wrap lg:flex md:flex lg:justify-center lg:items-center md:items-center md:justify-center lg:py-0 md:py-10 sm:py-10 py-10">
        <div className="left lg:w-1/2 md:w-1/2 lg:block md:hidden sm:hidden hidden">
          <img
            className=" lg:mt-[-130px] "
            src={appoinment}
            alt="appointment"
          />
        </div>
        <div className="right lg:px-10 lg:w-1/2 md:w-full lg:text-start text-center">
          <h2 className="text-2xl text-white pb-3 font-semibold">
            Appointment
          </h2>
          <h1 className="text-4xl text-white font-bold pb-3">
            Make an appointment Today
          </h1>
          <p className="text-white text-base pb-5  text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to="/appoinMent">
            <Button>GET STARTED</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppointMent;
