import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gsap } from 'gsap';
// UTILS
import ScrollToTop from './uitls/ScrollToTop/ScrollToTop';
// PAGE'S
import Index from './pages/Index';
import UserAccount from './pages/UserAccount';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Organisations from './pages/Organisations';
import StudentServices from './pages/StudentServices';
// COMPONENTS
import Gradient from './components/LayoutComponents/PageGradient/Gradient';
import Header from './components/LayoutComponents/Header/Header';

import SmoothScroll from './components/LayoutComponents/SmoothScrollContainer/SmoothScroll';
import ForgotPassword from './pages/ForgotPassword';
import Cafetaria from './pages/Cafetaria';
import SportsBase from './pages/SportsBase';
import Tuiasi from './pages/Tuiasi';

function App() {

  // REF"S
  const app = useRef(null);

  //EFFECT
  useEffect(() => {
    gsap.to(app.current, {duration: 0, visibility: 'visible'});
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="App" ref={app}>
        <Gradient />
        <Header />
        <SmoothScroll>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/account">
              <UserAccount />
            </Route>
            <Route path="/account/forgot-password">
              <ForgotPassword />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path="/organisations">
              <Organisations />
            </Route>
            <Route path="/dss">
              <StudentServices />
            </Route>
            <Route path="/cafeteria">
              <Cafetaria />
            </Route>
            <Route path="/sports-base">
              <SportsBase />
            </Route>
            <Route path="/tuiasi">
              <Tuiasi />
            </Route>
          </Switch>
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App;
