import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gsap } from 'gsap';
// UTILS
import ScrollToTop from './uitls/ScrollToTop/ScrollToTop';
// PAGE'S
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import News from './pages/News';
import Organisations from './pages/Organisations';
// COMPONENTS
import Gradient from './components/LayoutComponents/PageGradient/Gradient';
import Header from './components/LayoutComponents/Header/Header';

import SmoothScroll from './components/LayoutComponents/SmoothScrollContainer/SmoothScroll';

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
          </Switch>
        </SmoothScroll>
      </div>
    </Router>
  );
}

export default App;
