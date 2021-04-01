import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
import Components from '../components/.list.js';
import Functions from '../functions/.list.js';

class AoG extends Component {
  render() {
    let display = this.props.store.displayReducer;

    const whatToRender = (className) => {
      switch (className) {
        case 'mainMenu':
          return <Components.MainMenu />;
        case 'Singleplayer':
          return <Components.MainMenu />;
        case 'Multiplayer':
          return <Components.Multiplayer />;
        case 'Tutorial':
          return <Components.MainMenu />;
        case 'CoatOfArms':
          return <Components.MainMenu />;
        case 'ArmySetup':
          return <Components.MainMenu />;
        case 'Options':
          return <Components.MainMenu />;
        case 'Instructions':
          return <Components.MainMenu />;
        case 'Highscores':
          return <Components.MainMenu />;
        case 'Achievements':
          return <Components.MainMenu />;
        default:
          return <Components.MainMenu />;
      }
    };

    return (
      <div className="page">
        <div className="gWin">
          <Functions.EVL />
          <div className={`display ${display}`}>
            {whatToRender(display)}
            <script src="../functions/EVL.js" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AoG);
