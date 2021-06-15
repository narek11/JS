// tutaj rozwiązanie<!--
// Lista jest już stworzona w strukturze html, ale domyślnie niewidoczna (display: none).
// - Po kliknięciu na przycisk (button już jest) mamy sprawić by każdy element li był widoczny (ustawienie własciwości display na block)
// - by po każdym kliknięciu w button wielkość fonta była o jeden większa od początkowego (ustaw w JS wartość początkową na 10px, użyj zmiennej).

// Nie zmieniaj nic w html i css. Mozesz zmieniać tylko plik JavaScript.

// Zrób to zadanie (najpierw) za pomocą pętli i (potem) za pomocą metody forEach.

// -->

document.addEventListener("DOMContentLoaded", () => {
  const li = [...document.querySelectorAll("li")];
  const button = document.querySelector("button");

  let size = 10;

  const showItems = () => {
    // li.forEach((i) => {
    //   i.style.display = "block";
    //   size++;
    //   i.style.fontSize = size + "px";
    // });

    for (let index = 0; index < li.length; index++) {
      li[index].style.display = "block";
      size++;
      li[index].style.fontSize = size + "px";
    }
  };

  button.addEventListener("click", showItems);
});
