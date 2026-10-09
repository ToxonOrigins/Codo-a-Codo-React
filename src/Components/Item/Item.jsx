import styles from "./Item.module.css"
import "./Item.module.css";
function Item({ imagen, nombre,descripcion, precio, children }) {
    return (
        <article className={styles.tarjeta}>
            <img src={imagen} alt={nombre} className={styles.tarjetaImg} />
            <h2 className={`${styles.tarjetanombre} ${styles["tarjeta-demas"]}`}>{nombre}</h2>
            <p className="tarjeta-precio" >${precio}</p>
            <p>{descripcion}</p>
            <div className={styles["tarjeta-demas"]}>{children}</div>
        </article>)
}
export default Item