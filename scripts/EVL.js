const mainMenuItem = document.querySelectorAll('.mainMenuItem');
const display = document.querySelector('.display');

function mainMenuItemClick() {
  console.log(`i have been clicked -> ${this.classList[1]}`);
  display.classList.add('hideMM');
  display.classList.add(`${this.classList[1]}`);
}

function mainMenuItemRemoval() {
  // display.classList = 'display';
  console.log(display.classList);
}

mainMenuItem.forEach((item) =>
  item.addEventListener('click', mainMenuItemClick)
);
display.addEventListener('transitionend', mainMenuItemRemoval);
console.log(display); // CL DEBUGGER
