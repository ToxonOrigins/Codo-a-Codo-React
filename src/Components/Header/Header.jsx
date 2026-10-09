import "./Header.css"
import {Nav} from  "../Nav/Nav.jsx"
import logo from "../../assets/react.svg"
function Header(){return <header style={{textDecoration:"underline"}}>
    <img src={logo}  /> <Nav/> </header>}
export default Header