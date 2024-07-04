// let pronostic;
// let oddEven;

// // Chiedi il pronostico all'utente finché non inserisce un valore valido
// do {
//     pronostic = prompt("Inserisci il pronostico (pari o dispari):").toLowerCase();
//     if (pronostic !== "pari" && pronostic !== "dispari") {
//         alert('Il pronostico deve essere "pari" o "dispari"');
//     }
// }
// while (pronostic !== "pari" && pronostic !== "dispari");

// let userRoll;

// // Chiedi il numero del dado all'utente finché non inserisce un valore valido
// do {
//     userRoll = parseInt(prompt("Inserisci il numero del dado (da 1 a 6):"));
//     if (isNaN(userRoll) || userRoll < 1 || userRoll > 6) {
//         alert('Il numero deve essere compreso tra 1 e 6');
//     }
// }
// while (isNaN(userRoll) || userRoll < 1 || userRoll > 6);

// // Genera numero pc con funzione e stampa
// let computerRoll = randomDiceRoll();
// alert(`Il computer ha giocato ${computerRoll}`);

// // Somma risultati dadi e controlla pari e dispari
// let diceSum = userRoll + computerRoll;
// oddEven = checkEvenOdd(diceSum);


// // Verifica se il pronostico dell'utente è corretto
// if (pronostic === oddEven) {
//     alert("HAI VINTO !!!");
// } else {
//     alert("HAI PERSO ...");
// }

// // Funzione per generare un numero casuale tra 1 e 6
// function randomDiceRoll() {
//     return Math.floor(Math.random() * 6) + 1;
// }

// // Funzione per controllare se un numero è pari o dispari
// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         return "pari";
//     } else {
//         return "dispari";
//     }
// }





let string;
let palindromic;
let letters = '0123456789 ';
let isValid;

// FOR per verificare che la parola non contenga spazi, mi sono aiutato guardando online
do {
    isValid = true;
    string = prompt("Inserisci la parola da controllare:").toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (letters.includes(string[i])) {
            isValid = false;
            alert("La parola non deve contenere numeri o spazi. Riprova.");
        }
    }
} while (!isValid);

palindromic = checkPalindromic(string);

if (palindromic) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}

function checkPalindromic(str) {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString === str;
}


function checkPalindromicBonus(str) {
    let check = true;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            check = false;
            break;
        }
    }
    return check;
}
