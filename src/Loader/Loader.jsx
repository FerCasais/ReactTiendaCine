import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <>
      <span class="loader"></span>

      <h2>... cargando ...</h2>
      <iframe
        src="https://giphy.com/embed/RKS1pHGiUUZ2g"
        width="480"
        height="312"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/bored-monsters-inc-RKS1pHGiUUZ2g"></a>
      </p>
    </>
  );
};

export default Loader;
