import { useContext } from "react";
import { createContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
 

  const agregarCarrito = (product) => {
    setCartList([...cartList, product]);
    const repetido = cartList.find((cart) => cart.id === product.id);

    if (repetido) {
      const totalDelProducto = repetido.cantidad + product.cantidad;

      repetido.cantidad = totalDelProducto;

      setCartList([...cartList]);
    } else {
      setCartList([...cartList, product]);
    }
  };
  const vaciarCarrito = () => {
    setCartList([]);
  };

  const RemoveItem = (id) => {
    setCartList(cartList.filter((cart) => cart.id != id));
  };

  const sumarItems = cartList.map((cart) => cart.cantidad);

  const Total = sumarItems.reduce((total, item) => total + item, 0);

  console.log(Total);

  console.log(sumarItems);

  //agregar funcion
  const costoItem = ''

   
      
  



 



  return (
    <CartContext.Provider
      value={{
        agregarCarrito,
        vaciarCarrito,
        RemoveItem,
        cartList,
        Total,
        costoItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
