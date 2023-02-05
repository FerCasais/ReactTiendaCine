import "./CartContainer.css";
import { useCartContext } from "../../../CartContext/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const CartContainer = () => {

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  })
  const { cartList, vaciarCarrito, Total, RemoveItem } = useCartContext();
  console.log(cartList);

  const generarOrden = (evt) => {

    evt.preventDefault();



    const order = {}

    order.buyer = { dataForm}
    order.items = cartList.map(  ( {id, titulo, precio} ) => ( {id, titulo, precio} ) )
   

    console.log(order)

    const db = getFirestore ()

    const queryCollection = collection (db, 'orders')

    addDoc (queryCollection, order)
    .then ( (response) => console.log(response ))
    .catch ( (err) => console.log(err))
    .finally ( () => console.log ('fin'))



  } 

const handleOnChange = (evt) => {

 console.log(evt.target.name)
 console.log(evt.target.value)  

 setDataForm ( {

  ... dataForm, 
  [evt.target.name]: evt.target.value



 })


}
console.log(dataForm)
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
                <Card className="mt-5 text-center">

                  



                  RESUMEN DE LA COMPRA
                  <h6>Sala: {prod.sala}{" "}</h6><h6>Función 18 hs.</h6>
                  <p> Entradas: {prod.cantidad} Precio: EU {prod.precio}</p><h6>{`Total Eu: ${
                      prod.precio * prod.cantidad
                    }`}</h6>
                    
                    <form onSubmit={generarOrden} className="form-control w-100" >

                    <input 

                    type="text" 
                    name="name" 
                    placeholder="Ingresar Nombre"
                    value={dataForm.name}
                    onChange={ handleOnChange}
                    />

<input 

type="text" 
name="phone" 
placeholder="Teléfono"
value={dataForm.phone}
onChange={ handleOnChange}
/>

<input 

                    type="email" 
                    name="email" 
                    placeholder="Ingresar Email"
                    value={dataForm.email}
                    onChange={handleOnChange}
                    />

<input 

type="text" 
name="email" 
placeholder="Validar Email"
value={dataForm.email}
onChange={ handleOnChange}
/>
                    


            <button type="submit" onClick={generarOrden}  className="bg-danger btn btn-outline-light w-100 mt-5">
              COMPRAR
            </button>
                 

                  

                  </form>



                    <button  className="bg-danger btn btn-outline-light">ir a pagar</button>
                      
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
            <button onClick={generarOrden}  className="btn btn-dark btn-outline-danger btn-lg">
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
