// http://websamuraj.pl/examples/js/projekt11/

const start = document.querySelector(".main");
const reset = document.querySelector(".reset");
const div = document.querySelector(".time div");

let time = 0;
let idI;
let active = false;

const count = () => {
  time++;
  div.textContent = (time / 100).toFixed(2);
};

const timer = () => {
  if (!active) {
    start.textContent = "Pauza";
    active = !active;
    idI = setInterval(count, 100);
  } else {
    start.textContent = "Start";
    active = !active;
    clearInterval(idI);
  }
};

const resetTime = () => {
  start.textContent = "Start";
  active = !active;
  clearInterval(idI);
  time = 0;
  div.textContent = "---";
};

start.addEventListener("click", timer);
reset.addEventListener("click", resetTime);
