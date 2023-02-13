import { useCartContext } from "../../CartContext/CartContext";
import Loader from "../../Loader/Loader";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
 } from "firebase/firestore";
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

  const verify = () => {
    setLoader(false);
    let timerInterval;
    if (nameOk === false) {
      Swal.fire({
        color: "black",
        background: "#FEFE85",
        title: "Ingrese su nombre",
      });
    } else if (phoneOk === false) {
      Swal.fire({
        color: "black",
        background: "#FEFE85",
        title: "Ingrese un telefono valido",
      });
    } else if (emailOk === false) {
      Swal.fire({
        color: "black",
        background: "#FEFE85",
        title: "Ingrese su mail",
      });
    } else if (emailVerication === false) {
      Swal.fire({
        color: "black",
        background: "#FEFE85",
        title: "Verifique su mail",
      });
    } else
      Swal.fire({
        icon: "success",
        title: "Formulario verificado",
        color: "black",
        background: "#FEFE85",
        html: " ...procesando compra...",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          
        }
      });
  };

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

    const db = getFirestore();

    const queryCollection = collection(db, "orders");

    addDoc(queryCollection, order)
      .then((response) => {
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
    return getOrders;
  }

  getItems();

  ///////////////////////////////////////

  const handleOnChange = (evt) => {
     setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
    };

  //validaciones formulario

  let mail = dataForm.email;
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  let emailOk = regExp.test(mail);

  let mail1 = dataForm.email;
  let mail2 = dataForm.email2;
  let emailVerication = mail1 === mail2;

  let phone = dataForm.phone;
  let regExpPhone =
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm;
  let phoneOk = regExpPhone.test(phone);

  let nombre = dataForm.name;
  let nameOk = nombre != "";

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
                          onClick={verify}
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
