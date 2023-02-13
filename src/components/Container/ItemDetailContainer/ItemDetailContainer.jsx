import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {  useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ItemDetail from "../../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [producto, setProductos] = useState({});
  const [loadings, setLoadings] = useState(true);
  const { detailId } = useParams();

  console.log({ detailId });

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", detailId);
    getDoc(queryDoc)
      .then((results) => setProductos({ id: results.id, ...results.data() }))

      .catch((err) => console.log("error"))
      .finally(() => setLoadings(false));

  }, [detailId]);

  return (
    <>
      <Container>
        <Row>
          <div className="producto-cards">
            {loadings ? (
              <>
                <h1>Cargando Detalles ...</h1>
                <iframe
                  src="https://giphy.com/embed/GVDixAgxYEFXmbofOU"
                  width="480"
                  height="480"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/Parship-football-superbowl-cry-baby-GVDixAgxYEFXmbofOU"></a>
                </p>
              </>
            ) : (
              <ItemDetail producto={producto} />
            )}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default ItemDetailContainer;
