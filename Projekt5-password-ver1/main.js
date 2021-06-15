document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const div = document.querySelector("div");
  const passwords = ["user", "wiosna"];
  const messages = ["wyjechałem", "elo"];

  input.addEventListener("input", (e) => {
    // console.log(e.target.value);

    const text = e.target.value;

    passwords.forEach((password, i) => {
      if (password === text) {
        div.textContent = messages[i];
      }
    });
  });

  input.addEventListener("focus", () => {
    input.style.backgroundColor = "black";
    input.style.color = "white";
  });

  input.addEventListener("blur", () => {
    input.style.backgroundColor = "white";
    input.style.color = "black";
  });
});

// if (password === e.target.value) {
//   div.textContent = message;
//   e.target.value = "";
// } else {
//   div.textContent = "";
// }
