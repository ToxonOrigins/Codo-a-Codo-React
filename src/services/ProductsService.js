import {
  collection,
  doc,
  getDoc,
  getDocs, addDoc, updateDoc, deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");
/*Otras cosas antes*/
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef)
    const productos = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
    return productos
  } catch (error) {
    alert("Ocurrio un error:", error)
    throw error
  }
}
export const getByCategory = async (category) => {
  try {
    let queryRef;
    //truthy
    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }

    // Traer los documentos:
    const snapshot = await getDocs(queryRef);
    //Mapeo de datos para formateo
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const productref = doc(productsRef, id)
    const snapshot = await getDoc(productref)
    if (snapshot.exists()) {
      const producto = { id: snapshot.id, ...snapshot.data() }
      return producto
    } else { return null }
  }
  catch (error) {
    console.log("Ocurrio un error:", error)
    throw error
  }
}

export const createProduct = async (productoData) => {
  try {
    const docRef = await addDoc(productsRef, productoData)
    return docRef.id
  } catch { console.error(); }
}
export const updateProduct = (id,productoData) => {
  try {
    const docref=doc(productsRef,id)
    updateDoc(docref,productoData).then(alert("Actualizado"))
  } catch (error) { console.log(error) }
}
export const deleteProduct = async (id) => {
  try {
    const producto = doc(productsRef, id)
    deleteDoc(producto).then(() => { alert("Producto eliminado") })
  }
  catch (error) {
    console.log("Ocurrio un error:", error)
    throw error
  }
}
