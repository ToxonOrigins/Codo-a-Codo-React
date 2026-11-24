import styles from "./Item.module.css"
import "./Item.module.css";
function Item({ imagen, nombre, precio, children }) {
    return (
        <article className={styles.tarjeta}>
            <img src={imagen} alt={nombre} className={styles.tarjetaImg} />
            <h2 className={`${styles.tarjetanombre}`}>{nombre}</h2>
            <p className={styles.tarjetaprecio} >${precio}</p>
            {children!=undefined &&<div className={styles["tarjeta-demas"]}>{children}</div>}
        </article>)
}
export default Item