import Item from "../Item/Item.jsx"
import "./ItemDetail.css"
import { useCart } from "../Context/CartContext.jsx"
export const ItemDetails = (({ item }) => {
    const { addItem} = useCart()
    return (<>{<div style={{ alignContent: "center", marginLeft:"5%",marginRight:"5%"}} id="ItemDetail" >
        <Item {...item}>{item.children}
            <br></br>
            <button className="btn primary" onClick={() => addItem(item)}> Agregar al carrito.</button>
        </Item>
    </div>}</>)
})