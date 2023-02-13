import "./CartContainer.css";
import { useCartContext } from "../../../CartContext/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
  getDoc,
  docs,
  where,
  query,
  doc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import CheckOut from "../../CheckOut/CheckOut";

const CartContainer = () => {
  const [getID, setGetID] = useState({});

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    dia: new Date(),
  });
  const { cartList, vaciarCarrito, Total, RemoveItem, totalItems, mostrar } =
    useCartContext();
  console.log(cartList);

  const generarOrden = (evt) => {
    evt.preventDefault();

    const order = {};

    order.buyer = { dataForm };
    order.items = cartList.map(({ id, titulo, precio }) => ({
      id,
      titulo,
      precio,
    }));

    console.log(order);

    const db = getFirestore();

    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order)
      .then((response) => {
        console.log("su Id es:", response.id, order);

        setGetID(response.id);
      })

      .catch((error) => console.log(error))
      .finally(() => console.log("finished"));
   
  };

  async function getItems() {
    const db = getFirestore();

    const queryCollection = collection(db, "orders");

    const snapshot = await getDocs(queryCollection);
    const getOrders = snapshot.docs.map((order) => order.data());
    console.log(getOrders);
    return getOrders;
  }

  getItems();

  const handleOnChange = (evt) => {
    console.log(evt.target.id);
    console.log(evt.target.value);

    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });

    console.log(dataForm);
  };

  return Total > 0 ? (
    <>
      
      <div className="text-center">
        {" "}
        <h2>TU CARRITO</h2>{" "}
      </div>
      <div>
        {cartList.map((prod) => (
          <div key={prod.id}>
            <Container className="bg-secondary justify-content ">
              <Row>
                <Col md={6}>
                  <Card
                    style={{ width: "38rem" }}
                    className="mt-5 w-75 placeholder-glow"
                  >
                    <Card.Body className="card-header">
                      <Col md={12} className="lead fw-bold text-center">
                        <h4 className="text-center">Título: {prod.titulo}</h4>
                      </Col>
                      <Col md={12} className="lead fw-bold text-center">
                        {" "}
                        <h5>Sala: {prod.sala}</h5>{" "}
                      </Col>
                      <Col md={12} className="text-center">
                        <h6>Función 18 hs.</h6>
                      </Col>
                      <Col md={12} className="text-center">
                        <h6> Precio: EU {prod.precio}</h6>
                      </Col>
                      <Col md={12} className="lead fw-bold text-end">
                        <div className="text-center">
                          <img
                            src={prod.img}
                            alt="..."
                            className="imagenCarrito"
                          />{" "}
                        </div>
                      </Col>
                      <Col md={12} className="lead fw-bold fs-5 mt-2">
                        Entradas: {prod.cantidad}
                        {`, Total Eu: ${prod.precio * prod.cantidad}`}{" "}
                      </Col>
                      <p className=" text-end fw-bold mt-3">
                        Eliminar del carrito{" "}
                        <button
                          className="bg-secondary btn btn-outline-secondary "
                          onClick={() => RemoveItem(prod.id)}
                        >
                          {" "}
                          X
                        </button>
                      </p>{" "}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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
          <Link to="/checkout">
             <button
              onClick={CheckOut}
              className="btn btn-dark btn-outline-danger btn-lg card"
            >
              COMPRAR
            </button></Link>{" "}
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
      <div className="">
        <Container className="text-center">
          <Row></Row>
        </Container>
      </div>
      
    
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
        <Link to={"/"}>
          <button className="btn btn-info bg-gradient btn-outline-danger btn-lg fs-4 mt-4">
            Volver
          </button>
        </Link>{" "}
      </div>
    </div>
  );

 


};

export default CartContainer;
