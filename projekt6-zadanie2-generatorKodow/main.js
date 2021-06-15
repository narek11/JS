const chars = "ABCDEFGIJK0123456789";

const btn = document.querySelector("button");
const section = document.querySelector("section");

const codesNumber = 10;
const charsNumbers = 10;

const codesGeneretor = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let i = 0; i < charsNumbers; i++) {
      //   code += i;
      let index = Math.floor(Math.random() * chars.length);
      code += chars[index];
    }
    const div = document.createElement("div");
    div.textContent = code;
    document.body.appendChild(div);
  }
};

btn.addEventListener("click", codesGeneretor);
