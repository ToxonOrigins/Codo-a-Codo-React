import { useEffect, useState } from "react";
import { ProductsAll } from "./Productsall.jsx";
import { getProducts } from "../../services/ProductsService.js"
import { getByCategory } from "../../services/ProductsService.js";


function ProductsallContainer() {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const [category, setCategory] = useState(undefined)
    let [allcategorys, setAllcategorys] = useState([])
    useEffect(() => {
        if (category == undefined) {
            getProducts()
                .then((datos) => {
                    setProductos(datos);
                    for (let producto in datos) { if (!allcategorys.includes(datos[producto].category)) {allcategorys.push(datos[producto].category)} }
                })
                .catch((error) => setError(error.message))
                .finally(() => setCargando(false))
        } else {
            getByCategory(category)
                .then((datos) => setProductos(datos))
                .catch((error) => setError(error.message))
                .finally(() => setCargando(false))
        }
    }, [category, allcategorys])
    if (cargando) { return (<>Cargando productos</>) }
    if (error) return <p>{error}</p>
    return (
        <section>
            <div><h2>Categorias</h2><ul>{allcategorys.map((categorys) => (
                <span key={categorys}><input type="radio" value={categorys} name="category" onClick={() => setCategory(categorys)}  /> <label htmlFor={categorys}>{categorys}</label></span>
            ))}</ul><input type="radio" name="category" onClick={() => setCategory(undefined)} value="none" /> <label htmlFor="none">Ninguno</label> </div>
            <h1> Productos</h1>
            <div style={{display:"flex", justifyContent:"space-evenly"}}><ProductsAll productos={productos}></ProductsAll></div>
        </section>
    )
}
export default ProductsallContainer