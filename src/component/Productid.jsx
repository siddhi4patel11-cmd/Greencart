import React, { useContext, useState } from 'react'
import { CiStar } from "react-icons/ci";
import list from '../assets/List';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Usercontext } from '../Context/UseContext';
// import { toast, ToastContainer } from 'react-toastify';


const Productid = () => {
  const [first , setfitst] = useState(0)

  const {id , category} = useParams();

  const iteam = list.find((data)=>data.id === parseInt(id))
  console.log(iteam.img);

  const vegetables = list.filter((CDdata)=>CDdata.category === category)
  console.log(vegetables);
    
  // const {data , setData} = useContext(Usercontext)

  // const addto =()=>{
  //   setData(data+1)
  //   toast.success("add sucessfully")
  // }
  
  return (
    <>
      <div className='grid grid-cols-2 mt-25 px-30 '>
        <div className='flex gap-4'>
          <div className=''>
            {iteam.img.map((pro, i)=>{
              return(
                <div className='border border-amber-400 w-20 mt-5 ' onClick={()=> setfitst(i)}>
                  <img src={pro} alt="" className='W-[60PX]'/>
                </div>
              )
            })}
          </div>
          <div className='border border-amber-400 ' >
                  <img src={iteam.img[first]} alt="" className='w-[500px] h-[450px]'/>
              </div>
        </div>
        <div className='ml-20 mt-13'>
            <p className='text-black text-4xl font-bold mt-4'>{iteam.name} </p>
            <p className='flex text-green-800 mt-3 text-2xl'><CiStar /><CiStar /><CiStar /><CiStar /><CiStar /></p>
            <p className='text-black text-2xl mt-8'>Price :{iteam.price}</p>
            
            <p className='text-black text-2xl mt-5'>(inclusive of all taxes)</p>
             <p className='text-black text-1xl mt-1 '>Secure Payments</p>
            <div className='grid grid-cols-2 mt-12 gap-2 '>
              <button  className='px-2 rounded-lg bg-gray-300 text-black text-1xl hover:bg-gray-50-800 h-[40px]'>Add to cart</button>
              <button className='px-2 rounded-lg bg-[#4fbf8b] text-black text-1xl hover:bg-green-200 h-[40px]'>Shop Now</button>
              {/* <ToastContainer/> */}
            </div>
            
        </div>
      </div>

      <div className=''>
        <p className=' text-black ml-18 text-2xl text-center  mt-10'>RELATED PRODUCTS</p> 
      </div>
      
      <div className=' grid grid-cols-4 gap-3 mt-8 px-30'>
        
           {vegetables.map((iteam)=>{
          return(
            <Link to={`/productid/${iteam.id}/${iteam.category}`}>
                <div className='border-1 border-[#4fbf8b]  rounded-lg  '>
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
    </>
  )
}

export default Productid
