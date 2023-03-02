import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../Context/Context";

const Modal = ({ appointmentValue, selected }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = appointmentValue;
  const date = format(selected, "PP");
  //   handelForm
  const handelForm = (e) => {
    e.preventDefault();
    const treatmentName = e.target.treatmentName.value;
    const userName = user?.displayName;
    const bookingDate = e.target.time.value;
    const phone = e.target.phone.value;
    const email = user?.email;
    console.log(treatmentName, userName, bookingDate, phone, email);
  };
  //   handelForm
  return (
    <div className="">
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="appoinment-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="appoinment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handelForm} className="modal_wrapper p-10">
            <h2 className=" text-2xl text-white font-semibold">{name}</h2>
            <input
              className="w-full py-2 mt-3 rounded-md bg-white border-none outline-none text-black px-5"
              type="text"
              value={date}
            />
            <input
              className="w-full py-2 mt-3 rounded-md bg-white border-none outline-none text-black px-5"
              type="text"
              name="treatmentName"
              readOnly
              value={name}
              required
            />
            <select
              className=" mt-3 w-full  bg-white text-black py-2 rounded-md px-5"
              name="time"
              required
            >
              {slots?.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              className="w-full mt-3 py-2 rounded-md bg-white border-none outline-none text-black px-5"
              type="text"
              name="username"
              placeholder="userName"
              required
            />
            <input
              className="w-full mt-3 py-2 rounded-md bg-white border-none outline-none text-black px-5"
              type="number"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <input
              className="w-full mt-3 py-2 rounded-md bg-white border-none outline-none text-black px-5"
              type="email"
              name="email"
              value={user?.email}
              required
            />
            <input
              className="w-full mt-3 py-2 rounded-md bg-white border-none outline-none text-black px-5"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
