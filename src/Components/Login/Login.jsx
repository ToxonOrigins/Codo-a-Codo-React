import "./Login.css"
import { useAuth } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
export const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate();
    const [formdata, setFormData] = useState({
        email: "",
        password: "",
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(formdata.email, formdata.password)
            navigate("/admin", { replace: true })
        } catch (error) {
            console.log(error);
            alert("Error al iniciar error")
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <h2>Iniciar Sesión</h2>
            
            <div>
                <label className="form-group" >Email </label>
                <input type="email" name="email" required placeholder="Inserte su correo electronico" onChange={handleChange} value={formdata.email} /></div>
            <div>
                <label className="form-group">Contraseña </label>
                <input type="password" name="password" required placeholder="Inserte su contraseña" onChange={handleChange} value={formdata.password} /></div>
            <button type="submit" className="btn bg-primary">Ingresar</button>
        </form>
    )
}