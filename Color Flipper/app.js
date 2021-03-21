const randomColors = [
  "#F1f5f8",
  "rgba(133,122,200)",
  "#F15025",
  "Red",
  "Green",
  "purple",
];

const getBtn = document.querySelector("#btn");
getBtn.addEventListener("click", () => {
  const body = document.querySelector("body");
  const showColor = document.querySelector(".color");
  color = randomColors[Math.floor(Math.random() * 6)];
  body.style.backgroundColor = color;
  showColor.textContent = color;
});
