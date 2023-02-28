import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import img from "../../../assets/images/chair.png";

import "react-day-picker/dist/style.css";
import AppointMentServices from "./AppointMentServices";

const AppointMentRoute = () => {
  const today = new Date();
  const [selected, setSelected] = useState(today);

  return (
    <div className="lg:px-0 md:px-2 sm:px-2 px-2">
      <div className="lg:w-[1320px] mx-auto lg:flex md:flex md:justify-center md:items-center lg:justify-center lg:items-center lg:py-20 md:py-20 sm:py-10 py-10">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full">
          <DayPicker
            className="lg:flex md:flex lg:justify-center md:justify-center lg:items-center md:items-center sm:items-center sm:justify-center flex justify-center items-center"
            mode="single"
            required
            selected={selected}
            onSelect={setSelected}
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2">
          <img src={img} alt="" />
        </div>
      </div>
      <AppointMentServices selected={selected} />
    </div>
  );
};

export default AppointMentRoute;
