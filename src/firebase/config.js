import {db} from "../firebase/config"
import {collection, getDoc} from "firebase/firestore"
const productsRef=collection(db,"products")

const getProducts= async ()=>{
    try{
        const snapshot=await getDocs(productsRef)
        const productsFormat= snapshot.docs.map((doc)=>{
            return {id:doc.id, ...doc.data()}
        })
    } catch (error){
        console.log("Se produjo un error:",error)
        throw error
    }
}
