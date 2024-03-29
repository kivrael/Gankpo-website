import React from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap'

import { CartContext } from '../../CartContext';
import { useContext } from 'react'

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    // console.log(cart.items);
    console.log(product)

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.nom}</Card.Title>
                <Card.Text>{product.prix}€</Card.Text>
                <img class="card-img-top" height="400" src={product.imgUrl}></img>
                <br></br><br></br>
                { productQuantity > 0 ? 
                <>
                    <Form as={Row}>
                        <Form.Label column="true" sm="6">Quantité : {productQuantity}</Form.Label>
                        <Col sm="6">
                            <Button sm="6" onClick={()=> cart.removeOneFromCart(product.id)}className="mx-2">-</Button>
                            <Button sm="6" onClick={()=> cart.addOneToCart(product.id)} className="mx-2">+</Button>
                        </Col>
                    </Form>
                    <Button variant="danger" onClick={()=>cart.deleteFromCart(product.id)} className="my-2">Retirer du panier</Button>
                </>
                :
                <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Ajouter au panier</Button>
                }
                
            </Card.Body>
        </Card>
    )
}

export default ProductCard