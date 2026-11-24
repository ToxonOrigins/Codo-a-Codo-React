import { useEffect, useState } from "react";
import { ItemDetails } from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/ProductsService.js"

function ItemDetailContainer() {
    const { id } = useParams();
    const [ItemDetail, setItemDetail] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setItemDetail(null);
        setCargando(true);
        setError(null);


        getProductById(id)
            .then((data) => setItemDetail(data))
            .catch((error) => setError(error.message))
            .finally(() => setCargando(false));
    }, [id])

    if (cargando) { return (<>Cargando productos</>) }
    if (error) return <p>{error}</p>
    return (<section> <h1>Item</h1>
        <ItemDetails item={ItemDetail}></ItemDetails>
    </section>)
}
export default ItemDetailContainer