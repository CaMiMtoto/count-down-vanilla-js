// set countdown date by adding hours to current date
const countDownDate = new Date().setSeconds(new Date().getSeconds() + 120);

let timerInterval = null;
const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const startTimer = () => {
  const now = new Date().getTime();
  const countdown = new Date(countDownDate).getTime();
  const distance = countdown - now;
  if (distance < 1) {
    clearInterval(timerInterval);
    document.querySelector("#timer").innerHTML = "Event has started";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
};

document.addEventListener("DOMContentLoaded", function () {
  startTimer();
  timerInterval = setInterval(startTimer, 1000);
});
