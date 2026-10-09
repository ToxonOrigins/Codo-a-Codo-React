import { useEffect, useState } from "react";
import { ItemDetails } from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const { id } = useParams();
    const [ItemDetail, setItemDetail] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setItemDetail(null);
        setCargando(true);
        setError(null);

        fetch("/data/item.json").then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("No se pudo cargar los datos")
            }
            return respuesta.json();
        })
            .then((datos) => {
                const item = datos.find((producto) => String(producto.id) === id);
                if (item) {
                    setItemDetail(item)
                    return;
                }
                throw new Error("Elemento no encontrado")
            })
            .catch((error) => setError(error.message))
            .finally(() => (setCargando(false)))
    }, [id])

    if (cargando) { return (<>Cargando productos</>) }
    if (error) return <p>{error}</p>
    return (<section> <h1>Item</h1>
        <ItemDetails item={ItemDetail}></ItemDetails>
    </section>)
}
export default ItemDetailContainer