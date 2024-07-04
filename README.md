<!-------------------------
    CONSEGNA ESERCIZIO
-------------------------->
Ciao ragazzi, Esercizio di oggi:
nome repo: js-paliedispari
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Numero di push: 10 circa minimo
Errori da evitare
1 - Non effettuare la chiamata di funzione;
2 - Effettuare la chiamata di funzione in un console.log o in un alert ed assegnarlo ad una variabile
3 - Se la funzione ha il return non assegnare la chiamata di funzione ad una variabile
Consigli del giorno
1.  Scriviamo sempre in italiano i passaggi che vogliamo fare
2.  Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento!



<!-----------------------------------
    PSEUDO-CODICE PARI & DISPARI
------------------------------------>
1.  Inizializza la variabile "oddEven"
2.  Entra in un ciclo Do, While finchè non gli viene assegnato un valore stringa in input "pari" o "dispari" (+ setLowerChar)
3.  Inizializza una variabile "userNumber"
4.  Entra in un ciclo Do,While finchè non gli viene assegnato un valore in input pari a un numero da 1 a 6
5.  Richiama la funzione "randomDiceNumber" per generare un valore random da 1 a 6 e assegnarlo a "pcNumber"
6.  Inizializza una variabile "diceSum" e dagli valore "userNumber" + "pcNumber"
7.  Richiama la funzione "CheckEvenOdd" e passagli la "diceSum"
8.  Stampa a schermo "result"

0.  Creare una funzione "randomDiceNumber"
    1.  Genera un numero casuale da 1 a 6
0.  Creare una funzione "CheckWinner"
    1.  SE 