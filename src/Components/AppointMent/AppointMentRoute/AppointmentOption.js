import React from "react";
import Button from "../../../ShearComponents/Button/Button";

const AppointmentOption = ({ appointment, handelAppointment }) => {
  const { name, slots } = appointment;
  return (
    <div className=" shadow-md shadow-slate-300 p-10 rounded-md text-center">
      <h3 className=" text-2xl font-medium py-3">{name}</h3>
      <p className="text-md py-3">{slots[0]}</p>
      <p className="pb-3">
        {slots.length}{" "}
        {slots.length > 1 ? "Spaces Available" : "Space Available"}
      </p>
      <Button>
        <label
          onClick={() => handelAppointment(appointment)}
          className=" cursor-pointer"
          disabled={slots.length === 0}
          htmlFor="appoinment-modal"
        >
          Book Appointment
        </label>
      </Button>
    </div>
  );
};

export default AppointmentOption;
