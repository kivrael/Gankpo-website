import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Booking from './pages/Booking/Booking';
import ContactSection from './pages/Contact/Contact';
import Boutique from './pages/Boutique/Boutique';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import CartProvider from './CartContext';
import Success from './pages/Boutique/Success';
import Cancel from './pages/Boutique/Cancel';

function App() {
  return (
    <CartProvider>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/booking' component={Booking} />
          <Route path='/contact' component={ContactSection} />
          <Route path='/boutique' component={Boutique} />
          <Route path='/achat' component={Success} />
          <Route path='/annulation' component={Cancel} />
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
