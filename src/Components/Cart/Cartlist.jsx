import {useCart} from "../Context/CartContext"
import "./Cartlist.css"
import { Cartitem } from "../Cart/Cartitem.jsx"
export const Carritolist=()=>{
    const {cart}= useCart()
    return <><ul > {cart.map((item)=>(<span  key={item.id} className="itemscart"><Cartitem item={item} /> </span>))} </ul>  </>
}
