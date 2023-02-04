import React from "react";
import { useState } from "react";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleSuma = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleResta = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(count)
  }

  return (
    <div className="card">
      <div className="card-body row">
        <div className="col">
          <button className="btn btn-outline-danger w-100" onClick={handleSuma}>
            +
          </button>
        </div>
        <div className="col">
          <label className="btn btn-outline-success w-100">{count}</label>
        </div>
        <div className="col">
          <button className="btn btn-outline-dark w-100" onClick={handleResta}>
            -
          </button>
        </div>
      </div>
      <div className="card-footer">
        <p className="bg-dark">Seleccionar Entradas</p>
       
        <button className="btn btn-outline-danger w-100" onClick={handleOnAdd}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
