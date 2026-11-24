import { Route, Routes } from "react-router-dom";
import './App.css';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx"
import Carrito from "./Components/Cart/Carrito.jsx"
import ProductsallContainer from "./Components/Productsall/ProductsallContainer.jsx";
import { PublicLayout } from "./layouts/PublicLayout.jsx";
import { AdminLayout } from "./layouts/AdminLayout.jsx";
import { ProductSuccess } from "./Components/adminComponente/ProductSuccess.jsx";
import { ProductFormContainer } from "./Components/adminComponente/ProductForm/ProductFormContainer.jsx"
import { Login } from "./Components/Login/Login.jsx";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute.jsx";
import { Dashboard } from "./Components/adminComponente/Dashboard/Dashboard.jsx";
import { Navigate } from "react-router-dom";
import DeleteListContainer from "./Components/adminComponente/DeleteList/DeleteListContainer.jsx";
function App() {

  return (
    <>
      <main>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path='/' element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ProductsallContainer />} />
            
          </Route>
          
          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} >
          <Route index element={<Navigate to={"dashboard"} />} />
          <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="products/new" element={<ProductFormContainer />}/>
            <Route path="products/new/:id" element={<ProductFormContainer />}/>
            <Route path="products/success/:id" element={<ProductSuccess />}/>
            <Route path="delete" element={<DeleteListContainer />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App