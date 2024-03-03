/* eslint-disable @next/next/no-img-element */
'use client';

import { Carousel } from 'flowbite-react';

export default function CustomCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/images/admissions/phd/carousel3.jpg" alt="..." />
        <img src="/images/admissions/phd/carousel2.jpg" alt="..." />
        <img src="/images/admissions/phd/carousel1.jpg" alt="..." />
        {/* <img src="/images/admissions/phd/carousel4.jpg" alt="..." /> */}
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
  );
}
