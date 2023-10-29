const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

let intervalId = null;

startButton.addEventListener('click', () => {
  if (intervalId === null) {
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 850);
    startButton.disabled = true;
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = null;
  startButton.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
