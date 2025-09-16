import React, { useContext } from 'react'
import { Usercontext } from '../Context/UseContext'


const Addproduct = () => {

const {cart, decraseCart, removecart} = useContext(Usercontext)
  return (
    <>
      <div> 

         <div className='flex px-30 mt-12'>
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
                <span className="text-green-500 text-sm">1 Items</span>
              </div>
        {cart.lenght === 0?(
          <div>
            no iteam here 
          </div>
        ) : (
          cart.map((iteam,i)=>{
           return(
             <>

             <div className=' px-40 mt-10'>
             
              

            <div className='grid grid-cols-8 mt-10'>
              <div className=''>
              <p className="text-slate-600">Product Details</p><br />
              <p className='w-[120px] border border-gray-500 rounded-xl '><img src={iteam.img[0]} alt="" /></p>

              </div>
              
              <div className='mt-9 ml-10 col-span-2'>
                <p className='text-2xl font-bold text-gray-400'>{iteam.name}</p> 
                <p className="text-sm text-slate-500 mt-1">Weight: N/A</p>
                <p className="text-sm text-slate-500">Qty{iteam.quantity}</p>

                {iteam.quantity === 1 ? (
                    <button onClick={()=> removecart(i)}>delete</button>
                  ):(
                    <button onClick={()=> decraseCart(iteam.id)}>delete</button>
                  )
                }
                
              </div>
              <div className=" ">
                <p className="text-slate-600">Subtotal</p>
                <p className="font-semibold mt-5">{iteam.price}</p>
              </div>
            </div>

            
              
             
             </div>
              
             
             </>
           )
          })
        )
        }
      </div>
    </>
  )
}

export default Addproduct
