import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import AppointmentOption from "./AppointmentOption";

const AppointMentServices = ({ selected }) => {
  const [appointments, setAppointments] = useState(null);
  const appointmentData = async () => {
    const data = await axios.get(`http://localhost:5000/appointment`);
    setAppointments(data.data.data);
  };
  useEffect(() => {
    appointmentData();
  }, []);
  // handelAppointment
  const [appointmentValue, setAppointmentValue] = useState(null);

  const handelAppointment = (handelAppointment) => {
    setAppointmentValue(handelAppointment);
  };
  // handelAppointment
  return (
    <div className="appointMent_main lg:w-[1320px] mx-auto md:w-full sm:w-full w-full">
      <div className="text-center">
        {selected && <p>Available Services on {format(selected, "PP")}</p>}
      </div>
      <div className="appointMent_wrapper grid lg:grid-cols-3 md:grid-cols-3 gap-4 lg:py-20 md:py-20 sm:py-10 py-10">
        {appointments?.map((appointment) => (
          <AppointmentOption
            key={appointment._id}
            appointment={appointment}
            handelAppointment={handelAppointment}
          ></AppointmentOption>
        ))}
      </div>
      {appointmentValue && (
        <Modal selected={selected} appointmentValue={appointmentValue} />
      )}
    </div>
  );
};

export default AppointMentServices;
