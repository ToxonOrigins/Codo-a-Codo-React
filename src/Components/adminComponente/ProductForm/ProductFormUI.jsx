export const ProductFormUI = ({ product, errors, loading, onChange, onFilechange, onSubmit,urlimg }) => {
    return <section>
        <form className="" onSubmit={onSubmit}>
            <h2>Agregar nuevo producto</h2>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={product.nombre} onChange={onChange} />
                {errors.nombre && <p className="error">{errors.nombre}</p>}
            </div>
            <div>
                <label>Categoria:</label>
                <input type="text" name="category" value={product.category} onChange={onChange} />
                {errors.category && <p className="error">{errors.category}</p>}
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" name="children" value={product.children} onChange={onChange} />
                {errors.children && <p className="error">{errors.children}</p>}
            </div>
            {!urlimg&&<div>
                <label>Imagen:</label>
                <input type="file" accept="image/" onChange={onFilechange}/>
                {errors.file && <p className="error">{errors.file}</p>}
            </div>}
            {urlimg&&<div>
                <img src={urlimg} style={{width:"100px",height:"100px"}} /> <br/>
                <label>Este producto ya tiene una imagen si quiere cambiarla suba otra. </label><input type="file" accept="image/" onChange={onFilechange}/>
                {errors.file && <p className="error">{errors.file}</p>}
            </div> }
            <div>
                <label>Precio:</label>
                <input type="number" name="precio" value={product.precio} onChange={onChange} min="0" />
                {errors.precio && <p className="error">{errors.precio}</p>}
            </div>
            <button type="submit" disabled={loading}>{loading ? "Guardando..." : "Guardar"}</button>
            {errors.general && <p className="error">{errors.general}</p>}
        </form>
    </section>
};