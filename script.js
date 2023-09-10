"use strict";

const type = document.querySelector(".type-text");

let listTexts = [
  " Front End Developer",
  " UI/UX Designer",
  " Graphic Designer",
  " Freelancer",
  "Animator",
];

let index = -1;
let current = 0;

function typeTextFunc() {
  if (current === listTexts.length) {
    current = 0;
  }
  let typeText = setInterval(() => {
    if (index == listTexts[current].length - 1) {
      clearInterval(typeText);
      clearTextFunc();
    } else {
      index++;
      type.textContent += listTexts[current][index];
    }
  }, 150);
}

function clearTextFunc() {
  let clearText = setInterval(() => {
    if (type.textContent.length == 0) {
      clearInterval(clearText);
      index = -1;
      current++;
      typeTextFunc();
    } else {
      type.textContent = type.textContent.slice(0, -1);
    }
  }, 150);
}

typeTextFunc();

const cursor = document.querySelector("#cursor");

const moveCursor = (e) => {
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursor.style.transform = `translate3d(${mouseX - 20}px, ${mouseY - 20}px, 0)`;
};
window.addEventListener("mousemove", moveCursor);
