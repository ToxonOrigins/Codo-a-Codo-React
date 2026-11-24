import Item from "../../Item/Item"
import "./DeleteList.css"
import { deleteProduct } from "../../../services/ProductsService"
import { Link } from "react-router-dom"
 function asegurareliminado(id){
    let asegurar=prompt("Seguro que quiere eliminar el producto. (S/N)")
    if( asegurar== `s` || asegurar==`S`){deleteProduct(id)}
 }
export const DeleteList = (({ productos }) => {
    if (!productos.length) {
        return <p> No hay productos</p>
    }
    return (
        <>
            {productos.map((producto) => {
                delete producto.children;
                return <span key={producto.id} className="items">
                    <Item {...producto} /> 
                    <button style={{marginRight:"2px",padding:"0px"}}><Link to={`/admin/products/new/${producto.id}`} style={{padding:"1px 4px "}}>Cambiar</Link></button>
                    <button onClick={() => asegurareliminado(producto.id)}>Eliminar</button>
                    </span>
            })}
        </>
    )
})