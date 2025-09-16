import React, { useContext, useState } from 'react'
import { FaShippingFast } from "react-icons/fa"
import { GiThreeLeaves } from "react-icons/gi";
import { RiCoinsFill } from "react-icons/ri";
import { RiHeartsLine } from "react-icons/ri";
import list from '../assets/List'
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom'
// import { ToastContainer ,toast } from 'react-toastify';
import { Usercontext } from '../Context/UseContext';


const home = () => {

  const[get , setGet] = useState("All")

  const prodata = get === "all" ? list : list.filter((iteam)=>iteam.category === get)

   const {addcart} = useContext(Usercontext)

  // const addto =()=>{
  //     setData(data+1)
  //     toast.success("add sucessfully")
  //   }

  return (
    <>

    <div className='px-30 mt-6'>
      <div className='flex flex-col  py-5 bg-[url(https://greencart-frontend-rho.vercel.app/assets/main_banner_bg-BUDbdxCy.png)] bg-cover bg-center h-[500px]'>
          <div className=' px-20 mt-30 text-5xl text-green-900 font-bold leading-snug'>Freshes You Can <br /> Trust, Saving You <br />will Love!</div>
          <div className='mt-3 px-17'>
            <button className='px-2 rounded-lg bg-green-400 text-white text-2xl hover:bg-green-800 h-[40px]'>Shop Now</button>
          </div>
      </div>

    </div>
    
      <div className='px-33 ml-3 mt-10'>
        <div className='text-3xl'><p>Categories</p></div>
        <div className='grid grid-cols-7 mt-5 '>
          <div onClick={()=> setGet("vegetables")} className= 'bg-amber-100 w-[140px] py-5 px-3 rounded-2xl'><img src="https://greencart-frontend-rho.vercel.app/assets/organic_vegitable_image-B6WcGgPL.png" alt="" /><div className='text-center'><p>Organic veggies</p></div></div>
          <div onClick={()=> setGet("fruits")} className='bg-red-100  w-[140px] py-5 px-3 rounded-2xl'><img src="https://greencart-frontend-rho.vercel.app/assets/fresh_fruits_image-GVwDikkj.png" alt="" /><div className='text-center'><p>Fresh Fruits
            </p></div></div>

          <div onClick={()=> setGet("cold-drink")} className='bg-green-100  w-[140px] py-5 px-3 rounded-2xl'><img src="https://greencart-frontend-rho.vercel.app/assets/bottles_image-DMalNkiM.png" alt="" /><div className='text-center'><p>Cold Drinks
            </p></div></div>

          <div onClick={()=> setGet("instant food")} className='bg-yellow-100  w-[140px] py-5 px-3 rounded-2xl'><img src="https://greencart-frontend-rho.vercel.app/assets/maggi_image-DD7JXh5a.png" alt="" /><div className='text-center'><p>Instant Food
            </p></div></div>

          <div onClick={()=> setGet("dairy products")} className='bg-blue-100  w-[140px] py-5 px-3 rounded-2xl'><img src="https://greencart-frontend-rho.vercel.app/assets/dairy_product_image-B1gRG1MT.png" alt="" /><div className='text-center'><p>Dairy Products
            </p></div></div>

          <div onClick={()=> setGet("bakery")} className='bg-amber-100  w-[140px] py-5 px-3 rounded-2xl'><img src="https://greencart-frontend-rho.vercel.app/assets/bakery_image-e5rU_kNe.png" alt="" /><div className='text-center'><p>Bakery & Breads
            </p></div></div>

          <div onClick={()=> setGet("grains")} className='bg-green-100  w-[140px] py-5 px-3 rounded-2xl'><img src="https://greencart-frontend-rho.vercel.app/assets/grain_image-BkT7wje5.png" alt="" /><div className='text-center'><p>Grains & Cereals
            </p></div></div>

        </div>
      </div>

      <div className='px-33 mt-5'>
        <div className='text-3xl'><p>Best seller</p></div>

        <div className=' grid grid-cols-4 gap-3 mt-5'>
        {prodata.map((iteam)=>{
          return(
          
              <div className='border-1 border-[#4fbf8b] p-3 rounded-lg  '>
              <Link to={`/productid/${iteam.id}/${iteam.category}`}>
              <p><img src={iteam.img[0]} className='w-[400px] h-[300px]' alt="" /></p>
              </Link>
              
              <p className='text-[#4fbf8b] text-1xl'>{iteam.category}</p>
              <p className='text-[#4fbf8b] text-2xl'>Name: {iteam.name}</p>
              <p className='text-[#4fbf8b] text-1xl font-bold'>Price: {iteam.price}</p>
              <div className='flex mx-auto gap-13 mt-1'>
                    <button onClick={()=>addcart(iteam)} className='px-2 rounded-lg bg-[#4fbf8b] text-white text-1xl hover:bg-green-800 h-[40px] w-[100px]'> add to cart</button>
                    <p className='flex text-green-800 mt-3 text-2xl'><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p> 
                    
              </div>
            </div>
          
            
          )
        })}
      </div>

      </div>











      <div>

        <div className='mt-5 px-30'>
          <div className='flex flex-col py-5 bg-[url(https://greencart-frontend-rho.vercel.app/assets/bottom_banner_image-DdX_9fDq.png)] bg-cover bg-center h-[500px]   '>
            <div className='grid grid-cols-2'>
              <div className=''></div>
              <div className='ml-50 mt-30'>
                  <p className='text-3xl text-green-600 font-bold'>Why We Are the Best ?</p>
                    <div className='flex mx-auto gap-3 mt-2'>
                      <p className="bg-[#4fbf8b] text-white p-3 rounded-md text-2xl"><FaShippingFast /></p>
                      <p className='text-1xl'>Fastest Delivery<br/>Groceries delivered in under 30 minutes.</p>
                    </div>

                    <div className='flex mx-auto gap-3 mt-2'>
                      <p className="bg-[#4fbf8b] text-white p-3 rounded-md text-2xl"><GiThreeLeaves /></p>
                      <p className='text-1xl'>Freshness Guaranteed<br/>Fresh produce straight from the source.</p>
                    </div>

                    <div className='flex mx-auto gap-3 mt-2'>
                      <p className="bg-[#4fbf8b] text-white p-3 rounded-md text-2xl"><RiCoinsFill /></p>
                      <p className='text-1xl '>Affordable Prices<br/>Quality groceries at unbeatable prices.</p>
                    </div>

                    <div className='flex mx-auto gap-3 mt-2'>
                      <p className="bg-[#4fbf8b] text-white p-3 rounded-md text-2xl"><RiHeartsLine /></p>
                      <p className='text-1xl'>Trusted by Thousands<br/>Loved by 10,000+ happy customers.</p>
                    </div>
              </div>
            </div>
          
          </div>
          </div>

        <div className='x-40  justify-center items-center px-8 py-4 mt-14'>
          <p className='text-4xl text-gray-700 font-bold text-center'>Never Miss a Deal!</p>
          <p className='text-1xl mt-2 text-gray-600 text-center'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>

          <div class="flex justify-center mt-4">
            <div class="flex w-[700px] border border-gray-300 rounded-lg overflow-hidden">
              <input type="email" placeholder="Enter your email id" 
                    class="flex-1 px-4 py-2 outline-none text-gray-700"/>
              <button class="bg-green-500 text-white px-6 py-2 hover:bg-green-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        







      </div>
    </>
  )
}

export default home
