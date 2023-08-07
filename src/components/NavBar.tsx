/** @format */
import { Menu, HomeLogo, Search, Settings } from "../assets/SVGs";

function NavBar() {
  return (
    <>
      <header className="w-full fixed grid grid-cols-4 items-center place-items-center py-6 bg-primary rounded-b-lg">
        <div className="self-center col-span-1 md:justify-self-start md:ml-8 lg:hidden">
          <img src={Menu} alt="Hamburguer Menu" />
        </div>
        <a
          href="./"
          className="self-center col-span-2 lg:col-span-1 lg:justify-self-start lg:ml-8"
        >
          <img src={HomeLogo} alt="Kawai Baka Logo" />
        </a>
        <div className="self-center col-span-1 md:justify-self-end md:mr-8 lg:hidden">
          <img src={Search} alt="Search Icon" />
        </div>
        <div className="h-4/5 w-full hidden lg:flex lg:col-span-2 bg-secondary p-2 rounded-xl">
          <img className="" src={Search} alt="Search Icon" />
          <span className="w-1 mx-4 mr-6 bg-gray-600 rounded-2xl"></span>
          <input
            className="w-full focus:outline-contrast placeholder:focus:text-transparent bg-transparent transition text-lg text-white px-2 pr-8"
            placeholder="Ex: One Piece"
            type="text"
          />
        </div>
        <div className="hidden lg:block lg:col-span-1 lg:justify-self-end lg:mr-8">
          <img className="w-2/3 xl:w-4/5" src={Settings} alt="Settings Icon" />
        </div>
      </header>
    </>
  );
}

export default NavBar;
