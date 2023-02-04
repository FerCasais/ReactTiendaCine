import "./CartContainer.css";
import { useCartContext } from "../../../CartContext/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartList, vaciarCarrito, Total, RemoveItem } = useCartContext();
  console.log(cartList);

  return Total > 0 ? (
    <>
      <div>
        {cartList.map((prod) => (
          <div key={prod.id}>
            <Container className="bg-secondary justify-content ">
              <Row>
                <Col md={8}>
                <Card
                  style={{ width: "38rem" }}
                  className="mt-5 w-75 placeholder-glow"
                       >
                  <Card.Body className="card-header">
                    <Col className="lead fw-bold text-center">
                    
                      <h3>Titulo: {prod.titulo}</h3>
                    </Col>
                    
                      <Col md={6} className="lead fw-bold">  <h2>Sala: {prod.sala}</h2>{" "}<p>Entradas: {prod.cantidad} </p>
                      <h6> Precio: EU {prod.precio}</h6>
                      <p>Función 18 hs.</p>
                    </Col>
                      <Col md={12} className="lead fw-bold text-end">
                       <div className="text-center" ><img src={prod.img} alt="..." className="imagenCarrito" />{" "}</div>
                      </Col>
                    
                    <Col md={12} className="lead fw-bold fs-2" >{`Total Eu: ${
                      prod.precio * prod.cantidad
                    }`} <p className="fs-5 text-end">
                          Eliminar del carrito <button className="bg-secondary btn btn-outline-secondary " onClick={() => RemoveItem (prod.id)} > X</button>
                        </p> </Col>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  RESUMEN DE LA COMPRA
                </Card>
              </Col></Row>
            </Container>
          </div>
        ))}
      </div>
      <Container className="mt-5 mb-5">
        <Row className="botones">
          <Col md className="botones-carrito ">
            <Link to="/">
              <button className="btn btn-dark btn-outline-success btn-lg ">
                SEGUIR SELECCIONANDO
              </button>
            </Link>{" "}
          </Col>

          <Col md className="botones-carrito ">
            <button className="btn btn-dark btn-outline-danger btn-lg">
              COMPRAR
            </button>
          </Col>

          <Col md className="botones-carrito ">
            <button
              onClick={vaciarCarrito}
              className="btn btn-dark btn-outline-success btn-lg"
            >
              VACIAR CARRITO
            </button>
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <div className="p-4 mt-1">
      <h5 className="text-center mt-2 bg-secondary bg-gradient">
        Tu Carrito está vacío !!{" "}
      </h5>
      <div className="img-carrito p-5">
               <img
          className="imagen-carrito"
          src="https://media2.giphy.com/media/z2D26GunfUK1W/giphy.gif?cid=ecf05e47z9mwxbbrbyuqmpf17mvctl4gpb8174nvz24y4oq4&rid=giphy.gif&ct=g"
          alt=""
        />

        <img
          className="imagen-carrito2"
          src="https://media0.giphy.com/media/26gJyphdSEVnmUes0/giphy.gif?cid=ecf05e47ntr055i5icfhon1r2wc10o103ljwm5aeje32lsvt&rid=giphy.gif&ct=g"
          alt=""
        /> 
      </div>
      <div className="text-center">
       <Link to={'/'}><button className="btn btn-info bg-gradient btn-outline-danger btn-lg fs-4 mt-4">Volver</button></Link> </div>
    </div>
    
  );
};

export default CartContainer;
