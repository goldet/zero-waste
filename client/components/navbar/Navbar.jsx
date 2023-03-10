import MobileMenu from "./MobileMenu";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import zwl from "../../public/zwl.jpg"
import Image from "next/image";

const Navbar = () => {
const [mainMenu, setMainMenu] = useState(false)
const ref = useRef();

useEffect(() => {
  function handleClickOutside(event) {
   if (!ref.current?.contains(event.target)) {

    setMainMenu(false) 
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
    <Link href="/">
          <Image 
          className="logo h-14" 
           src={zwl}
           alt="Zero Waste Logo"
           width="150"
           height="auto"/>
{/*           
 */}        </Link>
     
     
      <div className="grid">
      <button className="btn btn-ghost normal-case text-xl" onClick={handleMenuClick}>Menu</button>
      {mainMenu && <div><MobileMenu setMainMenu={setMainMenu}/></div>}
      </div>
      </div>
     
    </>
  );
};

export default Navbar;


