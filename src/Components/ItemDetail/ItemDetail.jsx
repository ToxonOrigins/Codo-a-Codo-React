import Item from "../Item/Item.jsx"
import "./ItemDetail.css"
import Favorito from "../Item/Favorito.jsx"
export const ItemDetails = (({ item }) => {
    return (<>{<div style={{ alignContent:"center",}} id="ItemDetail" ><Item {...item}><Favorito></Favorito></Item></div>}</>)
})