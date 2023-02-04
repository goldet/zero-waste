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
    <div ref={ref} className="navbar bg-green-500 text-primary-content flex justify-between shadow-xl"> {/* navbarContainer relative flex justify-between */}
      <h1 className="normal-case text-2xl">Zero Waste</h1>

      <div className="grid">
      <button className="btn btn-ghost normal-case text-xl" onClick={handleMenuClick}>Menu</button>
      {mainMenu && <div className=""><MobileMenu /></div>}
      </div>
      </div>
    </>
  );
};

export default Navbar;


