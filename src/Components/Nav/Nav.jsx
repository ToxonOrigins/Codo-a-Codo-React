import "./nav.css"
import { Link } from "react-router-dom"
export const Nav = () => {
    return <nav>
        <Link to={"/"} className="nav">Inicio</Link>
        <Link to={"/productos"}className="nav"> Productos</Link>
        <Link to={"/carrito"}className="nav"> Carrito </Link>
        <Link to={"/admin/login"}className="nav">Login</Link>
    </nav>
}
