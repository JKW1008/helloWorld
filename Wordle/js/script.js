let answer = "abcde";

document.querySelector("button").addEventListener("click", function () {
  let input = document.querySelectorAll(".input");
  for (let i = 0; i < 5; i++) {
    if (input[i].value == answer[i]) {
      input[i].style.background = "green";
    } else if (answer.includes(input[i].value)) {
      input[i].style.background = "yellow";
    } else {
      input[i].style.background = "lightgrey";
    }
    input[i].classList.remove("input");
  }
  let template = `<div>
  <input class="input">
  <input class="input">
  <input class="input">
  <input class="input">
  <input class="input">
  </div>`;
  document.querySelector("body").insertAdjacentHTML("beforeend", template);
});
