import React, { Component } from 'react';

class MainMenu extends Component {
  render() {
    return (
      <>
        <div className="mainMenuItem Singleplayer">
          <p className="mMP">Single-Player</p>
        </div>
        <div className="mainMenuItem Multiplayer">
          <p className="mMP">Enter Multiplayer Lobby</p>
        </div>
        <div className="mainMenuItem Tutorial">
          <p className="mMP">Tutorial</p>
        </div>
        <div className="mainMenuItem CoatOfArms">
          <p className="mMP">Coat Of Arms</p>
        </div>
        <div className="mainMenuItem ArmySetup">
          <p className="mMP">Army Setup</p>
        </div>
        <div className="mainMenuItem Options">
          <p className="mMP">Options</p>
        </div>
        <div className="mainMenuItem Instructions">
          <p className="mMP">Instructions</p>
        </div>
        <div className="mainMenuItem Highscores">
          <p className="mMP">Highscores</p>
        </div>
        <div className="mainMenuItem Achievements">
          <p className="mMP">Achievements</p>
        </div>
        <div className="mainMenuItem Quit">
          <p className="mMP">Quit</p>
        </div>
      </>
    );
  }
}

export default MainMenu;
