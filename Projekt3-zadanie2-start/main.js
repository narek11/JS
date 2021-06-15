let size = 10;
let orderElement = 1;

const init = () => {
  // tutaj kod
  const button = document.createElement("button");
  button.textContent = "Dodaj 10 elementów";
  const ul = document.createElement("ul");

  document.body.appendChild(button);
  document.body.appendChild(ul);
  button.addEventListener("click", createLiElements);
};

const createLiElements = () => {
  // tutaj kod
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    document.querySelector("ul").appendChild(li);
    li.textContent = `${orderElement++}`;
    li.style.fontSize = `${size++}px`;
  }
};

init();

//  https://websamuraj.pl/examples/js/projekt3-zad2/

// - Stwórz rozwiązanie z pomocą dwóch funkcji w oparciu o strukturę w main.js Nie dodawaj nic więcej do zakresu globalnego.

// - funkcja init, która będzie uruchomiona po wczytaniu strony. Jej zadaniem jest:
// --- stworzyć dwa elementy
// <button>Dodaj 10 elementów listy</buttn>
// <ul></ul>
// --- dodaj je do body
// --- ustaw nasłuchiwanie na przycisk

// --- funkcja createLiElements, która będzie uruchamiana po kliknięciu przycisku stworzonego przez funkcję init. Jej zadanie to:
// --- tworzenie 10 elementów li i umieszczanie ich w elemencie ul
// --- kazdy z 10 elementów ma mieć swój indeks (order) pczy czym kolejne 10 elementów ma być konynuacją (czilu pierwszy klik mamy 1-10, kolejny 11-20 itd)
// --- każdy kolejny element il ma mieć font-size większy o 1px.

// - bez zmian w pliku html (nie dodajemy html-a i css-a). Cały kod piszemy w elemencie main.js
