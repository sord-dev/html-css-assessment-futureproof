// form controls
const bookRes = document.querySelector("#bookRes").value;
const formBtn = document.querySelector("#form-submit");
const response = document.querySelector("#response");

function send() {
  alert(bookRes);
}
formBtn.addEventListener("click", send);

// 2 truth 1 lie logic

const subtitle = document.querySelector(".truth-lie");
const randomSubtitleArr = ["I love code", "I can fly", "I'm a nerd"];

document.addEventListener("DOMContentLoaded", () => {
  window.setInterval(() => {
    subtitle.innerHTML =
      randomSubtitleArr[Math.floor(Math.random() * randomSubtitleArr.length)];
  }, 3000);
});
