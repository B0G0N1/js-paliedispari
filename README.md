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
1.  Inizializza la variabile "pronostic"
2.  Entra in un ciclo Do, While finchè non gli viene assegnato un valore stringa in input "pari" o "dispari" (+ setLowerChar)
3.  Inizializza una variabile "userNumber"
4.  Entra in un ciclo Do,While finchè non gli viene assegnato un valore in input pari a un numero da 1 a 6
5.  Richiama la funzione "randomDiceNumber" per generare un valore random da 1 a 6 e assegnarlo a "pcNumber"
6.  Inizializza una variabile "diceSum" e dagli valore "userNumber" + "pcNumber"
7.  Richiama la funzione "CheckEvenOdd" e passagli la "diceSum"
8.  SE "pronostic" === "oddEven"
        ALLORA  Stampa a schermo "Hai vinto !!!"
        ALTRIMENTI  Stampa a schermo "Hai perso ..."


0.  Creare una funzione "randomDiceNumber"
    1.  Genera un numero casuale da 1 a 6
0.  Creare una funzione "CheckEvenOdd"
    1.  Prendi in input "num" ("oddEven")
    2.  Inizializza "OddEven"
    3.  SE num % 2 === 0
            ALLORA  "oddEven" = "pari"
            ALTRIMENTI  "oddEven" = "dispari"
    4. Return "oddEven"




<!------------------------------
    PSEUDO-CODICE PALINDROMA
-------------------------------->
1.  Inizializza la variabile "string"
2.  Inizializza la variabile "palindromic"
2.  Entra in un ciclo Do, While finchè non gli viene assegnato un valore stringa senza spazi e numeri (+ setLowerChar)
    1. Con un if (+ includes) ?
3.  Controllare se la parola è palindroma con la funzione "checkPalindromic"
4.  SE "palindromic" === true
        ALLORA alert("La parola "str" è palindroma")
        ALTRIMENTI alert("La parola "str" non è palindroma")


0.  Creare una funzione "checkPalindromic"
    1. Prendi in input "str" ("palindromicWord")
    2. Crea una variabile "reverseString"
    3.  Ciclo la parola string (FOR)
        1.  Aggiungo a "reverseString" lettera per lettera di "string" ma invertite
    4.  SE Confronto "string" con "reverseString"
            ALLORA "palindromic" = true;
            ALTRIMENTI "palindromic" = false;

<!-- Devo visualizzare il codice per decidere come procedere -->
for (let i = str.lenght; i > 0; i--)
    reverseString.push(str.lenght[i]);



<!-- bonus checkPalindromicString-->
DIVIDO A META LA STRINGA E CONTROLLO LE LETTERE PARTENDO DA INIZIO E FINE

check = true;
for (let i = 0; i <= str.length/2; i++) {
    if (str[i] != str[str.length-i])
        check = false;
}
return check;