import "./nav.css"
import { Link } from "react-router-dom"
export const Nav=()=>{return <nav> <Link to={"/"}>Inicio</Link> <Link to={"/productos"}>Productos</Link> <Link to={"/contacto"}>Contacto</Link> <Link to={"/carrito"}>Carrito</Link></nav>}
