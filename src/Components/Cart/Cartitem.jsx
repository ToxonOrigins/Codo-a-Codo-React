import Item from "../Item/Item"
import {useCart} from "../Context/CartContext.jsx"
export const Cartitem=({item})=>{
    const {removeitem,mencantidad,mascantidad}= useCart()
    return <><Item {...item}> <span  style={{marginRight:"10px"}}>{item.quantity} ${item.precio*item.quantity}</span>
    <button className="btn primary" onClick={() => mencantidad(item)}>- </button>
    <button className="btn primary" onClick={() => mascantidad(item)}>+ </button>
    <button onClick={()=>removeitem(item.id)}style={{marginRight:"10px"}}> Eliminar producto</button></Item> </>
}