// form controls
const bookRes = document.querySelector("#bookRes");
const formBtn = document.querySelector("#form-submit");
const response = document.querySelector("#response");

function send() {
  if (!bookRes.value) return;
  alert("that's a good choice!");
}
formBtn.addEventListener("click", send);

// 2 truth 1 lie logic (very messy) make into class?

const subtitle = document.querySelector(".truth-lie");
const randomSubtitleArr = ["I love code", "I can fly", "I'm a nerd"];
const backBtn = document.querySelector("#back-button");
const forwardBtn = document.querySelector("#forward-button");

document.addEventListener("DOMContentLoaded", () => {
  let step = 0;

  forwardBtn.addEventListener("click", () => {
    if (step >= randomSubtitleArr.length - 1) {
      console.log("was too high, reset step");
      step = 0;
      return (subtitle.innerHTML = randomSubtitleArr[step]);
    }
    step += 1;

    return (subtitle.innerHTML = randomSubtitleArr[step]);
  });

  backBtn.addEventListener("click", () => {
    if (step <= 0) {
      step = randomSubtitleArr.length - 1;
      return (subtitle.innerHTML = randomSubtitleArr[step]);
    }
    step -= 1;
    return (subtitle.innerHTML = randomSubtitleArr[step]);
  });
});
