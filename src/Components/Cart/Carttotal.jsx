import { useCart } from "../Context/CartContext"

export const Carttotal=()=>{
    const {getTotalItems,getTotalPagar}=useCart()
    const total=getTotalPagar()
    const totalitems=getTotalItems()
    return <> <div>Items totales: {totalitems} Total a pagar: {total }</div></>
}