let pronostico;
let pariDispari;

alert("GIOCO DEI DAI\nPremi il bottone per procedere");

// Chiedi il pronostico all'utente finché non inserisce un valore valido
do {
    pronostico = prompt("Inserisci il pronostico (pari o dispari):").toLowerCase();
    if (pronostico !== "pari" && pronostico !== "dispari") {
        alert('Il pronostico deve essere "pari" o "dispari"');
    }
} while (pronostico !== "pari" && pronostico !== "dispari");

let lancioUtente;

// Chiedi il numero del dado all'utente finché non inserisce un valore valido
do {
    lancioUtente = parseInt(prompt("Inserisci il numero del dado (da 1 a 6):"));
    if (isNaN(lancioUtente) || lancioUtente < 1 || lancioUtente > 6) {
        alert('Il numero deve essere compreso tra 1 e 6');
    }
} while (isNaN(lancioUtente) || lancioUtente < 1 || lancioUtente > 6);

// Genera numero pc con funzione e stampa
let lancioComputer = randomDiceRoll();
alert(`Il computer ha giocato ${lancioComputer}`);

// Somma risultati dadi e controlla pari e dispari
let sommaDadi = lancioUtente + lancioComputer;
pariDispari = controllaPariDispari(sommaDadi);

// Verifica se il pronostico dell'utente è corretto
if (pronostico === pariDispari) {
    alert("HAI VINTO !!!");
} else {
    alert("HAI PERSO ...");
}

// Funzione per generare un numero casuale tra 1 e 6
function randomDiceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

// Funzione per controllare se un numero è pari o dispari
function controllaPariDispari(num) {
    if (num % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}