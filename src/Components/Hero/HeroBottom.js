import React from "react";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const HeroBottom = () => {
  const heroData = [
    {
      img: clock,
      heading: "Opening Hours",
      description: "opening hours is 10-AM to 10-PM",
    },
    {
      img: location,
      heading: "Visit Our Location",
      description: "Dhaka,Brooklyn, NY 10036,",
    },
    {
      img: phone,
      heading: "Contact us now",
      description: "01734534444",
    },
  ];
  return (
    <div className="lg:w-[1320px] mx-auto lg:px-0 md:px-2 sm:px-2 px-2 hero_main grid lg:grid-cols-3 md:grid-cols-3 lg:gap-6 md:gap-6 sm:gap-6 gap-6 lg:py-24 md:py-20 sm:py-10 py-10 cursor-pointer">
      {heroData.map((hero, idx) => (
        <div
          key={idx}
          className="hero_wrap bg-[#19D3AE] lg:flex   lg:items-center md:flex md:items-center gap-2 py-10 lg:px-10 md:px-3 sm:px-5 px-5 rounded-md shadow-md shadow-slate-500"
        >
          <div className="left_hero flex justify-center">
            <img className="  w-20 h-20" src={hero?.img} alt="phone" />
          </div>
          <div className="right_hero">
            <h2 className=" text-xl font-semibold text-white">
              {hero?.heading}
            </h2>
            <p className=" text-base pt-1 text-white">{hero?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroBottom;
