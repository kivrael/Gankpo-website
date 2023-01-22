import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import Booking from './pages/Booking';
import ContactSection from './pages/Contact';
import Boutique from './pages/Boutique/Boutique';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import CartProvider from './CartContext';
import Success from './pages/Boutique/Success';
import Cancel from './pages/Boutique/Cancel';
import About from './pages/About';
import Future from './pages/Future';
import Past from './pages/Past';
import Photos from './pages/Photos';
import Videos from './pages/Videos';
import Articles from './pages/Articles';
import Transmission from './pages/Transmission';
// import 'antd/dist/antd.css';

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
          <Route path='/about' component={About}/>
          <Route path='/future' component={Future}/>
          <Route path='/past' component={Past}/>
          <Route path='/photos' component={Photos}/>
          <Route path='/videos' component={Videos}/>
          <Route path='/articles' component={Articles}/>
          <Route path='/transmission' component={Transmission}/>
        </Switch>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
