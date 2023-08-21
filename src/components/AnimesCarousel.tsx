/** @format */
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import { Overlord, OnePiece, Bleach } from "../assets/imgs/IMGs";

import "swiper/css";

interface Props {
  title: string;
}

const AnimesCarousel = ({ title }: Props) => {
  const data = [
    { id: 1, name: "Bleach", image: Bleach },
    { id: 2, name: "Overlord", image: Overlord },
    { id: 3, name: "One Piece", image: OnePiece },
    { id: 4, name: "Bleach", image: Bleach },
    { id: 5, name: "Overlord", image: Overlord },
    { id: 6, name: "One Piece", image: OnePiece },
    { id: 7, name: "Bleach", image: Bleach },
    { id: 8, name: "Overlord", image: Overlord },
    { id: 9, name: "One Piece", image: OnePiece },
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
      <section className="h-1/3 w-full flex flex-col items-start justify-center">
        <h1 className="ml-6 text-white text-3xl ">{title}</h1>
        <div className="h-3/4 w-full flex items-start justify-center px-4">
          <Swiper
            slidesPerView={windowWidth >= 1024 ? 7 : windowWidth >= 425 ? 4 : 3}
            initialSlide={windowWidth >= 1024 ? 3 : 1}
            centeredSlides={true}
            spaceBetween={30}
            grabCursor={true}
            className="w-full h-full text-white text-center rounded"
          >
            {data.map((item) => (
              <SwiperSlide className="min-h-full">
                <a
                  href=""
                  className="flex flex-col items-center justify-center gap-2 h-full"
                >
                  <img
                    src={item.image}
                    alt="Anime Carousel Slide"
                    className="h-3/5 w-full relative rounded inline-block object-cover"
                  />
                  <p className="text-lg text-white text-ellipsis">
                    {item.name}
                  </p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default AnimesCarousel;
