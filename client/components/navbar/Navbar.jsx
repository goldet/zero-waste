import MobileMenu from "./MobileMenu";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
   
    <div ref={ref} className="navbar text-primary-content flex justify-between shadow-xl"> {/* navbarContainer relative flex justify-between */}
      <h1 className="normal-case text-2xl">Zero Waste</h1>
     {/*  <Link to="/">
          <img className="logo" href="https://images.unsplash.com/photo-1617080090911-91409e3496ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80" alt="ZeroWaste Logo" />
        </Link> */}

      <div className="grid">
      <button className="btn btn-ghost normal-case text-xl" onClick={handleMenuClick}>Menu</button>
      {mainMenu && <div className=""><MobileMenu /></div>}
      </div>
      </div>
     
    </>
  );
};

export default Navbar;


