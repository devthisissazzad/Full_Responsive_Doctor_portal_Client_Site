import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  lg:py-20 md:py-20 sm:py-10 py-10 border-t-2">
      <footer className="footer p-10 lg:flex md:flex justify-between lg:w-[1320px] mx-auto lg:px-0 md:px-2 sm:px-2 px-2">
        <div>
          <span className=" text-base font-semibold">Services</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className=" text-base font-medium">ORAL HEALTH</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="text-base font-semibold">OUR ADDRESS</span>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
        </div>
      </footer>
      <div className="text-xs text-center">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
