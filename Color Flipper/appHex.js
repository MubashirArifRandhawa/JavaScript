const randomColors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
var colorChoosen = "#";
function makeRandomColor() {
  for (let i = 0; i < 6; i++) {
    colorChoosen += randomColors[Math.floor(Math.random() * 16)];
  }
}
function changeBackgroundColor() {
  const getBtn = document.querySelector("#btn");
  getBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    const showColor = document.querySelector(".color");
    colorChoosen = "#";
    makeRandomColor();
    body.style.backgroundColor = colorChoosen;
    showColor.textContent = colorChoosen;
  });
}

changeBackgroundColor();
