import { useEffect, useState } from "react";
import { DeleteList } from "./DeleteList.jsx";
import { getProducts } from "../../../services/ProductsService.js";
import { Link } from "react-router-dom";
function DeleteListContainer() {
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
            <Link to="/admin/dashboard">Volver al dashboard.</Link>
            <div style={{display:"flex", justifyContent:"space-evenly"}}><DeleteList productos={productos}></DeleteList></div>
        </section>
    )
}
export default DeleteListContainer