// 1. utwórz element <button> i <ul> w <body>
// JS
// 1. pobierz element button za pomocą metody querySelector i przypis wynik do zmiennej
// 2. ustaw nasłuchiwanie (metodę addEventListener) na click na pobrany element button
// 3. jako drugi argument metody adEventListener podaj funkcję anonimową.
// 4. zadaniem funkcji anonimowej jest stworzyć nowy element li, który będzie zawierał w sobie tekst (właściwość textContent)  w postaci kolejnych liczb nieparzystych (1,3,5 itd) czyli: <li>1</li><li>3</li> itd. Posłuż się w tym celu zmienną (pamietaj by stworzyć ją za pomocą słowa let a nie const), którą utworzysz w zasięgu globalnym a będziesz modyfikował w funkcji (za każdym razem funkcja zwiększy ją o dwa).
// 5. Każdy element <li>, który zawiera liczbę podzielną przez 3 (a wiec zwracającą 0 z dzielenia przez 3) ma mieć większą font. (1) dodawaj więc (w funkcji, za pomocą instrukcji warunkowej) do takiego elementu klasę o nazwie big (już określona w css). Wykorzystaj instrukcję warunkową i modulo.

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const ul = document.querySelector("ul");

  let counter = 0;

  const addNewElement = () => {
    let li = document.createElement("li");
    li.style.listStyle = "none";
    counter++;
    if (counter % 3 === 0) {
      li.style.fontWeight = "bold";
    }
    li.textContent = counter;
    ul.appendChild(li);
  };

  button.addEventListener("click", addNewElement);
});
