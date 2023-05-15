# Blackjack-Spiel

Dies ist ein JavaScript-Code für ein einfaches Blackjack-Spiel. Das Spiel wird im Browser gespielt und ermöglicht es dem Benutzer, gegen den Computer zu spielen.

## Funktionen des Spiels

Das Spiel verfügt über die folgenden Funktionen:

- Initialisierung der Variablen und Konstanten: Zu Beginn des Spiels werden verschiedene Variablen und Konstanten initialisiert, um den Spielzustand zu verfolgen, z. B. das Deck, die Karten der Spieler, die Punkte der Spieler und die Spielermeldungen.

- Event-Listener für Buttons: Es werden Event-Listener für die verschiedenen Buttons im Spiel hinzugefügt, wie "Play", "Hit", "Stand" und "Reset". Diese Listener rufen entsprechende Funktionen auf, um das Spiel zu steuern.

- Erstellen des Decks: Die Funktion `createDeck()` erstellt ein Deck mit allen Karten, die für das Spiel benötigt werden. Es werden alle möglichen Kombinationen von Werten (2-10, J, Q, K, A) und Symbolen (♠, ♥, ♦, ♣) durchlaufen und dem Deck hinzugefügt.

- Mischen des Decks: Die Funktion `shuffleDeck()` mischt das Deck, indem sie die Positionen der Karten im Deck zufällig vertauscht. Dadurch wird sichergestellt, dass die Karten für jedes Spiel in einer zufälligen Reihenfolge gezogen werden.

- Ziehen einer Karte: Die Funktion `drawCard(play)` zieht eine Karte vom Deck und fügt sie dem übergebenen Spieler (`play`) hinzu. Dabei wird die erste Karte aus dem Deck entfernt und dem Spieler hinzugefügt.

- Berechnen der Punkte: Die Funktion `calculatePoints(play)` berechnet die Punkte eines Spielers. Sie durchläuft alle Karten im Spiel und weist den entsprechenden Punktwerten entsprechende Werte zu. Dabei werden Ass-Karten speziell behandelt, da sie entweder den Wert 1 oder 11 haben können. Die Funktion berücksichtigt auch die Möglichkeit, dass der Spieler Asse hat und mehr als 21 Punkte hat, indem sie den Wert des Asses auf 1 reduziert.

- Start des Spiels: Die Funktion `startGame()` initialisiert das Spiel, indem sie das Deck erstellt, es mischt, die Karten an den Spieler und den Computer verteilt und die Punkte berechnet. Sie zeigt auch die Anfangskarten und Punkte des Spielers an. Der Benutzer kann das Spiel starten, indem er den "Play"-Button klickt.

- Ziehen einer weiteren Karte: Die Funktion `hit()` ermöglicht es dem Benutzer, eine weitere Karte zu ziehen. Dabei wird eine Karte vom Deck gezogen und dem Spieler hinzugefügt. Die Punkte des Spielers werden neu berechnet und die Karten und Punkte werden aktualisiert. Wenn der Spieler mehr als 21 Punkte hat, endet das Spiel.

- Stehen bleiben: Die Funktion `stand()` lässt den Benutzer stehen bleiben und zieht Karten für den Computer, bis er mindestens 17 Punkte hat. Dann wird das Ergebnis des Spiels basierend auf den Punkten beider Spieler bestimmt und angezeigt.

- Beenden des Spiels: Die Funktion endGame() beendet das Spiel und zeigt das Endergebnis an. Sie deaktiviert auch die Schaltflächen "Hit" und "Stand", um weitere Aktionen des Benutzers zu verhindern.

- Zurücksetzen des Spiels: Die Funktion resetGame() setzt das Spiel auf den Anfangszustand zurück. Sie löscht alle Karten, setzt die Punkte zurück, mischt das Deck erneut und ermöglicht dem Benutzer, ein neues Spiel zu starten.

- Anzeige von Spielermeldungen: Die Funktion showMessage(message, type) zeigt dem Benutzer verschiedene Meldungen im Spiel an, z. B. Gewinn, Verlust oder Unentschieden. Die Meldung und der Meldungstyp werden übergeben, und die entsprechende Meldung wird auf dem Bildschirm angezeigt.

- Ändern des Spieler- und Computerbildes basierend auf der erreichten Punktzahl: Funktionen zum Aktualisieren der Bilder für den Spieler und den Computer, basierend auf ihren Punktzahlen im Spiel.

- Sprachausgabe basierend auf dem Spielergebnis: Die Funktion speak() gibt eine Sprachausgabe basierend auf dem Spielergebnis aus.

Anleitung zum Ausführen des Spiels
Um das Spiel auszuführen, öffnen Sie die index.html-Datei in einem Webbrowser, der JavaScript unterstützt. Sobald die Seite geladen ist, sehen Sie das Spielfeld und die verschiedenen Buttons.

Klicken Sie auf den "Play"-Button, um das Spiel zu starten. Verwenden Sie dann die Buttons "Hit" und "Stand", um Entscheidungen während des Spiels zu treffen. Die Punkte und Karten beider Spieler werden angezeigt, und das Endergebnis wird am Ende des Spiels angezeigt.

Sie können das Spiel jederzeit zurücksetzen, indem Sie den "Reset"-Button klicken.

Für genauere Erläuterungen beachten Sie bitte die Kommentare im Code:

// Initialisieren der Variablen und Konstanten
// Eine leere Liste deck wird erstellt, welche später alle Karten beinhalten wird
let deck = [];
// Die Listen userCards und computerCards werden initialisiert, um die Karten der Spieler zu speichern
let userCards = [];
let computerCards = [];
// userPoints und computerPoints werden initialisiert, um die Punkte der Spieler zu speichern
let userPoints = 0;
let computerPoints = 0;
// message wird initialisiert, um Meldungen an den Benutzer anzuzeigen
let message = "";
let message2= "";

// gameArea wird initialisiert und die Elemente userArea, computerArea, userCardsEl, computerCardsEl, userPointsEl, computerPointsEl, playButton, messageEl, resetButton, hitButton und standButton werden initialisiert
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
const defaultPitch = 0; // Standard-Tonhöhe
const defaultRate = 0.7; // Standard-Sprachgeschwindigkeit

// Fügt Event-Listener zu den Buttons hinzu
// Wenn der Button "Play" geklickt wird, wird die Funktion startGame ausgeführt
playButton.addEventListener("click", startGame);
// Wenn der Button "Hit" geklickt wird, wird die Funktion hit ausgeführt
hitButton.addEventListener("click", hit);
// Wenn der Button "Stand" geklickt wird, wird die Funktion stand ausgeführt
standButton.addEventListener("click", stand);
// Wenn der Button "Reset" geklickt wird, wird die Funktion resetGame ausgeführt
resetButton.addEventListener("click", resetGame);

// Erstellt ein Deck mit allen Karten und fügt es zur deck-Variable hinzu
function createDeck() {
  // Die Arrays values und symbols werden definiert
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const symbols = ["♠", "♥", "♦", "♣"];

  // Schleife durchläuft alle Kombinationen von values und symbols und fügt sie zum Deck hinzu
  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < symbols.length; j++) {
      deck.push({ symbol: symbols[j], value: values[i] });
    }
  }
}

// Misch das Deck
function shuffleDeck() {
  // Schleife durchläuft alle Karten im Deck und tauscht sie mit einer zufälligen Karte im Deck aus
  for (let i = 0; i < deck.length; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
  }
}

// Zieht eine Karte vom Deck und fügt sie zum Spieler hinzu
function drawCard(play) {
  // Entferne die erste Karte aus dem Deck und füge sie zum Spieler hinzu
  play.push(deck.shift());
}

// Berechnet die Punkte des Spiels
function calculatePoints(play) {
  let points = 0;
  let aces = 0;
  // Schleife durchlaufe alle Karten im Spiel und berechne die Punkte
  for (let card of play) {
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
  // Wenn der Spieler Asse hat und mehr als 21 Punkte, dann wird der Wert des Asses auf 1 reduziert
  while (points > 21 && aces > 0) {
    points -= 10;
    aces--;
  }
  // Rückgabe der Punkte
  return points;
}

// Beginnt das Spiel und gibt dem Nutzer und dem Computer jeweils zwei Karten
function startGame() {
  // resetButton.disabled = true

  // Erstelle ein Deck mit allen Karten
  createDeck();
  // Mische das Deck
  shuffleDeck();

  // Teile dem Spieler zwei Karten und dem Computer eine Karte aus
  drawCard(userCards);
  drawCard(userCards);
  drawCard(computerCards);
  // drawCard(computerCards); // Zweite Karte entfernt um einen Anzeigefehler zu vermeiden

  // Berechne die Punkte des Spielers und des Computers
  userPoints = calculatePoints(userCards);
  computerPoints = calculatePoints(computerCards);

  // Zeige die Karten des Spielers an und verstecke eine Karte des Computers
  userCardsEl.textContent = userCards.map(card => `${card.symbol}${card.value}`).join(" ");
  computerCardsEl.textContent = `${computerCards[0].symbol}${computerCards[0].value} ?`;

  // Zeige die Punkte des Spielers an und verstecke die Punkte des Computers
  userPointsEl.textContent = userPoints;
  computerPointsEl.textContent = "";
  
 

  // Aktiviere die Buttons "Hit" und "Stand", deaktiviere den Button "Play"
  resetButton.disabled = true;
  hitButton.disabled = false;
  standButton.disabled = false;
  playButton.disabled = true;
 
  if(userPoints === 21){
    hitButton.disabled = true;
    standButton.disabled = true;
    computerPointsEl.textContent = computerPoints;
    message = "Deine Ausbildung ---- beendet sie ist!"
    message2 = "JACKPOT!!!";
    updateSpielerBild(userPoints);
    resetButton.disabled = false; //zur Präsentation entfernen

    endGame();
  }


}
  // Sprich die Meldungen aus
  speak(message);
  // Setze die Meldungen zurück
  messageEl.textContent = "";

// Fügt dem Nutzer eine Karte hinzu und berechnet seine Punkte
function hit() {
  // Ziehe eine Karte und füge sie zum Spieler hinzu

  drawCard(userCards);
  // Berechne die Punkte des Spielers
  userPoints = calculatePoints(userCards);
  // Zeige die Karten und Punkte des Spielers an
  userCardsEl.textContent = userCards.map(card => `${card.symbol}${card.value}`).join(" ");
  userPointsEl.textContent = userPoints;

  // Wenn der Spieler mehr als 21 Punkte hat, ist das Spiel vorbei und er hat verloren
  if (userPoints > 21) {
    message = "Noch viel lernen Du musst, junger Paadawan!";
    message2 = "Nicht so gierig!";
    resetButton.disabled = false
    endGame();
  }
}

// Der Nutzer bleibt stehen und der Computer zieht Karten bis er mindestens 17 Punkte hat
function stand() {
  // Deaktiviere die Buttons "Hit" und "Stand"
  hitButton.disabled = true;
  standButton.disabled = true;

  // Der Computer zieht Karten, bis er mindestens 17 Punkte hat
  while (computerPoints < 17) {
    drawCard(computerCards);
    computerPoints = calculatePoints(computerCards);
    computerCardsEl.textContent = computerCards.map(card => `${card.symbol}${card.value}`).join(" ");
    computerPointsEl.textContent = computerPoints;
  }

  // Wenn der Spieler 21 Punkte hat oder der Spieler mehr Punkte hat als der Computer, hat der Spieler gewonnen
  if(userPoints < 10){
    message = "Echt jetzt? Hast Du das Spiel überhaupt verstanden?;"
    message2 = "Kann mal Jemand einen Arzt rufen?";
  }
  else if (computerPoints > 21 || userPoints > computerPoints) {
    message = "Du Gewinnst! Aber bedenke: Glück ist Nichts - im Vergleich zu der Macht!";
    message2 = "GEWONNEN!";
    updateComputerBild(computerPoints);
    updateSpielerBild(userPoints);
    updateScore("win"); // ruft die funktion updateScore auf und übergibt den String "win" als Argument
  }
  // Wenn der Spieler weniger Punkte hat als der Computer, hat er verloren
  else if (userPoints < computerPoints) {
    message = "Du Verlierst, aber gewinnst an Erfahrung";
    message2 = "Loooooser!!!";
    updateComputerBild(computerPoints);
  }
    // Wenn beide Spieler die gleiche Anzahl von Punkten haben, ist das Spiel unentschieden

  else if (userPoints === computerPoints && userPoints === 21) {
    message = "die Antwort auf die Frage nach dem Leben, dem Universum und dem ganzen Rest";
    message2 = "!!!42!!!";
  }
  else {
    message = "Max! Ich bin dein Vater!";
    message2 = "Man weiß es nicht ...";
  }
  resetButton.disabled = false

  // Beendet das Spiel und sperrt die Buttons
  endGame();
}
function displayResults(ergebnisse) {
  const ergebnisseEl = document.getElementById("ergebnisse");
  ergebnisseEl.innerHTML = "<h3>Spielverlauf:</h3>";

  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  let rowIndex = 0;
  let cellIndex = 0;

  for (let i = 0; i < ergebnisse.length; i++) {
    const spiel = ergebnisse[i];

    if (cellIndex === 0) {
      const row = document.createElement("tr");
      tbody.appendChild(row);
      rowIndex++;
    }

    const spielEl = document.createElement("td");
    spielEl.textContent = "Spiel " + (i + 1) + ": " + spiel.userCards.map(card => `${card.symbol}${card.value}`).join(" ") + " gegen " + spiel.computerCards.map(card => `${card.symbol}${card.value}`).join(" ") + ". Ergebnis: " + spiel.userPoints + " - " + spiel.computerPoints + ". Gewinner: " + spiel.gewinner;
    tbody.children[rowIndex - 1].appendChild(spielEl);

    cellIndex++;
    if (cellIndex === 2) {
      cellIndex = 0;
    }
  }

  ergebnisseEl.appendChild(table);
}

// Funktion zum Ändern des Computer-Bildes basierend auf den Punkten
function updateComputerBild(computerPoints) {
  const computerBild = document.getElementById("computer-bild");

  if (computerPoints > 21) {
    computerBild.src = "img/dv2.png";
    computerBild.alt = "Bild 1";
  } 
  else if (computerPoints === 21){
    computerBild.src = "img/200w.webp";
    computerBild.alt = "Bild 3";
  }
  else {
    computerBild.src = "img/dv.png";
    computerBild.alt = "Bild 3";
  }
}
// Funktion zum Ändern des Spieler-Bildes basierend auf den Punkten
function updateSpielerBild(userPoints) {
  const userBild = document.getElementById("user-bild");

  if (userPoints === 21) {
    userBild.src = "img/giphy.webp";
    userBild.alt = "Bild 1";

  } else {
    userBild.src = "img/luke2.png";
    userBild.alt = "Bild 3";
  }
}


// Beendet das Spiel und sperrt die Buttons
function endGame() {
  // Deaktiviere die Buttons "Hit" , "Play" und "Stand"
  hitButton.disabled = true;
  standButton.disabled = true;
  playButton.disabled = true;

function speak(text) {
    const message = new SpeechSynthesisUtterance(text);
    message.pitch = defaultPitch;
    message.rate = defaultRate;
    window.speechSynthesis.speak(message);
  }

  // Sprich die Meldungen aus
  speak(message);

  // Zeige die Meldungen an
  messageEl.textContent = message2;

    // Das Ergebnis in das Array eintragen
let ergebnisse = JSON.parse(localStorage.getItem('ergebnisse')) || [];
ergebnisse.unshift({
  computerCards: computerCards,
  userCards: userCards,
  computerPoints: computerPoints,
  userPoints: userPoints,
  gewinner: (userPoints > computerPoints && userPoints <=21 || computerPoints > 21) ? 'Du' : (userPoints > 21 || userPoints < computerPoints && computerPoints <= 21) ? 'Computer' : 'Unentschieden'
});

// Array auf maximal 30 Einträge begrenzen
ergebnisse = ergebnisse.slice(0, 20);

// Ergebnisse im localStorage speichern
localStorage.setItem('ergebnisse', JSON.stringify(ergebnisse));

// Ergebnisse auf der Seite anzeigen
displayResults(ergebnisse);
}

// Setzt das Spiel zurück
function resetGame() {
  // Löscht die Karten des Spielers und des Computers
  userCardsEl.innerHTML = "";
  computerCardsEl.innerHTML = "";

  // Setzt alle Variablen und Konstanten zurück
  deck = [];
  userCards = [];
  computerCards = [];
  userPoints = 0;
  computerPoints = 0;
  updateComputerBild(computerPoints);
  updateSpielerBild(userPoints);


  // Setze die Meldungen und Punkte zurück
  messageEl.textContent = "";
  userPointsEl.textContent = "";
  computerPointsEl.textContent = "";

  // Aktiviert den Button "Play" und deaktiviert die Buttons "Hit" und "Stand"
  playButton.disabled = false;
  hitButton.disabled = true;
  standButton.disabled = true;

}
function loeschen() {
  const ergebnisseEl = document.getElementById('ergebnisse');

  let ergebnisse = []; // Leere das Array
  ergebnisseEl.innerHTML = ''; // Leere den Inhalt des Elements

  // Ergebnisse im localStorage speichern
  localStorage.setItem('ergebnisse', JSON.stringify(ergebnisse));
}

// Diese Funktion nimmt das Ergebnis des Spiels als Parameter und gibt eine Punktzahl zurück.
function score(result) {
  if (result === "win") { // Wenn das Ergebnis "win" ist,
    return 1; // gibt die Funktion 1 zurück.
  } else { // Andernfalls,
    return 0; // gibt die Funktion 0 zurück.
  }
}

// Diese Funktion nimmt das Ergebnis des Spiels als Parameter und aktualisiert die Punktzahl auf der Webseite.
function updateScore(result) {
  const scoreEl = document.getElementById("ergebnis"); // Holt das Element mit der ID "ergebnis".
  const currentScore = parseInt(scoreEl.textContent); // Wandelt den Textinhalt des Elements in eine Zahl um und speichert ihn in der Variable "currentScore".
  const newScore = currentScore + score(result); // Berechnet die neue Punktzahl, indem die aktuelle Punktzahl und die Punktzahl des Spiels addiert werden.
  scoreEl.textContent = newScore; // Aktualisiert den Textinhalt des Elements mit der neuen Punktzahl.
}

