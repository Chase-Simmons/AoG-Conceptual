import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
import Components from '../components/.list.js';
import Functions from '../functions/.list.js';

let display = '';
let displayReducer;

class AoG extends Component {
  componentDidMount = () => {
    this.updateDisplay();
  };
  componentDidUpdate = () => {
    this.updateDisplay();
  };

  updateDisplay = () => {
    displayReducer = this.props.store.displayReducer;
    display = '';
    displayReducer.forEach((item) => {
      display += `${item} `;
    });

    return display;
  };
  render() {
    if (!displayReducer) {
      this.setState({});
    }
    const toDisplay = this.updateDisplay();

    return (
      <div className="page">
        <div className="gWin">
          <Functions.EVL />
          <div className={toDisplay}>
            <Components.MainMenu />
            <script src="../functions/EVL.js" />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(AoG);
