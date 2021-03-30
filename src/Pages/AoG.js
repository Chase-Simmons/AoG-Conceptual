import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
import Components from '../components/.list.js';
import Functions from '../functions/.list.js';

class AoG extends Component {
  render() {
    let toDisplay = this.props.store.displayReducer;

    const whatToRender = (className) => {
      switch (className) {
        case 'mainMenu':
          triggerTransition(className);
          return <Components.MainMenu />;
        case 'Multiplayer':
          return <Components.Multiplayer />;
        default:
          return <Components.MainMenu />;
      }
    };

    const triggerTransition = (className) => {
      toDisplay = `hide-`;
    };

    console.log(toDisplay);
    return (
      <div className="page">
        <div className="gWin">
          <Functions.EVL />
          <div className={`display ${toDisplay}`}>
            {whatToRender(toDisplay)}
            <script src="../functions/EVL.js" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AoG);
