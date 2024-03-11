'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <Swiper
      spaceBetween={30}
      autoHeight={true}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper">
      <SwiperSlide>
        <div className=" h-80 flex justify-center items-center">
          <img
            src="/images/admissions/phd/carousel2.jpg"
            alt="..."
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 flex justify-center items-center">
          <img
            src="/images/admissions/phd/carousel1.jpg"
            alt="..."
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 flex justify-center items-center">
          <img
            src="/images/admissions/phd/carousel3.jpg"
            alt="..."
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 flex justify-center items-center">
          <img
            src="/images/admissions/phd/carousel4.jpg"
            alt="..."
            className="object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-80 flex justify-center items-center">
          <img
            src="/images/admissions/phd/carousel5.jpg"
            alt="..."
            className="object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
