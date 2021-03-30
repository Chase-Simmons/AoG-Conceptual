import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';

let dispatcher;
let display;

class EVL extends Component {
  componentDidMount = () => {
    dispatcher = (type, payload) => {
      this.props.dispatch({ type, payload });
    };
    display = this.props.store.displayReducer;

    const mainMenuItem = document.querySelectorAll('.mainMenuItem');

    function mainMenuItemClick() {
      const selectedClass = this.classList[1];

      console.log(`i have been clicked -> ${selectedClass}`);

      dispatcher('SET_DISPLAY', selectedClass);
    }

    function mainMenuItemRemoval() {
      // displayArray.remove('hide-mainMenu');
      // console.log(displayArray);
    }

    mainMenuItem.forEach((item) =>
      item.addEventListener('click', mainMenuItemClick)
    );
    // display.addEventListener('transitionend', mainMenuItemRemoval);

    // console.log(mainMenuItem); // CL DEBUGGER
    //
  };
  render() {
    return <></>;
  }
}

export default connect(mapStoreToProps)(EVL);
