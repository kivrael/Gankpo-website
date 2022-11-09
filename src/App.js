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

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/booking' component={Booking} />
        <Route path='/contact' component={ContactSection} />
        <Route path='/boutique' component={Boutique} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
