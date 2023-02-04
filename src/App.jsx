import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ItemListContainer from "./components/Container/ItemListContainer/ItemListContainer";
import Contador from "./components/Contador/Contador";
import ItemDetailContainer from "./components/Container/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/Container/CartContainer/CartContainer";
import NavBar from "./components/NavBar/NavBar";
import { CartContextProvider } from "./CartContext/CartContext";




function App() {



  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <div className="App">
            <NavBar />
          </div>

          {/* <div>
          <Contador />
        </div> */}

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
