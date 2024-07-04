let pronostic;

do {
    pronostic = prompt("Inserisci il pronostico (pari o dispari):").toLowerCase();
    if (pronostic !== "pari" && pronostic !== "dispari") {
        alert('Il prompt deve essere "pari" o "dispari"');
    }
}
while (pronostic !== "pari" && pronostic !== "dispari");

let userRoll;

do {
    userRoll = prompt("Inserisci il numero del dado (da 1 a 6):");
    if (isNaN(userRoll) || userRoll < 1 || userRoll > 6) {
        alert('Il prompt deve essere un numero deve essere da 1 a 6');
    }
}
while (isNaN(userRoll) || userRoll < 1 || userRoll > 6);

let computerRoll = randomDiceRoll();

let diceSum = parseInt(userRoll) + parseInt(computerRoll);

checkEvenOdd(diceSum);

if (pronostic === oddEven) {
    alert("Vittoria");
}
else {
    alert("Vgwergwgittoria");
}

alert(`Tu hai giocato ${userRoll}, il pc ha giocato ${computerRoll}, la somma è ${diceSum} che è ${oddEven}, e tu hai pronosticato ${pronostic}`);










function randomDiceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        oddEven = "pari";
    }
    else {
        oddEven = "dispari";
    }
    return oddEven;
}