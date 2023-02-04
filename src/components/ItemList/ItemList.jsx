import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink, Link, useParams } from "react-router-dom";
import Item from '../Item/Item';

const ItemList = ({productos}) => {
  return (
    <>
    <div className="producto-cards">
      <Container fluid="md">
        <Row md="auto">
          
          { (
            productos.map((producto) => (

              <Col md={4} className="mb-8" key={`${producto.id}`}>
              
               <Item producto={producto}/>

           </Col> ))
          )}
         
         </Row>
      </Container>
    </div>
  </>
  )
}

export default ItemList
