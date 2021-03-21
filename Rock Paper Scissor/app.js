// TODO:Reset Button
// TODO:Score Count
const user_text = document.querySelector(".user_turn");
const computer_text = document.querySelector(".computer_turn");
const show_result = document.querySelector(".show_result");
var user_choice = "";
const choices = ["rock", "paper", "scissors"];
var computerPick = "";
const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const choice = document.querySelectorAll(".options button");
const match = document.querySelector(".match");
const computerHand = document.querySelector(".computer-hand");
const playerHand = document.querySelector(".player-hand");
var pScore = 0;
var cScore = 0;
const hands = document.querySelectorAll(".hands img");

function updateScore() {
  var playerScore = document.querySelector(".player-score p");
  var computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
}
hands.forEach((hand) => {
  hand.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});
choice.forEach((option) => {
  option.addEventListener("click", function () {
    computerPick = choices[Math.floor(Math.random() * 3)];

    setTimeout(() => {
      playerHand.src = `../Assets/${this.textContent}.png`;
      computerHand.src = `../Assets/${computerPick}.png`;
      gameDecision(this.textContent, computerPick);
    }, 2000);

    playerHand.style.animation = "shake_player 2s ease";
    computerHand.style.animation = "shake_computer 2s ease";
  });
});
playBtn.addEventListener("click", () => {
  introScreen.classList.add("fadeOut");
  match.classList.remove("fadeOut");
  match.classList.add("fadeIn");
});

function gameDecision(user_choice, computerPick) {
  const winner = document.querySelector(".winner");
  var win_message = "You Won";
  var lose_message = "You Lost";
  var tie = "It's a tie";

  if (user_choice === computerPick) {
    winner.textContent = "It is a tie";
    return;
  }
  if (
    user_choice.toUpperCase() === "ROCK" &&
    computerPick.toUpperCase() === "PAPER"
  ) {
    winner.textContent = "Computer Wins";
    cScore++;
    updateScore();
    return;
  }
  if (
    user_choice.toUpperCase() === "PAPER" &&
    computerPick.toUpperCase() === "SCISSORS"
  ) {
    winner.textContent = "Computer Wins";
    cScore++;
    updateScore();
    return;
  }
  if (
    user_choice.toUpperCase() === "SCISSORS" &&
    computerPick.toUpperCase() === "ROCK"
  ) {
    winner.textContent = "Computer Wins";
    cScore++;
    updateScore();
    return;
  }
  if (
    user_choice.toUpperCase() === "SCISSORS" &&
    computerPick.toUpperCase() === "PAPER"
  ) {
    winner.textContent = "Player Wins";
    pScore++;
    updateScore();
    return;
  }
  if (
    user_choice.toUpperCase() === "ROCK" &&
    computerPick.toUpperCase() === "SCISSORS"
  ) {
    winner.textContent = "Player Wins";
    pScore++;
    updateScore();
    return;
  }
  if (
    user_choice.toUpperCase() === "PAPER" &&
    computerPick.toUpperCase() === "ROCK"
  ) {
    winner.textContent = "Player Wins";
    pScore++;
    updateScore();
    return;
  }
}
