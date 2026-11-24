import { Link } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext"
export const Dashboard = () => {
    const { logout } = useAuth()
    return <><div>
        <header><h2>Panel de administración</h2>
            <Link to="/" style={{marginRight:"30px",color:"black",textDecoration:"none"}}>Volver a la página principal</Link>  <button onClick={logout}>Cerrar Sesión</button></header>
        <section>
            <h3>Acciones</h3>
            <div>
                <Link to="/admin/products/new"><button>➕ Crear Producto</button></Link>
                ✏️<Link to="/admin/delete" style={{color:"black",textDecoration:"none"}}>  Modificar o Eliminar productos</Link>
            </div>
        </section>
    </div></>
}