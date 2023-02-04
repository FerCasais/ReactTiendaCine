import React from "react";
import cart from "../../assets/CartWidget.img/cart.svg";
import "./CartWidget.css";
import { useCartContext } from "../../CartContext/CartContext";



function CartWidget() {

  const {Total} = useCartContext()




  return ( (Total > 0 ) 
  ?

    <div className="CartWidget">
      
        <img className="cart" src={cart} alt="carrito" width={30} />  {Total}
      
    </div>

    :

    ""
  );
}

export default CartWidget;
