const mainMenuItem = document.querySelectorAll('.mainMenuItem');

function mainMenuItemClick() {
  console.log(`i have been clicked -> ${this.classList[1]}`);
}
mainMenuItem.forEach((item) =>
  item.addEventListener('click', mainMenuItemClick)
);
console.log(mainMenuItem);
