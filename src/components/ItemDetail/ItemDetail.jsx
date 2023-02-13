import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../CartContext/CartContext";
import { useState } from "react";

const ItemDetail = ({ producto }) => {
  const { agregarCarrito } = useCartContext();
  const [isInCart, setIsInCart] = useState(false);

  const onAdd = (cant) => {
    
    setIsInCart(true);
    agregarCarrito({ ...producto, cantidad: cant });

  };

  return (
    <>
      (
      <Container>
        <Row>
          <div className="producto-cards w-75 ">
            <Col md={10} className="mb-5 " key={`${producto.id}`}>
              <div
                key={producto.id}
                className="card w-100 mt-5 shadow bg-dark text-light text-center "
              >
                <div className="card-header">
                  <h5>Sala: {producto.sala}</h5>{" "}
                  <p className="mt-3 ">Horario: 18hs</p>
                  <Col md={12}>
                    <div>
                      <img
                        src={producto.img}
                        alt="foto pelicula"
                        className="w-50"
                      />
                    </div>
                    <div className="card-body text-warning">
                      <p className="fs-5">Synopsis: {producto.synopsis}</p>
                    </div>
                  </Col>
                  <h2 className="text-danger">Titulo: {producto.titulo}</h2>{" "}
                </div>

                <div className="card-footer"></div>
                {isInCart ? (
                  <Link to={"/cart"}>
                    {" "}
                    <button className="btn btn-outline-danger w-100 text-50 bg-info">
                      Ver carrito
                    </button>
                  </Link>
                ) : (
                  <ItemCount onAdd={onAdd} />
                )}
              </div>
              <Link to="/">
                <div className="text-center">
                  <button className="btn btn-dark btn-outline-success btn-lg ">
                    SEGUIR SELECCIONANDO
                  </button>
                </div>
              </Link>
            </Col>
          </div>
        </Row>
      </Container>
      )
    </>
  );
};

export default ItemDetail;
