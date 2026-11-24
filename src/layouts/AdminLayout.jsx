
import { Footer } from "../Components/Footer/Footer"
import { Outlet } from "react-router-dom"
export const AdminLayout= ()=>{
    return(<>
        
        <main>
            <Outlet />
        </main>
        <Footer />
    </>)
}