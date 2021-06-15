// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/
const hands = [...document.querySelectorAll("img")];
const playButton = document.querySelector(".start");

const gameSummary = {
  number: 0,
  winds: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
};

const playerChose = (e) => {
  hands.forEach((hand) => {
    hand.style.boxShadow = "";
  });
  e.target.style.boxShadow = "0 0 0 4px red";
  game.playerHand = e.target.dataset.option;
};

const aiChose = () => {
  let index = Math.floor(Math.random() * hands.length);
  game.aiHand = hands[index].dataset.option;
  console.log(game.aiHand);
};

const showResults = () => {
  document.querySelector('[data-summary="your-choice"]').textContent =
    game.playerHand;
  document.querySelector('[data-summary="ai-choice"]').textContent =
    game.aiHand;
  document.querySelector('[data-summary = "who-win"]').textContent = whoWin();
};

const whoWin = () => {
  let ai = game.aiHand;
  let human = game.playerHand;
  if (human === ai) {
    return "Remis";
  } else if (
    (human === "papier" && ai === "kamień") ||
    (human === "kamień" && ai === "nożyczki") ||
    (human === "nożyczki" && ai === "papier")
  ) {
    return "Wygrałes";
  } else {
    return ":(";
  }
};

const playFunction = () => {
  aiChose();

  showResults();
};

hands.forEach((hand) => {
  hand.addEventListener("click", playerChose);
});

playButton.addEventListener("click", playFunction);

// // Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

// const gameSummary = {
//   numbers: 0,
//   wins: 0,
//   losses: 0,
//   draws: 0,
//  }

//  const game = {
//   playerHand: "",
//   aiHand: "",
//  }

//  const hands = [...document.querySelectorAll('.select img')];

//  // Pierwsza funkcja
//  function handSelection() {

//   game.playerHand = this.dataset.option
//   console.log(game.playerHand);
//   hands.forEach(hand => hand.style.boxShadow = '');
//   this.style.boxShadow = '0 0 0 4px red';
//  }

//  // const handSelection = (e) => {
//  //  // this - nie tworzy
//  //  console.log(e.target);
//  //  console.log(e.currentTarget);
//  // }

//  // Funkcja określająca wybór komputera
//  function aiChoice() {
//   return hands[Math.floor(Math.random() * 3)].dataset.option;
//  }

//  // Funkcja zwracajająca informacje o wyniku gry
//  function checkResult(player, ai) {
//   // console.log(player, ai);
//   if (player === ai) {
//    return 'draw';
//   } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
//    return 'win';
//   } else { return 'loss'; }
//  }

//  // Publikacja wyniku

//  function publishResult(player, ai, result) {
//   document.querySelector('[data-summary="your-choice"]').textContent = player;

//   document.querySelector('[data-summary="ai-choice"]').textContent = ai;

//   document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

//   if (result === "win") {
//    document.querySelector('p.wins span').textContent = ++gameSummary.wins;
//    document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś!!!!"
//    document.querySelector('[data-summary="who-win"]').style.color = "green";
//   } else if (result === "loss") {
//    document.querySelector('p.losses span').textContent = ++gameSummary.losses;
//    document.querySelector('[data-summary="who-win"]').textContent = "Komputer wygrał :("
//    document.querySelector('[data-summary="who-win"]').style.color = "red";
//   } else {
//    document.querySelector('p.draws span').textContent = ++gameSummary.draws;
//    document.querySelector('[data-summary="who-win"]').textContent = "Remis :\\"
//    document.querySelector('[data-summary="who-win"]').style.color = "gray";
//   }
//  }

//  function endGame() {
//   document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
//   game.playerHand = "";
//   game.aiHand = "";
//  }
//  //funkcja sterująca
//  function startGame() {
//   if (!game.playerHand) {
//    return alert("wybierz dłoń!!!!");
//   }
//   game.aiHand = aiChoice();
//   const gameResult = checkResult(game.playerHand, game.aiHand);
//   console.log(gameResult);
//   publishResult(game.playerHand, game.aiHand, gameResult);
//   endGame()
//  }

//  hands.forEach(hand => hand.addEventListener('click', handSelection))

//  document.querySelector('.start').addEventListener('click', startGame)
