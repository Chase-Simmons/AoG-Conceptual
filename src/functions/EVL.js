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
      const hideArray = [];
      let filterItem;
      console.log(`i have been clicked -> ${selectedClass}`);

      display.forEach((item) => {
        if (
          item !== selectedClass &&
          item[0] + item[1] + item[2] + item[3] !== 'hide'
        ) {
          hideArray.push(`hide-${item}`);
        } else {
          filterItem = `${item}`;
        }
      });

      dispatcher('SET_DISPLAY', [
        ...display.filter((item) => item !== filterItem),
        ...hideArray.filter((item) => item !== filterItem),
      ]);
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
