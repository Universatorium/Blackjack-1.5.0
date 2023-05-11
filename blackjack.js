let deck = [];
let userCards = [];
let computerCards = [];
let userPoints = 0;
let computerPoints = 0;
let message = "";

const gameArea = document.getElementById("game-area");
const userArea = document.getElementById("user-area");
const computerArea = document.getElementById("computer-area");
const userCardsEl = document.getElementById("user-cards");
const computerCardsEl = document.getElementById("computer-cards");
const userPointsEl = document.getElementById("user-points");
const computerPointsEl = document.getElementById("computer-points");
const playButton = document.getElementById("play-button");
const messageEl = document.getElementById("message");
const resetButton = document.getElementById("reset-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");

playButton.addEventListener("click", startGame);
hitButton.addEventListener("click", hit);
standButton.addEventListener("click", stand);
resetButton.addEventListener("click", resetGame);

// Erstellt ein Deck mit allen Karten und fügt es zur deck-Variable hinzu
function createDeck() {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const symbols = ["♠", "♥", "♦", "♣"];

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < symbols.length; j++) {
      deck.push({ value: values[i], symbol: symbols[j] });
    }
  }
}

// Misch das Deck
function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
  }
}

// Zieht eine Karte vom Deck und fügt sie zum Spieler hinzu
function drawCard(player) {
  player.push(deck.shift());
}

// Berechnet die Punkte des Spiels
function calculatePoints(player) {
  let points = 0;
  let aces = 0;
  for (let card of player) {
    switch (card.value) {
      case "A":
        points += 11;
        aces++;
        break;
      case "J":
      case "Q":
      case "K":
        points += 10;
        break;
      default:
        points += card.value;
    }
  }
  while (points > 21 && aces > 0) {
    points -= 10;
    aces--;
  }
  return points;
}

// Beginnt das Spiel und gibt dem Nutzer und dem Computer jeweils zwei Karten
function startGame() {
  createDeck();
  shuffleDeck();

  drawCard(userCards);
  drawCard(userCards);
  drawCard(computerCards);
  // drawCard(computerCards);

  userPoints = calculatePoints(userCards);
  computerPoints = calculatePoints(computerCards);

  userCardsEl.textContent = userCards.map(card => `${card.symbol}${card.value}`).join(" ");
  computerCardsEl.textContent = `${computerCards[0].symbol}${computerCards[0].value} ?`;

  userPointsEl.textContent = userPoints;
  computerPointsEl.textContent = "";

  hitButton.disabled = false;
  standButton.disabled = false;
  playButton.disabled = true;

  messageEl.textContent = "";
}

// Fügt dem Nutzer eine Karte hinzu und berechnet seine Punkte
function hit() {
  drawCard(userCards);
  userPoints = calculatePoints(userCards);
  userCardsEl.textContent = userCards.map(card => `${card.symbol}${card.value}`).join(" ");
  userPointsEl.textContent = userPoints;

  if (userPoints > 21) {
    message = "Du Verlierst!";
    endGame();
  }
}

// Der Nutzer bleibt stehen und der Computer zieht Karten bis er mindestens 17 Punkte hat
function stand() {
  hitButton.disabled = true;
  standButton.disabled = true;
  while (computerPoints < 17) {
    drawCard(computerCards);
    computerPoints = calculatePoints(computerCards);
    computerCardsEl.textContent = computerCards.map(card => `${card.symbol}${card.value}`).join(" ");
    computerPointsEl.textContent = computerPoints;
  }

  if (computerPoints > 21 || userPoints > computerPoints) {
    message = "Du Gewinnst!";
  } else if (userPoints < computerPoints) {
    message = "Du Verlierst!";
  } else {
    message = "Es ist Unentschieden!";
  }

  endGame();

}

function displayResults(ergebnisse) {
  const ergebnisseEl = document.getElementById("ergebnisse");
  ergebnisseEl.innerHTML = "<h2>Letzte Spiele:</h2>";

  for (let i = 0; i < ergebnisse.length; i++) {
    const spiel = ergebnisse[i];
    const spielEl = document.createElement("div");
    spielEl.innerHTML = "Spiel " + (i + 1) + ": " + spiel.userCards.map(card => `${card.symbol}${card.value}`).join(" ") + " gegen " + spiel.computerCards.map(card => `${card.symbol}${card.value}`).join(" ") + ". Ergebnis: " + spiel.userPoints + " - " + spiel.computerPoints + ". Gewinner: " + spiel.gewinner;
    ergebnisseEl.appendChild(spielEl);
  }
}



// Beendet das Spiel und sperrt die Buttons
function endGame() {
  hitButton.disabled = true;
  standButton.disabled = true;
  playButton.disabled = true;

  messageEl.textContent = message;

  // Das Ergebnis in das Array eintragen
let ergebnisse = JSON.parse(localStorage.getItem('ergebnisse')) || [];
ergebnisse.unshift({
  computerCards: computerCards,
  userCards: userCards,
  computerPoints: computerPoints,
  userPoints: userPoints,
  gewinner: (userPoints > computerPoints && userPoints <=21) ? 'Du' : (userPoints > 21 || userPoints < computerPoints && computerPoints <= 21) ? 'Computer' : 'Unentschieden'
});

// Array auf maximal 12 Einträge begrenzen
ergebnisse = ergebnisse.slice(0, 12);

// Ergebnisse im localStorage speichern
localStorage.setItem('ergebnisse', JSON.stringify(ergebnisse));

// Ergebnisse auf der Seite anzeigen
displayResults(ergebnisse);

}

// Setzt das Spiel zurück
function resetGame() {
  userCardsEl.innerHTML = "";
  computerCardsEl.innerHTML = "";

  deck = [];
  userCards = [];
  computerCards = [];
  userPoints = 0;
  computerPoints = 0;

  messageEl.textContent = "";
  userPointsEl.textContent = "";
  computerPointsEl.textContent = "";

  playButton.disabled = false;
  hitButton.disabled = true;
  standButton.disabled = true;
}
