import React, { Component } from 'react';

class EVL extends Component {
  componentDidMount = () => {
    const mainMenuItem = document.querySelectorAll('.mainMenuItem');
    const display = document.querySelector('.display');

    function mainMenuItemClick() {
      const selectedClass = this.classList[1];
      console.log(`i have been clicked -> ${selectedClass}`);

      display.classList.forEach((item) => {
        if (
          item !== selectedClass &&
          item[0] + item[1] + item[2] + item[3] !== 'hide'
        ) {
          display.classList.add(`hide-${item}`);
        }
      });

      display.classList.add(`${selectedClass}`);
      display.classList.remove(`hide-${selectedClass}`);
    }

    function mainMenuItemRemoval() {
      display.classList.remove('hide-mainMenu');

      console.log(display.classList);
    }

    mainMenuItem.forEach((item) =>
      item.addEventListener('click', mainMenuItemClick)
    );
    display.addEventListener('transitionend', mainMenuItemRemoval);
    console.log(mainMenuItem); // CL DEBUGGER
    //
  };
  render() {
    return <></>;
  }
}

export default EVL;
