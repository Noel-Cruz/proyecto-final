import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import Categorias from "./componentes/Categorias/Categorias";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart";
import Context from "./Context/context";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Context>
          <header>
            <NavBar />
            <Categorias />
          </header>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/card/" element={<Cart />} />
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  )
}

export default App
