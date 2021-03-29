import React, { Component } from 'react';

import Components from '../components/.list.js';

import Functions from '../functions/.list.js';

class AoG extends Component {
  render() {
    return (
      <div className="page">
        <div className="gWin">
          <Functions.EVL />
          <div className="display mainMenu">
            <Components.MainMenu />
            <script src="../functions/EVL.js" />
          </div>
        </div>
      </div>
    );
  }
}

export default AoG;
