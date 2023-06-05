const dropDown = document.querySelector(`.dropDown`);
const dropDownAbout = document.querySelector(`.dropDownAbout`);
const listItem2 = document.querySelector(`#showForm`);
const listItem3 = document.querySelector(`#showAbout`);
const images = document.querySelectorAll(`header img`);
const menuBtn = document.querySelector(`.hamburgerContainer`);
const bar1 = document.querySelector(`#bar1`);
const bar3 = document.querySelector(`#bar3`);
const bar2 = document.querySelector(`#bar2`);
const sideMenu = document.querySelector(`#sideMenu`);
const item = document.querySelectorAll(`.item`);
const caret = document.querySelector(`.caret`);
const servicesMenu = document.querySelector(`#servicesMenu`);
const closeOut = document.querySelector(`#closeOut`);
const sideMenuBtn = document.querySelector(`#sideMenuBtn`);

menuBtn.addEventListener(`click`, () => {
  menuBtn.classList.toggle(`spin`);
  bar2.classList.toggle(`xPattern`);
  bar3.classList.toggle(`xPattern2`);
  bar1.classList.toggle(`disappear`);
  sideMenu.classList.toggle(`showSideMenu`);

  item.forEach((item) => {
    item.classList.toggle(`zoomMobile`);
  });
});

sideMenuBtn.addEventListener(`click`, showServices);
closeOut.addEventListener(`click`, close);
function showServices() {
  servicesMenu.classList.add(`showSideMenu`);
}

function close() {
  servicesMenu.classList.remove(`showSideMenu`);
}

let index = 0;

function fadeInOut() {
  images.forEach((image, i) => {
    if (i === index) {
      image.classList.add(`fadeIn`);
    } else {
      image.classList.remove(`fadeIn`);
    }
  });
}

function activate() {
  fadeInOut();
  index++;
  if (index >= images.length) {
    index = 0;
  }
  setTimeout(activate, 12200);
}

activate();

// const loyal = document.querySelector(`.loyal`);
// const loyalText = `All your Handyman Needs  `;
// const petInNeed = `Capentry, Landscaping, & MORE!  `;
// let index2 = 0;

// function interval() {
//   index2++;
//   setTimeout(() => {
//     loyal.innerText = loyalText.substring(0, index2);

//     if (index2 < loyalText.length) {
//       interval();
//     } else if (index2 >= loyalText.length) {
//       // index2 = 0;
//       // interval_2();

//       backspace2();
//     }
//   }, 500);
// }

// interval();

// function interval_2() {
//   index2++;
//   setTimeout(() => {
//     loyal.innerText = petInNeed.substring(0, index2);

//     if (index2 < petInNeed.length) {
//       interval_2();
//     } else if (index2 >= petInNeed.length) {
//       // index2 = 0;
//       // interval();
//       backspace();
//     }
//   }, 500);
// }

// function blink() {
//   setInterval(() => {
//     caret.classList.toggle("blink");
//   }, 500);
// }
// blink();

// function backspace() {
//   index2--;
//   setTimeout(() => {
//     loyal.innerText = petInNeed.substring(0, index2);
//     if (index2 >= 0) {
//       backspace();
//     } else {
//       index2 = 0;
//       interval();
//     }
//   }, 100);
// }

// function backspace2() {
//   index2--;
//   setTimeout(() => {
//     loyal.innerText = loyalText.substring(0, index2);
//     if (index2 >= 0) {
//       backspace2();
//     } else {
//       index2 = 0;
//       interval_2();
//     }
//   }, 100);
// }
