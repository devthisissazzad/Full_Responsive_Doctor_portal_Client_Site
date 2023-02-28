import React from "react";
import parson1 from "../../assets/images/people1.png";
import parson2 from "../../assets/images/people2.png";
import parson3 from "../../assets/images/people3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules

const Testimonial = () => {
  return (
    <div className="testimonial lg:px-0 md:px-2 sm:px-2 px-2 cursor-pointer">
      <div className="text-center">
        <h2 className=" text-2xl font-semibold pb-5">Testimonial</h2>
        <h1 className=" text-xl font-normal tracking-widest">
          What Our Patients Says
        </h1>
      </div>
      <div className="testimonial-wrapper lg:w-1/2 lg:mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          freeMode={true}
          className="mySwiper shadow-xl bg-white text-black rounded-md my-10"
        >
          <SwiperSlide>
            <div className=" bg-white  p-10">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
              <div className="card-body flex justify-start items-center gap-5 pt-10">
                <img src={parson1} alt="Shoes" />

                <div className="">
                  <h2 className="card-title">Fikar Anal</h2>
                  <p>Pediatric Dental</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-10">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
              <div className="card-body flex justify-start items-center gap-5 pt-10">
                <img src={parson2} alt="Shoes" />

                <div className="">
                  <h2 className="card-title">Fikar Anal</h2>
                  <p>Pediatric Dental</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-10">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
              <div className="card-body flex justify-start items-center gap-5 pt-10">
                <img src={parson2} alt="Shoes" />

                <div className="">
                  <h2 className="card-title">Anima Shek</h2>
                  <p>Pediatric Dental</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" bg-white  p-10">
              <p>
                It is a long established fact that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu to using Content here, content
              </p>
              <div className="card-body flex justify-start items-center gap-5 pt-10">
                <img src={parson3} alt="parson" />

                <div className="">
                  <h2 className="card-title">Anitas Anal</h2>
                  <p>Pediatric Dental</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
