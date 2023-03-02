import React from "react";
import { Link } from "react-router-dom";
import treatment from "../../assets/images/treatment.png";
import Button from "../../ShearComponents/Button/Button";

const Treatment = () => {
  return (
    <div className="treatment lg:py-24 md:py-20 sm:py-10 py-10">
      <div className="lg:w-[1320px] md:w-full sm:w-full w-full mx-auto lg:px-0 md:px-2 sm:px-2 px-2 treatment_wrapper lg:flex md:flex lg:justify-center md:justify-center lg:items-center md:items-center">
        <div className="left_treatment lg:w-1/2 md:w-1/2 sm:w-full">
          <img
            className=" w-full max-h-[576px] object-cover rounded-md"
            src={treatment}
            alt="treatment"
          />
        </div>
        <div className="right_treatment  lg:text-start md:text-start sm:text-center text-center lg:px-10 md:px-10  lg:w-1/2 md:w-1/2 ">
          <h2 className=" text-5xl pb-3 lg:pt-0 md:pt-0 sm:pt-5 pt-5">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p className=" text-justify pb-5">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <Link to="/appointment">
            <Button>GET STARTED</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
