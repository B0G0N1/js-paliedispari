let string;
let palindromic;
let letters = '0123456789 '; // Caratteri non ammessi
let isValid;

alert("CONTROLLO PAROLA PALINDROMA\nPremi il bottone per procedere");

// Ciclo per assicurarsi che la parola non contenga numeri o spazi (aiutato guardando online)
do {
    isValid = true;
    string = prompt("Inserisci la parola da controllare:").toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (letters.includes(string[i])) {
            isValid = false;
            alert("La parola non deve contenere numeri o spazi. Riprova.");
            break;
        }
    }
} while (!isValid);

// Verifica se la parola è palindroma
palindromic = checkPalindromic(string);

if (palindromic) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}

// Funzione per verificare se una parola è palindroma invertendola
function checkPalindromic(str) {
    let reverseString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }
    return reverseString === str;
}

// Funzione alternativa per verificare se una parola è palindroma
function checkPalindromicBonus(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}