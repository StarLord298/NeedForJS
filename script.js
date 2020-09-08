const score = document.querySelector(".score"),
  start = document.querySelector(".start"),
  gameArea = document.querySelector(".gameArea"),
  car = document.createElement("div");

car.classList.add("car");

start.addEventListener("click", startGame);

document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

function startGame() {
  start.classList.add("hide");
  gameArea.appendChild(car);
  setting.start = true;
  requestAnimationFrame(playGame);
}
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};
const setting = {
  start: false,
  score: 0,
  speed: 3,
};

function startRun(event) {
  event.preventDefault();
  keys[event.key] = true;
}
function stopRun(event) {
  event.preventDefault();
  keys[event.key] = false;
}

function playGame() {
  console.log("play game");
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}
