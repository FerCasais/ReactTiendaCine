import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Item = ({ producto }) => {
  return (
    
       
          <div
            key={producto.id}
            className="card w-100 mt-5 shadow bg-dark text-light text-center "
          > 
            <div className="card-header w-100">
              <h5>Sala: {producto.sala}</h5>{" "}
            </div>
            <div className="card-body text-warning w-100">
              <h4>Titulo: {producto.titulo}</h4>
              <h6>Precio : {producto.precio}</h6>
              <h6>Genero: {producto.genero}</h6>
              <img src={producto.img} alt="" className="w-100" />
            </div>

            <div className="card-footer ">
              <Link to={`/detail/${producto.id}`}>
                {" "}
                <button className="btn btn-outline-danger w-100 text-white-50">
                  Ver Detalle
                </button>
              </Link>
            </div>
            </div>
        
      
  );
};

export default Item;
