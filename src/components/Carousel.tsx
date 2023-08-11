/** @format */

import { Overlord, OnePiece, Bleach } from "../assets/imgs/IMGs";

import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export const Carousel = () => {
  const data = [
    { id: 1, name: "Bleach", image: Bleach },
    { id: 2, name: "Overlord", image: Overlord },
    { id: 3, name: "One Piece", image: OnePiece },
  ];

  return (
    <>
      <div className="w-11/12 m-auto h-1/5 md:h-2/5 flex items-start justify-center">
        <Swiper
          pagination={{ dynamicBullets: true }}
          modules={[Pagination]}
          className="w-full h-full text-white text-center rounded-lg"
        >
          {data.map((item) => (
            <SwiperSlide className="relative">
              <img
                src={item.image}
                alt="Carousel Slide"
                className="object-cover w-full"
              />
              <div className="p-2 bg-shadow-bg w-1/3 absolute left-4 bottom-4 rounded-lg opacity-95">
                <p className="text-lg text-ellipsis">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
