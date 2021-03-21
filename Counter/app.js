const getAllButtons = document.querySelectorAll(".btn");
const counterText = document.querySelector(".counter p");
var start = 0;
function counter() {
  getAllButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent === "INCREASE") {
        start++;
        counterText.textContent = start;
        if (start > 0) {
          counterText.style.color = "#008000";
        } else if (start == 0) {
          counterText.style.color = "#222222";
        }
        return;
      }
      if (this.textContent === "DECREASE") {
        start--;
        counterText.textContent = start;
        if (start < 0) {
          counterText.style.color = "#FF0000";
        } else if (start == 0) {
          counterText.style.color = "#222222";
        }
      }
      if (this.textContent === "RESET") {
        start = 0;
        counterText.textContent = start;
        if (start == 0) {
          counterText.style.color = "#222222";
        }
      }
    });
  });
}

//function call
counter();
