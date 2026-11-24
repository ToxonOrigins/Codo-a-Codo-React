import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const CartContext = createContext();


export const useCart = () => {
    const contexto = useContext(CartContext);
    if (!contexto) {
        throw new Error("useCart debes eser usado dentro de su Provider")
    }
    return contexto
};

export const CartProvider = ({ children }) => {
    const navigate = useNavigate()
    const [cart, setCart] = useState([])

    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id)
        return inCart
    }
    const addItem = (item) => {
        if (isInCart(item)) {
            mascantidad(item)
        }else{item.quantity=1;setCart([...cart, item]) }
        alert("Producto agregado con éxito.")
        navigate("/")
        }
    const removeitem = (id) => {
        const updatedCart = cart.filter((element) => element.id != id)
        setCart(updatedCart)
        alert("Producto eliminado")
    }
    const clearCart = () => {
        setCart([])
    }
    const getTotalItems = () => {
        return  cart.reduce((acc, element) => acc + (element.quantity), 0)
    }
    const getTotalPagar = () => {
        return cart.reduce((acc, element) => acc + (element.precio * element.quantity), 0)
    }
    const Checkout = () => {
        alert("Compra realizada")
        clearCart()
        navigate("/")
    }
    const mencantidad =(item)=>{
            let element=cart.find((element) => element.id === item.id)
            if(element.quantity!=1){element.quantity-=1}else{ return alert("No se puede remover más")}
            setCart([...cart])
    }
    const mascantidad =(item)=>{
            let element=cart.find((element) => element.id === item.id)
            element.quantity+=1
            setCart([...cart])
    }
    const values = {
        cart, addItem,getTotalItems, getTotalPagar, removeitem, clearCart,  Checkout,mencantidad,mascantidad
    }
    return <CartContext.Provider value={values}>
        {children}
    </CartContext.Provider>
}