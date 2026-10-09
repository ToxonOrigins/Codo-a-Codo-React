import { Link } from "react-router-dom";
import Item from "../Item/Item.jsx";
import  "./ItemList.css"
export const ItemList=(({productos})=>{
    if (!productos.length){
        return <p> No hay productos</p>
    }
        return (
            <>
                {productos.map((producto) => (
                    <span key={producto.id} className="items"><Link to={`/producto/${producto.id}`}><Item {...producto} ></Item></Link></span>
                ))}</>
        )
})