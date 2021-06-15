// <!-- Projekt docelowy:
// https://websamuraj.pl/examples/js/projekt6-zad1/ -->
// <!-- Stwórz tablicę przechowującą możliwości z dwoma wartościami domyślnymi (np. walcz, przemyś to jeszcze raz) -->
// <!-- Przycisk dodaj: dodaje możliwości do tablicy -- aktualna zawartość tablicy po dodaniu wyświetla się w konsoli -->
// <!-- Przycisk reset: usuwa możliwości (tablica staje się pusta) -->
// <!-- Przycisk pokaż odpowiedź - losuje z tablicy możliwość -->
// <!-- Przycisk pokaż możliwości - pokazuje w alercie zawartość tablicy -->

let options = ["e"];

const add = document.querySelector(".add");
const input = document.querySelector("input");
const resetButton = document.querySelector(".clean");
const showAdButton = document.querySelector(".showAdvice");
const showOptionsButton = document.querySelector(".showOptions");

const addOption = (e) => {
  e.preventDefault();
  let value = input.value;
  options.push(value);
  console.log(options);
  input.value = "";
};

const reset = (e) => {
  e.preventDefault();
  options = [];
  input.value = "";
  console.log(options);
};

const showOptions = (e) => {
  e.preventDefault();
  let h1 = document.createElement("h1");
  document.body.appendChild(h1);
  h1.textContent = `mozliwe opcje to ${options.join(" - ")}`;

  setTimeout(() => {
    document.body.removeChild(h1);
  }, 2000);
};

const showAdvice = (e) => {
  e.preventDefault();
  let index = Math.floor(Math.random() * options.length);

  let h1 = document.createElement("h1");
  document.body.appendChild(h1);
  h1.textContent = `wylosowalem tobie los ${options[index]}`;
};

showOptionsButton.addEventListener("click", showOptions);
showAdButton.addEventListener("click", showAdvice);
resetButton.addEventListener("click", reset);
add.addEventListener("click", addOption);
