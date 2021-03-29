import React, { Component } from 'react';

import Components from '../components/.list.js';

class AoG extends Component {
  render() {
    return (
      <div className="page">
        <div className="gWin">
          <Components.MainMenu />
        </div>
      </div>
    );
  }
}

export default AoG;
