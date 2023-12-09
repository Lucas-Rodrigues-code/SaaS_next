"use client";
//libs
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Banner() {
  return (
    <div className="mx-6 my-6 rounded-md">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <img
            className="block w-full h-full object-cover rounded-md"
            src="/assets/Imgs/banner1.png"
            alt="banner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="block w-full h-full object-cover rounded-md"
            src="/assets/Imgs/banner1.png"
            alt="banner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
