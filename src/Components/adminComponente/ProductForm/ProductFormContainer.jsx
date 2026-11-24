import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductFormUI } from "./ProductFormUI";
import { uploadImage } from "../../../services/UploadImages"
import { validateProduct } from "../../utils/validateProduct";
import { createProduct, updateProduct, getProductById } from "../../../services/ProductsService";
const getsid = async (id,loading) => {
    loading=false
    let productoxid = await getProductById(id);
    loading=true
    return productoxid
}
export const ProductFormContainer = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [file, setFile] = useState(null)
    const [urlimg, seturlimg] = useState(null)
    const [product, setProduct] = useState({
        nombre: "",
        precio: "",
        category: "",
        children: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    };
    useEffect(() => {
        if (id) {
            const productoxid = getsid(id)
            productoxid.then((data) => {setProduct(data);seturlimg(data.imagen)}).catch((error) => { alert("Error:", error) })
        }
    }, [id])

    const handleFileChange = (e) => {
        const file = e.target.files[0] || null
        setFile(file);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors
        if(urlimg&&!null){newErrors = validateProduct({ ...product,file:urlimg})}else{newErrors = validateProduct({ ...product, file })}
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return
        }
        try {
            let imageUrl
            if(urlimg&&!file){imageUrl=urlimg}else{imageUrl = await uploadImage(file)}
            const productData = {
                ...product,
                precio: Number(product.precio),
                imagen: imageUrl
            };

            if (id) {
                updateProduct(id, productData);
                setProduct({ nombre: "", precio: "", category: "", children: "", })
                setFile(null)
                navigate("/admin/dashboard")
            } else {
                const newid = await createProduct(productData)
                setProduct({ nombre: "", precio: "", category: "", children: "", })
                setFile(null);
                navigate(`/admin/products/success/${newid}`, { replace: true });
            }
        } catch (error) {
            setErrors({ general: error.message })
        }
        finally {
            setLoading(false);
        }

    };
    return (
        <ProductFormUI
            product={product}
            errors={errors}
            loading={loading}
            onChange={handleChange}
            onFilechange={handleFileChange}
            onSubmit={handleSubmit} 
            urlimg={urlimg}/>
    )
}