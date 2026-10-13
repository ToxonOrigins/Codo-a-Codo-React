import {createContext,useContext, useState } from "react"
import {useNavigate} from "react-router-dom"
const CartContext=createContext();


export const useCart = ()=>{
    const contexto= useContext(CartContext);
    
    if(!contexto){
        throw new Error ("useCart debes eser usado dentro de su Provider")
    }
    return contexto
};
export const CartProvider=({children})=>{
    const navigate= useNavigate()
    const [cart,setCart]=useState([])

    const isInCart= (item)=>{
        const inCart=cart.some((element)=>element.id===item.id)
        return inCart
    }
    const addItem=(item)=>{
        if (isInCart(item)){
            alert("El producto ya se encuentra en el carrito")
            return;
        }
        setCart([...cart,item])
        alert("Producto agregado con éxito.")
    }
    const removeitem=(id)=>{
        const updatedCart=cart.filter((element)=>element.id !=id)
        setCart(updatedCart)
        alert("Producto eliminado")
    }
    return <CartContext.Provider value={{}}>
        {children}
    </CartContext.Provider>
}