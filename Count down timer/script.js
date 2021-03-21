var getDays = document.querySelector("#days");
var getHours = document.querySelector("#hours");
var getMinutes = document.querySelector("#minutes");
var getSeconds = document.querySelector("#seconds");

const dateTillCountdown = "1 Jan 2022";

function countdownTimer() {
  const date = new Date(dateTillCountdown);
  const dateToday = new Date();
  const secondsConversion = (date - dateToday) / 1000;
  const days = Math.floor(secondsConversion / (24 * 3600));
  const hours = Math.floor((secondsConversion / 3600) % 24);
  const minutes = Math.floor(secondsConversion / 60) % 60;
  const seconds = Math.floor(secondsConversion % 60);

  getDays.textContent = days;
  getHours.textContent = formatTime(hours);
  getMinutes.textContent = formatTime(minutes);
  getSeconds.textContent = formatTime(seconds);
}

function formatTime(time) {
  if (time < 10) {
    return (time = "0" + time);
  } else {
    return time;
  }
}

setInterval(countdownTimer, 1000);
