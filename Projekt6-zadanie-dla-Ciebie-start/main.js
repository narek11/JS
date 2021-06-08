document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".add");
  const input = document.querySelector("input");
  const resetButton = document.querySelector(".clean");
  const showButton = document.querySelector(".showOptions");
  const showAdviceButton = document.querySelector(".showAdvice");
  const h1 = document.createElement("h1");
  let possibilites = ["ja", "ty"];

  const addWish = (e) => {
    e.preventDefault();
    if (input.value.length) {
      for (name of possibilites) {
        if (name === input.value) {
          alert("juz jest");
        }
      }
      possibilites.push(input.value);
      input.value = "";
      console.log(possibilites);
    } else {
      alert("puste pole lub dana wartosc juz jest");
    }
  };

  const reset = (e) => {
    e.preventDefault();
    possibilites = [];
    console.log(possibilites);
  };

  const showOptions = (e) => {
    e.preventDefault;
    alert(`mozliwosci do wylosowania to ${possibilites}`);
  };

  const showAdvice = (e) => {
    e.preventDefault;
    let index = Math.floor(Math.random() * (possibilites.length - 0 + 1) + 0);
    let value = possibilites[index];

    document.body.appendChild(h1);
    h1.textContent = value;
  };

  resetButton.addEventListener("click", reset);
  addButton.addEventListener("click", addWish);
  showButton.addEventListener("click", showOptions);
  showAdviceButton.addEventListener("click", showAdvice);
});
