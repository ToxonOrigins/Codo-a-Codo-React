import { Route, Routes } from "react-router-dom";
import './App.css';
import { Footer } from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx"
import Carrito from "./Components/Cart/Carrito.jsx"
function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App