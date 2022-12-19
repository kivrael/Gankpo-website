import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  Logo
} from './Navbar.elements';
import LogoImg from '../../images/logo_gankpo_seul.png';

import { CartContext } from "../../CartContext";
import { Modal, Button as BootStrapButton } from 'react-bootstrap'
import CartProduct from '../ShoppingCart/CartProduct';


function Navbar() {

  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response) => {
      return response.json();
    }).then((response) => {
      if(response.url) {
        window.location.assign(response.url) //Forwarding user to Stripe
      }
    })
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#ffc000' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <Logo src={LogoImg} alt='Gankpo' />
              {/* <NavIcon /> */}
              {/* GANKPO */}
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  À propos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/booking' onClick={closeMobileMenu}>
                  Booking
                </NavLinks>

                        {/* button onclick handleShow */}
      

              </NavItem>
              <NavItem>
                <NavLinks to='/contact' onClick={closeMobileMenu}>
                  Contact
                </NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/boutique'>
                    <Button onClick={handleShow} primary>Boutique {productsCount>1 ? '('+productsCount+' articles)' : productsCount==1 ? '('+productsCount+' article)' : ''}</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/boutique'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Boutique
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Panier</Modal.Title>
          </Modal.Header>

            <Modal.Body>
              {productsCount > 0 ?
              <>
                <p>Élements dans le panier :</p>
                {cart.items.map((currentProduct,idx) =>(
                  <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                ))}
                <h1>Total : {cart.getTotalCost()}</h1>
                {/* checkout */}
                <BootStrapButton onClick={checkout} variant="success">Passer la commande</BootStrapButton>
              </>
              :
              <h1>Panier vide</h1>
            }
              
            </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
