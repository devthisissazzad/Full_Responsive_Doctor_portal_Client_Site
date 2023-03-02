import React from "react";

const ContactUs = () => {
  return (
    <div className="lg:py-20 md:py-20 sm:py-10 py-10 lg:w-[1320px] mx-auto lg:px-0 md:px-2 sm:px-2 px-2">
      <div className=" text-center ">
        <h2 className=" text-2xl font-semibold pb-5">Contact Us</h2>
        <h1 className=" text-xl font-normal tracking-widest">
          Stay connected with us
        </h1>
      </div>
      <div className="input_main bg-white shadow-lg rounded-md lg:w-[50%] lg:mx-auto mt-10 p-10">
        <div>
          <input
            className=" w-full border-none outline-none rounded-md shadow-md  shadow-slate-400 bg-white  mb-5 py-3 placeholder:text-black px-5"
            type="text"
            name="email"
            placeholder="Email Address"
          />
        </div>
        <div>
          <input
            className=" w-full border-none outline-none rounded-md shadow-md py-3 placeholder:text-black px-5 shadow-slate-400 bg-white  mb-5"
            type="text"
            name="subject"
            placeholder="Subject"
          />
        </div>
        <div>
          <textarea
            className=" w-full border-none outline-none rounded-md shadow-md py-3 placeholder:text-black px-5 bg-white mt-5 shadow-slate-400  mb-5"
            name="textArea"
            placeholder="Message"
            cols="5"
            rows="5"
          ></textarea>
        </div>
        <input
          className=" w-full border-none outline-none rounded-md shadow-md py-3 placeholder:text-black px-5 bg-white mt-5 shadow-slate-400 hover:bg-success text-black duration-500 cursor-pointer  mb-5"
          type="submit"
          value="Send"
        />
      </div>
    </div>
  );
};

export default ContactUs;
