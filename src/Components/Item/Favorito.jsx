import { useState } from "react"
function Favorito (){
        const [favorito, setFavorito] = useState(false);
    return( <div> <button onClick={() => setFavorito(!favorito)}> {String(favorito)}{favorito ? "⭐" : ""}</button></div>)}
export default Favorito