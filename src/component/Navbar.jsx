import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { Usercontext } from '../Context/UseContext';




const Navbar = () => {

 const {cart , open,setOpen} = useContext(Usercontext)

  return (
    <div className=''>
      
      <div className=" flex justify-between  px-30 items-center  ">
           <div className="text-2xl font-bold ">
                Green<span className="text-green-500 italic">Cart</span>
            </div>
      <nav className="  flex items-center  space-x-9  uppercase  text-1xl font-bold">
        
        <NavLink to ="/" className=" text-green-500  text-home hover:underline">Home</NavLink>
        <NavLink to ="/allproduct" className="text-green-500 hover:underline">All Products</NavLink>
        <NavLink to ="/addproduct" className="flex "><FaCartShopping  className='text-xl'/><span className=' text-black text-2xl '>{cart.length}</span></NavLink>
        <button className='bg-green-500 text-white text-[18px] font-medium px-5 py-2 rounded-full hover:bg-green-600 transition' onClick={()=>setOpen(!open)}>login</button>
        
      </nav>

    </div>
    <hr className='mt-4 text-green-500' />
    
    </div>
  )
}

export default Navbar
