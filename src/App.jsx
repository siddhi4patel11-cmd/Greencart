import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Allproducts from './component/Allproducts'
import Footer from './component/Footer'
import Productid from './component/Productid'
import { UserProvider } from './Context/UseContext'
import Addproduct from './component/Addproduct'
import { ToastContainer } from 'react-toastify'
import Log from './component/Log'



const App = () => {
  return (
    <div className='relative'>
      <UserProvider>
        <BrowserRouter>
        <Log/>
        <Navbar/>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path='/allproduct' element={<Allproducts/>}/>
            <Route path='/productid/:id/:category' element={<Productid/>}/>
            <Route path='/addproduct' element={<Addproduct/>}/>
          </Route>
        </Routes>
      <Footer/>
      <ToastContainer/>
      </BrowserRouter>
      </UserProvider>
      
      

    </div>
  )
}

export default App
