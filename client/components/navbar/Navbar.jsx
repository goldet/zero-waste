import MobileMenu from "./MobileMenu";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
const [mainMenu, setMainMenu] = useState(false)
const ref = useRef();

useEffect(() => {
  function handleClickOutside(event) {
   if (!ref.current?.contains(event.target)) {

    setMainMenu(false) //!mainmenu
   }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

}, [ref, mainMenu]);

const handleMenuClick = () => {
  if (!mainMenu) {
    setMainMenu(true);
    
  } else if (mainMenu) {
    setMainMenu(false);
}
};

  return (
    <>
    <header ref={ref} className="header"> {/* "navbar bg-green-500 text-primary-content flex justify-between shadow-xl*/}
     <div className="container header-container">
      <h1>Zero Waste</h1>  {/* className="normal-case text-2xl */}

      <div className="flex-end">
      <button className="btn btn-ghost normal-case text-xl" onClick={handleMenuClick}>Menu</button>
      {mainMenu && <div className=""><MobileMenu /></div>}
      </div>
      </div>
      </header>
    </>
  );
};

export default Navbar;


