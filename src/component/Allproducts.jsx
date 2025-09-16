import React from 'react'
import list from '../assets/List'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';



const Allproducts = () => {
  return (
    <>
      <div className='px-20'>

      <div className='flex justify-center text-2xl font-bold mt-8'>
          <p className='text-[#4fbf8b]'>ALL PRODUCTS ....</p> 

      </div> <hr className='mt-4 text-green-500' />

      <div className=' grid grid-cols-4 gap-3 mt-5'>
        {list.map((iteam)=>{
          return(
            <Link to={`/productid/${iteam.id}/${iteam.category}`}>
                <div className='border-1 border-[#4fbf8b] p-3 rounded-lg  '>
              <p><img src={iteam.img[0]} className='w-[400px] h-[300px]' alt="" /></p>
              <p className='text-[#4fbf8b] text-1xl'>{iteam.category}</p>
              <p className='text-[#4fbf8b] text-2xl'>Name: {iteam.name}</p>
              <p className='text-[#4fbf8b] text-1xl font-bold'>Price: {iteam.price}</p>
              <div className='flex mx-auto gap-13 mt-1'>
                    <button className='px-2 rounded-lg bg-[#4fbf8b] text-white text-1xl hover:bg-green-800 h-[40px] w-[100px]'>Add to cart</button>
                    <p className='flex text-green-800 mt-3 text-2xl'><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>     
              </div>
              
            </div>
            </Link>
           
          )
        })}
      </div>


    </div>

    </>
  )
}

export default Allproducts
