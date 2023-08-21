/** @format */

import AnimesCarousel from "./components/AnimesCarousel";
import { Carousel } from "./components/Carousel";
import NavBar from "./components/NavBar";
import { register } from "swiper/element";

register();

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
      <AnimesCarousel title="Recomendados" />
      <AnimesCarousel title="Assistidos" />
    </>
  );
}

export default App;
