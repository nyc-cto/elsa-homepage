import React from 'react';

import {
  Home, About, Contact,
} from './templates';

import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import GA from './utils/GoogleAnalytics';
import ScrollToTop from './utils/ScrollToTop';

export default (props) => (
  <Router basename="/">
    { GA.init() && <GA.RouteTracker/>}
    <ScrollToTop/>
    <Switch>
      <Route path="/" exact
        render={(props) => (
          <Home/>
        )}
      />

      <Route path="/contribute" exact
        render={(props) => (
          <About/>
        )}
      />

      <Route path="/contact" exact
        render={(props) => (
          <Contact/>
        )}
      />
    </Switch>
  </Router>
);
