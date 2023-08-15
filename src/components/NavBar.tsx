/** @format */
import { useState } from "react";
import {
  Menu,
  HomeLogo,
  Search,
  Settings,
  Close_X,
  Eye,
  Favorites,
  Bug,
  Account,
} from "../assets/SVGs";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);
  const searchHandleClick = () => setIsSearchActive(!isSearchActive);

  const rotate = !isActive ? "rotate(180deg)" : "rotate(0deg)";

  return (
    <>
      <header className="w-full block">
        <div
          className={
            isSearchActive
              ? "relative w-full grid grid-cols-4 items-center place-items-center lg:hidden"
              : "w-full grid grid-cols-4 items-center place-items-center bg-primary rounded-b-lg py-6 lg:hidden"
          }
        >
          <div
            className={
              isActive
                ? "flex flex-col items-center justify-between text-white-80 pt-28 absolute left-0 top-0 bottom-0 h-screen bg-secondary z-10 w-4/5 md:w-3/4 lg:hidden"
                : "hidden"
            }
          >
            <div className="flex flex-col w-full items-center justify-center">
              <a
                className="flex gap-2 text-2xl border-t border-b border-line w-full justify-start items-center py-2 pl-14"
                href=""
              >
                <img src={Eye} alt="Completed animes" />
                Completados
              </a>
              <a
                className="flex gap-2 text-2xl border-t border-b border-line w-full justify-start items-center py-2 pl-14"
                href=""
              >
                <img src={Favorites} alt="Favorites animes" />
                Favoritos
              </a>
            </div>
            <div className="flex flex-col w-full">
              <a
                className="flex gap-2 text-2xl border-t border-b border-line w-full justify-start items-center py-2 pl-14"
                href=""
              >
                <img src={Bug} alt="Report a Bug" />
                Reportar Bug
              </a>
              <a
                className="flex gap-2 text-2xl border-t border-b border-line w-full justify-start items-center py-2 pl-14"
                href=""
              >
                <img src={Account} alt="Account Configs" />
                Conta
              </a>
            </div>
          </div>
          <div
            onClick={() => setIsActive(false)}
            className={
              isActive
                ? "bg-shadow-bg absolute right-0 top-0 bottom-0 h-full w-1/5 md:w-1/4 lg:hidden"
                : "hidden"
            }
          ></div>
          <div className="self-center z-10 col-span-1 md:justify-self-start md:ml-8 lg:hidden">
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
                ? "w-full h-screen z-10 col-span-4 flex flex-col justify-between items-end p-8 bg-secondary md:justify-between md:px-8 lg:hidden"
                : "self-center col-span-1 md:justify-self-end md:mr-8 lg:hidden overflow-hidden"
            }
          >
            <img
              onClick={() => {
                searchHandleClick();
              }}
              className="w-11"
              src={isSearchActive ? Close_X : Search}
              alt="Search Icon"
            />
            <div
              className={
                isSearchActive
                  ? "w-full h-auto m-auto text-white flex flex-wrap gap-10 sm:justify-center"
                  : "hidden"
              }
            >
              <h1 className="text-3xl">Gêneros</h1>
              <div className="w-full h-auto m-auto text-white flex flex-wrap items-center justify-center gap-4">
                <a
                  href=""
                  className="bg-primary p-3 px-6 rounded-2xl text-center"
                >
                  Shounen
                </a>
                <a
                  href=""
                  className="bg-primary p-3 px-6 rounded-2xl text-center"
                >
                  Seinen
                </a>
                <a
                  href=""
                  className="bg-primary p-3 px-6 rounded-2xl text-center"
                >
                  Terror
                </a>
                <a
                  href=""
                  className="bg-primary p-3 px-6 rounded-2xl text-center"
                >
                  Aventura
                </a>
                <a
                  href=""
                  className="bg-primary p-3 px-6 rounded-2xl text-center"
                >
                  Magia
                </a>
                <a
                  href=""
                  className="bg-primary p-3 px-6 rounded-2xl text-center"
                >
                  Romance
                </a>
              </div>
            </div>
            <button
              className={
                isSearchActive
                  ? "bg-contrast p-4 px-16 rounded-3xl mx-auto text-white text-xl"
                  : "hidden"
              }
            >
              Pesquisar
            </button>
          </div>
        </div>
        <div className="hidden w-full lg:grid grid-cols-4 items-center place-items-center bg-primary rounded-b-lg lg:py-6">
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
          <div className="hidden lg:flex lg:items-center lg:col-span-1 lg:justify-self-end lg:mr-8 z-10">
            <img
              onClick={() => {
                handleClick();
              }}
              className={
                isActive === true
                  ? "opacity-50 w-14 mr-1.5 z-10"
                  : "opacity-100 w-14 mr-1.5 z-10"
              }
              style={{
                transform: rotate,
                transition: "all 350ms ease-in-out",
              }}
              src={isActive === true ? Close_X : Settings}
              alt="Settings Icon"
            />
            <div
              className={
                isActive
                  ? "absolute flex justify-end right-0 top-0 bottom-0 h-2/5 sm-h:h-1/3 bg-secondary w-3/12 z-0"
                  : "hidden"
              }
            >
              <div className="flex flex-col w-full items-center justify-center self-end">
                <a
                  className="flex gap-2 text-2xl border-t border-b border-line w-full justify-start items-center py-2 pl-8"
                  href=""
                >
                  <img src={Eye} alt="Completed animes" />
                  Completados
                </a>
                <a
                  className="flex gap-2 text-2xl border-t border-b border-line w-full justify-start items-center py-2 pl-8"
                  href=""
                >
                  <img src={Favorites} alt="Favorites animes" />
                  Favoritos
                </a>
                <a
                  className="flex gap-2 text-2xl border-t border-b border-line w-full justify-start items-center py-2 pl-8"
                  href=""
                >
                  <img src={Bug} alt="Report a Bug" />
                  Reportar Bug
                </a>
                <a
                  className="flex gap-2 text-2xl border-t border-b border-line w-full justify-start items-center py-2 pl-8"
                  href=""
                >
                  <img src={Account} alt="Account Configs" />
                  Conta
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
