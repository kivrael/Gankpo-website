import Button from 'react-bootstrap/Button';
import { CartContext } from "../../CartContext";
import { useContext } from "react";
import { getProductData } from "../../data/productsStore";
import React from 'react';

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.nom}</h3>
            <p>Quantité : {quantity} </p>
            <p>{ quantity * productData.prix }€</p>
            <Button size="sm" onClick={() => cart.deleteFromCart(id)}>Retirer</Button>
            <hr></hr>
        </>
    )
}

export default CartProduct;