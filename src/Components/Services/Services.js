import React from "react";
import treatment from "../../assets/images/whitening.png";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";

const Services = () => {
  const servicesData = [
    {
      img: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      img: treatment,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="services_wrapper">
      <div className=" text-center">
        <h2 className=" text-2xl font-semibold pb-5">Our Services</h2>
        <h3 className=" text-xl font-normal tracking-widest">
          Services We Provide
        </h3>
      </div>
      <div className="lg:w-[1320px] mx-auto lg:px-0 md:px-2 sm:px-2 px-2 hero_main grid lg:grid-cols-3 md:grid-cols-3 lg:gap-6 md:gap-6 sm:gap-6 gap-6 lg:py-24 md:py-20 sm:py-10 py-10 cursor-pointer">
        {servicesData.map((service, idx) => (
          <div
            key={idx}
            className="hero_wrap flex flex-col items-center justify-center gap-2 py-10 lg:px-10 md:px-3 sm:px-5 px-5 rounded-md shadow-md shadow-slate-500"
          >
            <div className="left_hero  ">
              <img className="  w-20 h-20 " src={service?.img} alt="phone" />
            </div>
            <div className="right_hero flex flex-col justify-center items-center">
              <h2 className=" text-xl font-semibold ">{service?.title}</h2>
              <p className=" text-base pt-1  text-center">
                {service?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
