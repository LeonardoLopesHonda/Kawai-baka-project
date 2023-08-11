/** @format */

import { Carousel } from "./components/Carousel";
import NavBar from "./components/NavBar";
import { register } from "swiper/element";

register();

function App() {
  return (
    <>
      <NavBar />
      <Carousel />
    </>
  );
}

export default App;
