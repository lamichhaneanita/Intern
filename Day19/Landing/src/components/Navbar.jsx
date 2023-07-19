import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white py-4 flex justify-around cursor-pointer shadow-md rounded-lg">
     
      <b className="py-4 mr-24">NDLE</b>
      
        <ul className="py-4 flex mr-10 ml-30 gap-10 ">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contactus">Contactus</NavLink>
          </li>
          <button className="h-200 ml-20 px-6 py-2  bg-white text-black rounded-lg">SignIn</button>
        </ul>
      </div>
    
  );
};

export default Navbar;
