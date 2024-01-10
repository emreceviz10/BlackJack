let firstCard = 1;
let seconCard = 11;
let cards = [firstCard, seconCard];
let sum = firstCard + seconCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = `Cards: ${cards[0]} & ${cards[1]}`;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You've got BlackJack!";
    hasBlackJack = true;
  } else {
    message = "You've lost the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 5;
  sum += card;
  renderGame();
}
