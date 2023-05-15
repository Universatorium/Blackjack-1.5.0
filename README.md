Blackjack-Spiel README
Dies ist ein JavaScript-Code für ein einfaches Blackjack-Spiel. Das Spiel wird im Browser gespielt und ermöglicht es dem Benutzer, gegen den Computer zu spielen.

Funktionen des Spiels
Das Spiel verfügt über die folgenden Funktionen:

Initialisierung der Variablen und Konstanten: Zu Beginn des Spiels werden verschiedene Variablen und Konstanten initialisiert, um den Spielzustand zu verfolgen, z. B. das Deck, die Karten der Spieler, die Punkte der Spieler und die Spielermeldungen.

Event-Listener für Buttons: Es werden Event-Listener für die verschiedenen Buttons im Spiel hinzugefügt, wie "Play", "Hit", "Stand" und "Reset". Diese Listener rufen entsprechende Funktionen auf, um das Spiel zu steuern.

Erstellen des Decks: Die Funktion createDeck() erstellt ein Deck mit allen Karten, die für das Spiel benötigt werden. Es werden alle möglichen Kombinationen von Werten (2-10, J, Q, K, A) und Symbolen (♠, ♥, ♦, ♣) durchlaufen und dem Deck hinzugefügt.

Mischen des Decks: Die Funktion shuffleDeck() mischt das Deck, indem sie die Positionen der Karten im Deck zufällig vertauscht. Dadurch wird sichergestellt, dass die Karten für jedes Spiel in einer zufälligen Reihenfolge gezogen werden.

Ziehen einer Karte: Die Funktion drawCard(play) zieht eine Karte vom Deck und fügt sie dem übergebenen Spieler (play) hinzu. Dabei wird die erste Karte aus dem Deck entfernt und dem Spieler hinzugefügt.

Berechnen der Punkte: Die Funktion calculatePoints(play) berechnet die Punkte eines Spielers. Sie durchläuft alle Karten im Spiel und weist den entsprechenden Punktwerten entsprechende Werte zu. Dabei werden Ass-Karten speziell behandelt, da sie entweder den Wert 1 oder 11 haben können. Die Funktion berücksichtigt auch die Möglichkeit, dass der Spieler Asse hat und mehr als 21 Punkte hat, indem sie den Wert des Asses auf 1 reduziert.

Start des Spiels: Die Funktion startGame() initialisiert das Spiel, indem sie das Deck erstellt, es mischt, die Karten an den Spieler und den Computer verteilt und die Punkte berechnet. Sie zeigt auch die Anfangskarten und Punkte des Spielers an. Der Benutzer kann das Spiel starten, indem er den "Play" -Button klickt.

Ziehen einer weiteren Karte: Die Funktion hit() ermöglicht es dem Benutzer, eine weitere Karte zu ziehen. Dabei wird eine Karte vom Deck gezogen und dem Spieler hinzugefügt. Die Punkte des Spielers werden neu berechnet und die Karten und Punkte werden aktualisiert. Wenn der Spieler mehr als 21 Punkte hat, endet das Spiel.

Stehen bleiben: Die Funktion stand() lässt den Benutzer stehen bleiben und zieht Karten für den Computer, bis er mindestens 17 Punkte hat. Dann wird das Ergebnis des Spiels basierend auf den Punkten beider Spieler bestimmt und angezeigt.

Beenden des Spiels: Die Funktion endGame() beendet das Spiel und zeigt das Endergebnis an. Sie deaktiviert auch die Schaltflächen "Hit" und "Stand", um weitere Aktionen des Benutzers zu verhindern.

Zurücksetzen des Spiels: Die Funktion resetGame() setzt das Spiel auf den Anfangszustand zurück. Sie löscht alle Karten, setzt die Punkte zurück, mischt das Deck erneut und ermöglicht dem Benutzer, ein neues Spiel zu starten.

Anzeige von Spielermeldungen: Die Funktion showMessage(message, type) zeigt dem Benutzer verschiedene Meldungen im Spiel an, z. B. Gewinn, Verlust oder Unentschieden. Die Meldung und der Meldungstyp werden übergeben, und die entsprechende Meldung wird auf dem Bildschirm angezeigt.

Ändern des Spieler- und Computerbildes basierend auf der erreichten Punktzahl, sowie eine Sprachausgabe basierend auf dem Spielergebnis sind ebenso implementiert. (Funktion speech() )

Anleitung zum Ausführen des Spiels
Um das Spiel auszuführen, öffnen Sie die index.html-Datei in einem Webbrowser, der JavaScript unterstützt. Sobald die Seite geladen ist, sehen Sie das Spielfeld und die verschiedenen Buttons.

Klicken Sie auf den "Play" -Button, um das Spiel zu starten. Verwenden Sie dann die Buttons "Hit" und "Stand", um Entscheidungen während des Spiels zu treffen. Die Punkte und Karten beider Spieler werden angezeigt, und das Endergebnis wird am Ende des Spiels angezeigt.

Sie können das Spiel jederzeit zurücksetzen, indem Sie den "Reset" -Button klicken.

Lizenz
Dieser Code ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der LICENSE-Datei.

Autoren
Dieses Spiel wurde von uns entwickelt.

Wir hoffen, dass Sie das Blackjack-Spiel genießen! Bei Fragen oder Feedback stehen wir Ihnen gerne zur Verfügung. Viel Spaß beim Spielen!
