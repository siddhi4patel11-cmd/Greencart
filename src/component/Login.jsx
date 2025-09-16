import React, { useContext } from 'react'
import { Usercontext } from '../Context/UseContext'

const Login = () => {

    const{open ,setOpen ,logsubmit,logChange ,login } = useContext(Usercontext);

  return (
    <div>
          {open === true ?(
            
                <div className='flex bg-black/50 justify-center items-center fixed w-full h-full  font-semibold'>
                  <form  onSubmit={logsubmit}>
                    <div className='bg-white z-50 relative px-10 py-10 shadow-lg rounded-xl p-8'>
                      <div className='text-bold cursor-pointer absolute right-3 top-2 font-bold text-1xl'onClick={()=> setOpen(false)}>X</div>
                      <div className='text-center text-2xl font-bold text-[#4FBF8B]'>User Login</div>

                      <div className='text-1xl text-black'>Email:</div>
                      <input type="text" onChange={logChange} value={login.email} name="email" placeholder="type here" className='w-70 h-10 border rounded focus:border-2 focus:border-[#4FBF8B] focus:outline-none'/>
                    
                    <div className='text-1xl mt-3 text-black'>Password:</div>
                      <input type="text" onChange={logChange} value={login.password} name='password' className='w-70 border h-10 focus:border-2 rounded focus:border-[#4FBF8B] focus:outline-none'/>
                    
                    <p className="text-sm text-gray-600 mt-8">
                      Create an account?{" "}
                      <a href="#" className="text-green-500 hover:underline">
                        click here
                      </a>
                    </p>

                    </div>
                    <button type="submit" className="w-full mt-2 bg-green-500 text-white font-medium py-2 rounded-lg hover:bg-green-600 transition"> Login </button>
                  </form>
                </div>
            ):""}
      
    </div>
  )
}

export default Login
