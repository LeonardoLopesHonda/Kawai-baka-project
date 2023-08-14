/** @format */

import { Overlord, OnePiece, Bleach } from "../assets/imgs/IMGs";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export const Carousel = () => {
  const data = [
    { id: 1, name: "Bleach", image: Bleach },
    { id: 2, name: "Overlord", image: Overlord },
    { id: 3, name: "One Piece", image: OnePiece },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  return (
    <>
      <div className="w-11/12 m-auto h-1/5 xs:h-auto flex items-start justify-center z-0">
        <Swiper
          modules={[Pagination, EffectCoverflow, Navigation]}
          updateOnWindowResize={true}
          effect={"coverflow"}
          grabCursor={windowWidth >= 1024 ? false : true}
          centeredSlides={true}
          initialSlide={windowWidth >= 1024 ? 1 : 0}
          slideToClickedSlide={true}
          slidesPerView={windowWidth >= 1024 ? 3 : 1}
          pagination={{ dynamicBullets: true }}
          className="w-full h-full text-white text-center rounded-lg"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          style={{
            "--swiper-pagination-color": "#FCFF6B",
            "--swiper-pagination-bullet-inactive-color": "#9999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "8px",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
          }}
        >
          {data.map((item) => (
            <SwiperSlide>
              <a href="" className="w-full h-full">
                <img
                  src={item.image}
                  alt="Carousel Slide"
                  className="h-60 sm:h-96 lg:h-full w-full relative rounded inline-block"
                />
                <div className="p-2 bg-shadow-bg w-1/3 absolute left-4 bottom-4 rounded-lg opacity-95">
                  <p className="text-lg text-ellipsis">{item.name}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
