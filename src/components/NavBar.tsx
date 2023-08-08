/** @format */
import { useState } from "react";
import { Menu, HomeLogo, Search, Settings, Close_X } from "../assets/SVGs";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  const rotate = !isActive ? "rotate(180deg)" : "rotate(0deg)";

  return (
    <>
      <header className="w-full fixed">
        <div
          className={
            isSearchActive
              ? "w-full grid grid-cols-4 items-center place-items-center lg:hidden"
              : "w-full grid grid-cols-4 items-center place-items-center bg-primary rounded-b-lg py-6 lg:hidden"
          }
        >
          <div className="self-center col-span-1 md:justify-self-start md:ml-8 lg:hidden">
            <img
              onClick={() => {
                handleClick();
              }}
              className={
                isSearchActive
                  ? "hidden"
                  : isActive === true
                  ? "opacity-50 w-14 mr-1.5"
                  : "opacity-100 w-14 mr-1.5"
              }
              style={{
                transform: rotate,
                transition: "all 300ms ease-out",
              }}
              src={isActive === true ? Close_X : Menu}
              alt="Hamburguer Menu"
            />
          </div>
          <a
            href="./"
            className={
              isSearchActive ? "hidden" : "self-center col-span-2 lg:hidden"
            }
          >
            <img src={HomeLogo} alt="Kawai Baka Logo" />
          </a>
          <div
            className={
              isSearchActive
                ? "w-full col-span-4 flex justify-around items-center px-2 py-8 bg-secondary rounded-b-xl md:justify-between md:px-8 lg:hidden"
                : "self-center col-span-1 md:justify-self-end md:mr-8 lg:hidden"
            }
          >
            <img
              onClick={() => {
                setIsSearchActive(true);
              }}
              className="w-11"
              src={Search}
              alt="Search Icon"
            />
            <input
              className={
                isSearchActive
                  ? "w-1/2 focus:outline-none placeholder:focus:text-transparent bg-transparent text-lg text-white border-b-2 border-gray-600 md:w-3/5"
                  : "hidden"
              }
              placeholder="Ex: One Piece"
              type="text"
            />
            <img
              onClick={() => {
                setIsSearchActive(false);
              }}
              className={isSearchActive ? "w-11" : "hidden"}
              src={Close_X}
              alt="Close"
            />
          </div>
        </div>
        <div className="hidden w-full fixed lg:grid grid-cols-4 items-center place-items-center bg-primary rounded-b-lg lg:py-6">
          <a
            href="./"
            className="hidden self-center col-span-2 lg:block lg:col-span-1 lg:justify-self-start lg:ml-8"
          >
            <img src={HomeLogo} alt="Kawai Baka Logo" />
          </a>
          <div className="hidden h-4/5 lg:w-full xl:w-4/5 lg:flex lg:col-span-2 bg-secondary p-2 rounded-xl">
            <img className="" src={Search} alt="Search Icon" />
            <span className="w-1 mx-4 mr-6 bg-gray-600 rounded-2xl"></span>
            <input
              className="w-full focus:outline-none placeholder:focus:text-transparent bg-transparent text-lg text-white px-2 pr-8"
              placeholder="Ex: One Piece"
              type="text"
            />
          </div>
          <div className="hidden lg:flex lg:items-center lg:col-span-1 lg:justify-self-end lg:mr-8">
            <img
              onClick={() => {
                handleClick();
              }}
              className={
                isActive === true
                  ? "opacity-50 w-14 mr-1.5"
                  : "opacity-100 w-14 mr-1.5"
              }
              style={{
                transform: rotate,
                transition: "all 350ms ease-in-out",
              }}
              src={isActive === true ? Close_X : Settings}
              alt="Settings Icon"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
