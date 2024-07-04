let pronostic;

do {
    pronostic = prompt("Inserisci il pronostico (pari o dispari):").toLowerCase();
    
    if (pronostic !== "pari" && pronostic !== "dispari")
    {
        alert('Deve essere "pari" o "dispari".');
    }
    
}
while (pronostic !== "pari" && pronostic !== "dispari");
