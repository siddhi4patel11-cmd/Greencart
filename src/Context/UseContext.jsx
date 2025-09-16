import {createContext, useState } from "react";
import { toast } from "react-toastify";

export const Usercontext = createContext()

export const UserProvider = ({children}) =>{

const [data , setData] = useState(0)
const [open, setOpen] = useState(false)

const [cart , setCart] = useState([])

const addcart = (iteams)=> {
    setCart((prev)=>{

        const exitingcart = prev.find((p)=> p.id === iteams.id)

        if(exitingcart){
          return prev.map((e)=> e.id === iteams.id ? {...e , quantity: e.quantity +1}: e)  
        }else{
            return [...prev ,{...iteams, quantity : 1}];
        }
    })
    toast.success("successfully")


    setCart((prev)=>{
        const exitingcart = prev.find((p)=> p.id === iteams.id)

        if(exitingcart){
            return prev.map((e)=> e.id === iteams.id ? {...e , quantity: e.quantity+1}: e)
        }else{
            return [...prev , {...iteams , quantity :1}]

        }

    })

}


const decraseCart = (id) =>{
    setCart((prev)=> 
        prev.map((e)=> e.id === id ? {...e , quantity: e.quantity-1}: e)
    )
}


const removecart = (i)=>{
    console.log(i);

    const data = [...cart]

    data.splice(i,1)

    setCart(data)
}




const [login , setLogin] = useState({
    email : "",
    password :""

});

const logChange = (e) =>{
    setLogin({
        ...login,
        [e.target.name] : e.target.value,

    });
     
};


const logsubmit = (e) => {
    e.preventDefault();
    console.log(e)
    console.log("you are login",login);

    setLogin({
        email: "",
        password: ""
    })
}

    return(
        <Usercontext.Provider value={{removecart, decraseCart, data , setData, open, setOpen, cart,addcart,login ,logsubmit,logChange}}>
            {children}
        </Usercontext.Provider>
    )
}



