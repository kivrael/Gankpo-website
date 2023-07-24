import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
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
  Logo,
  DropDownItem,
  StyledMenu,
  StyledItem
} from './Navbar.elements';
import LogoImg from '../../images/logo_gankpo_seul.png';

import { CartContext } from "../../CartContext";
import { Modal, Button as BootStrapButton } from 'react-bootstrap'
import CartProduct from '../ShoppingCart/CartProduct';

import { Dropdown, Menu } from 'antd';

import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { SubMenu, Item } = Menu;


const StyledDropDown = styled(Dropdown)`
  color: #ffd500;
  padding-top: 24px;
  margin-right: 10px;
  font-family: 'Sagonabook';
  .ant-select-item {
     color: red;
  }
`

// const StyledMenu = styled(Menu)`
//   background: #000;
//   font-size: 25;
//   color: #ffd500;
//   padding-top: 24px;
//   margin-right: 10px;
//   font-family: 'Sagonabook';
//   .ant-select-item {
//      color: red;
//   }
//   width: 1200px;
//   height: 90px;
//   font-size: 20px;
//   justify-content: end;
// `
// style={{ width: 1200, height: 90, fontSize: 20, justifyContent: 'end' }}

function Navbar() {

  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', { // `${process.env.SERVER_URL}/checkout`
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
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>

            {/* <StyledMenu  mode="horizontal" items={MenuItems} /> */}

            <StyledMenu mode="horizontal">
        <Menu.Item key="about">
          <NavLinks to='/about'>
            À propos
          </NavLinks>
        </Menu.Item>
        <SubMenu key="event" title={'Agenda'}>
            <Menu.Item key="event:1">
              <NavLinks to={{pathname: '/agenda', state: 0}}>Événements à venir</NavLinks>
            </Menu.Item>
            {/* <Menu.Item><Link to='/agenda' state={{toggle: 0}}>Événements à venir</Link></Menu.Item> */}
            <Menu.Item key="event:2">
              <NavLinks to={{pathname: '/agenda', state: 1}}>Événements passés</NavLinks>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="teach">
        <NavLinks to='/transmission'>Transmission</NavLinks>
        </Menu.Item>
        <SubMenu key="media" title={'Media'}>
            <Menu.Item key="media:1">
            <NavLinks to='/photos'>Photos</NavLinks>
            </Menu.Item>
            <Menu.Item key="media:2">
              <NavLinks to='/videos'>Vidéos</NavLinks>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="book">
        <NavLinks to='/booking'>Booking</NavLinks>
        </Menu.Item>
        <Menu.Item key="contact">
        <NavLinks to='/contact'>Contact</NavLinks>
        </Menu.Item>
      </StyledMenu>

              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/boutique'>
                    <Button onClick={handleShow} primary>Boutique {productsCount>1 ? '('+productsCount+' articles)' : productsCount==1 ? '('+productsCount+' article)' : ''}</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/boutique'>
                    <Button onClick={closeMobileMenu} 
                    fontBig primary>
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
