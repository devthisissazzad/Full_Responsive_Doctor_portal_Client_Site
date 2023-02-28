import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import Hero from "../Hero/Hero";
import HeroBottom from "../Hero/HeroBottom";
import Services from "../Services/Services";
import Treatment from "../Services/Treatment";
import AppointMent from "../AppointMent/AppointMent";
import Testimonial from "../Testimonial/Testimonial";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  const { setMode, mode } = useContext(AuthContext);
  return (
    <div className="home">
      <Hero />
      <HeroBottom />
      <Services />
      <Treatment />
      <AppointMent />
      <Testimonial />
      <ContactUs />
      {/* dark Mode */}
      <div
        onClick={() => setMode(!mode)}
        className="py-2 bg-red-500 px-5 rotate-90 right-0 top-1/2  translate-y-1/2 rounded-lg text-xl font-semibold fixed cursor-pointer z-30"
      >
        <div className="mode_wrapper">
          {mode ? <h2>Dark</h2> : <h2>Light</h2>}
        </div>
      </div>
      {/* dark Mode */}
    </div>
  );
};

export default Home;
