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
    const displayContainer = document.querySelector('.display');

    function mainMenuItemClick() {
      const selectedClass = this.classList[1];

      console.log(`i have been clicked -> ${selectedClass}`);

      displayContainer.classList.add('hide');

      displayContainer.addEventListener('transitionend', () => {
        dispatcher('SET_DISPLAY', selectedClass);
        displayContainer.classList.remove('hide');
      });
    }

    mainMenuItem.forEach((item) =>
      item.addEventListener('click', mainMenuItemClick)
    );

    // console.log(mainMenuItem); // CL DEBUGGER
    //
  };
  render() {
    return <></>;
  }
}

export default connect(mapStoreToProps)(EVL);
