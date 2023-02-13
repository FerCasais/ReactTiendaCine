import { useCartContext } from "../../CartContext/CartContext";
import Loader from "../../Loader/Loader";

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

const CheckOut = () => {
  const [loader, setLoader] = useState(false);
  const [getID, setGetID] = useState();

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
    email2: "",
    dia: new Date(),
   
   
  });
  const { cartList, vaciarCarrito, Total, RemoveItem, totalItems, mostrar } =
    useCartContext();
  console.log(cartList);

  const verify = () => {
    setLoader(false)
    if (nameOk === false) {
      alert('ingresar su nombre')
     } else if (phoneOk === false) {
      alert('ingresar su telefono ')
     } else if (emailOk === false) {
      alert ('ingresar mail')
     } else if (emailVerication === false) {
      alert ('verificar mail')
     } else alert ('verficado')

  } 
  

  const generarOrden = (evt) => {

    setLoader(true);

    evt.preventDefault();
    const order = {};

    order.buyer = { dataForm };
    order.items = cartList.map(({ id, titulo, precio }) => ({
      id,
      titulo,
      precio,
    }));

    vaciarCarrito();
    setLoader(false);

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

  //te deja ver todas las ordenes creadas

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

    console.log(dataForm.dia);
   

  };

  //validaciones formulario



 

  let mail = dataForm.email
  let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

  let emailOk = regExp.test(mail)

  console.log(emailOk)


let mail1 = dataForm.email
let mail2 = dataForm.email2

let emailVerication = (mail1 === mail2)

console.log(emailVerication)

  let phone = dataForm.phone
  let regExpPhone = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm

  let phoneOk = regExpPhone.test(phone)

  console.log(phoneOk)

  let nombre = dataForm.name

  let nameOk = nombre != ''

  console.log(nameOk)

  
  
 
////////////////////////////////




  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        !getID && (
          <div>
            <div className="d-flex justify-content-center">
              <Col md={6}>
                <div className="text-center">
                  <Card className="mt-5  text-center w-80 ">
                    <div className="bg-dark text-white ">
                      RESUMEN DE LA COMPRA
                    </div>

                    <p className="w-100 fs-5"> {mostrar}</p>
                    <h5>Total de la compra: {totalItems}</h5>

                    <Card className="mt-5 bg-dark text-white w-80 text-center">
                      INGRESE SUS DATOS
                      <form
                        onSubmit={generarOrden}
                        className="form-control w-100 mt-2 "
                      >
                        <input
                          className="w-100"
                          type="text"
                          name="name"
                          placeholder="Ingresar Nombre"
                          value={dataForm.name}
                          onChange={handleOnChange}
                          required
                        />

                        <input
                          className="w-100"
                          type="number"
                          name="phone"
                          placeholder="Teléfono"
                          value={dataForm.phone}
                          onChange={handleOnChange}
                          required
                        />

                        <input
                          className="w-100"
                          type="email"
                          name="email"
                          placeholder="Ingresar Email"
                          value={dataForm.email}
                          onChange={handleOnChange}
                          required
                        />

                        <input
                          className="w-100"
                          type="password"
                          name="email2"
                          placeholder="Validar Email"
                          value={dataForm.email2}
                          onChange={handleOnChange}
                          required
                        />

                        <button
                          type="submit"
                          onClick=
                            { verify }
                          className="bg-danger btn btn-outline-light w-100 mt-5"
                        >
                          Realizar Compra
                        </button>
                        <div></div>
                      </form>{" "}
                    </Card>
                  </Card>
                </div>{" "}
              </Col>
            </div>
          </div>
        )
      )}

      <div>
        {getID && (
          <div className="d-flex justify-content-center mt-5">
            <Card className="w-50 text-center ">
              {" "}
              <h3 className="mt-5">Su compra finalizada con éxito.</h3>
              <h4>{`${dataForm.dia}`}</h4>
              <h4 className="mt-5">{`Su código es: ${getID}. `}</h4>
              <h4 className="mt-5 mb-5">{`Las entradas se han enviado a ${dataForm.email}`}</h4>
              <div className="bg-warning ">
                {" "}
                <Link to={"/"}>
                  <h4 className="fs-1 text-light mt-5 text-decoration-none bg-warning btn btn-outline-light w-50 mt-5 mb-5">
                    Realizar otra compra
                  </h4>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default CheckOut;
