import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    
     
  return (
   <>
    < div className='flex bg-orange-300  py-10'>
      <div className='mx-10 font-bold text-4xl text-red-500'>HappyShopping
      </div>  
      <div className='flex-1'>
        <ul className="md:flex md:items-center gap-x-6 font-bold text-2xl text-white">
        <li >
        <NavLink to="/Home" >
               
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/MyCart" >
                MyCart
              </NavLink>
            </li>
            <li >
              <NavLink to="/Product" >
                {" "}
               Product
              </NavLink>
            </li>
            
           

        </ul>
        </div>
        </div> 
    </>
  )
}

export default Navbar
