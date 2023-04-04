import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';
import { Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import storeItems from "../../data/items.json"
import { productsArray } from "../../data/productsStore"
import ProductCard from '../../components/ShoppingCart/ProductCard';
import { Modal } from 'react-bootstrap'
import { useState } from 'react'
import styled from "styled-components";



function Boutique() {
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const BoutiqueContainer = styled.div`
  background-color: #000;//696969;
  color: #fff;
  /* padding-top: 50px; */
  //16px;
  padding-left: 15%;
  padding-right: 10%;
  /* display: flex; */
  /* justify-content: center; */
`


  return (
    <BoutiqueContainer>
      <h1 align="center" className="p-3">Boutique</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product,idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product}/>
          </Col>
        ))}
      </Row> 

    </BoutiqueContainer>
  );
}

export default Boutique;
