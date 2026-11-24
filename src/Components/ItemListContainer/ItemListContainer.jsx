import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import {getProducts} from "../../services/ProductsService.js"
function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getProducts()
            .then((datos) => setProductos(datos))
            .catch((error) => setError(error.message))
            .finally(() => setCargando(false))
    }, [])

    if (cargando) {return (<>Cargando productos</>)}
    if (error) return <p>{error}</p>
    return (
        <section>
            <h1> Productos</h1>
            <div style={{display:"flex", justifyContent:"space-evenly"}}><ItemList productos={productos}></ItemList></div>
        </section>
    )
}
export default ItemListContainer