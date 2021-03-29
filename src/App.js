import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import CssList from './css/.list';
import Pages from './Pages/.list';

class App extends Component {
  render() {
    return (
      <Router>
        <CssList />
        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route exact path="/home" component={Pages.AoG} />

          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
