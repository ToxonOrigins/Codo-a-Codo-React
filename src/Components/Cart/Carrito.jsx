import { useCart } from "../Context/CartContext"
import "./carrito.css"
import { Carritolist } from "./Cartlist"
import { Carttotal } from "./Carttotal.jsx"
function Carrito() {
    const { getTotalItems, Checkout,clearCart } = useCart()
    const total = getTotalItems()
    return <>
        <div id="container">
            {total > 0 && <><div>Item Precio cantidad Total </div><Carritolist/><div><Carttotal/><button onClick={() => Checkout()}>Terminar compra..</button> <button onClick={()=>clearCart()}>Vaciar carrito</button></div></>}
            {total == 0 && <div>No hay productos</div>}
        </div>
    </>
}
export default Carrito