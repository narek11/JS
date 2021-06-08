let size = 10;
let orderElement = 1;

const init = () => {
  // tutaj kod
  const btn = document.createElement("button");
  const ul = document.createElement("ul");
  const body = document.querySelector("body");

  btn.innerText = "Dodaj";

  btn.addEventListener("click", createLiElements);

  body.appendChild(btn);
  body.appendChild(ul);
};

const createLiElements = () => {
  // tutaj kod

  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    const ul = document.querySelector("ul");

    li.innerText = orderElement;
    orderElement++;

    ul.appendChild(li);
  }
};

init();
