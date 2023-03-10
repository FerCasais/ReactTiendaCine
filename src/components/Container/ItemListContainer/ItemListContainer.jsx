import { useState } from "react";
import { useEffect } from "react";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemList from "../../ItemList/ItemList";
import Loader from "../../../Loader/Loader";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loadings, setLoadings] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "productos");

    if (categoryId) {
      const querySelectionFilter = query(
        queryCollection,
        where("genero", "==", categoryId)
      );

      getDocs(querySelectionFilter)
        .then((respuestaPromesa) => {
          setProductos(
            respuestaPromesa.docs.map((prod) => ({
              id: prod.id,
              ...prod.data(),
            }))
          );
        })
        .catch((err) => console.log("error"))
        .finally(() => setLoadings(false));
    } else {
      getDocs(queryCollection)
        .then((respuestaPromesa) => {
          setProductos(
            respuestaPromesa.docs.map((prod) => ({
              id: prod.id,
              ...prod.data(),
            }))
          );
        })
        .catch((err) => console.log("error"))
        .finally(() => setLoadings(false));
    }
  }, [categoryId]);

   return (
    <>
      <div className="producto-cards">
        <Container fluid="md">
          <Row md="auto">
            {loadings ? (
              <div className="div-loader">
                <h3 className="loader text-center">
                  <Loader />
                </h3>
              </div>
            ) : (
              <Col md={"12"}>
                <ItemList productos={productos} />
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ItemListContainer;
