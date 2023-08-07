/** @format */
import { Menu, HomeLogo, Search } from "../assets/SVGs";

function NavBar() {
  return (
    <>
      <header className="w-full grid grid-cols-4 items-center place-items-center pt-6">
        <div className="self-center col-span-1 md:justify-self-start md:ml-8">
          <img src={Menu} alt="Hamburguer Menu" />
        </div>
        <div className="self-center col-span-2">
          <img src={HomeLogo} alt="Kawai Baka Logo" />
        </div>
        <div className="self-center col-span-1 md:justify-self-end md:mr-8">
          <img src={Search} alt="Search Icon" />
        </div>
      </header>
    </>
  );
}

export default NavBar;
