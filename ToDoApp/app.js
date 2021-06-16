let toDoList = [];
let searchedList = [];

const addTaskButton = document.querySelector("form button");
const ul = document.querySelector("ul");
const addTaskInput = document.querySelector("form input");
const span = document.querySelector("span");
const searchInput = document.querySelector("#search");

const addTask = (e) => {
  e.preventDefault();
  if (addTaskInput.value.length === 0) return;
  toDoList.push(addTaskInput.value.toLowerCase());
  ul.textContent = "";
  render();
  addTaskInput.value = "";
};

const render = () => {
  ul.textContent = "";
  toDoList.forEach((toDoEl, key) => {
    let li = document.createElement("li");
    li.innerHTML = toDoEl + ` <button>Usuń</button>`;
    li.dataset.key = key;
    ul.appendChild(li);
  });

  const buttonDelete = document.querySelectorAll("ul li button");
  buttonDelete.forEach((button) => {
    button.addEventListener("click", deleteButton);
  });
  span.textContent = toDoList.length;
};

const deleteButton = (e) => {
  e.preventDefault();
  let index = e.target.parentNode.dataset.key;
  console.log(index);
  toDoList.splice(index, 1);
  render();
};

const searchItem = () => {
  const searched = searchInput.value.toLowerCase();
  if (searchInput.value.length === 0) {
    render();
  } else {
    task = [...toDoList.filter((i) => i.includes(searched))];
    searchedList = task;
    ul.textContent = "";
    searchedList.forEach((toDoEl, key) => {
      let li = document.createElement("li");
      li.innerHTML = toDoEl + ` <button>Usuń</button>`;
      li.dataset.key = key;
      ul.appendChild(li);
    });

    const buttonDelete = document.querySelectorAll("ul li button");
    buttonDelete.forEach((button) => {
      button.addEventListener("click", deleteButton);
    });
    span.textContent = toDoList.length;
  }
};

searchInput.addEventListener("input", searchItem);
addTaskButton.addEventListener("click", addTask);
