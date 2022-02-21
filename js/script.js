const km = prompt('Inserisci i kilometri da percorrere:');
const nomePass = prompt('Inserisci il Nome del passeggero:');
const eta = prompt("inserisci l'età del passeggero:");
const costoKm = 0.21;
let costoBiglietto = km * costoKm;
let sconto
let bigliettoScontato
const outputNome = document.getElementById ('nome-pass');
const outputKm = document.getElementById ('km');
const outputSconto = document.getElementById ('sconto');
const outputEuro = document.getElementById ('prezzo');

outputNome.innerHTML = nomePass;
outputKm.innerHTML = km;

if (eta < 18) {
    // costoBiglietto = (costoBiglietto / 100) * 80;
    sconto =  ((costoBiglietto * 20) / 100);
    bigliettoScontato = costoBiglietto - sconto;   

    var Biglietto2Decimali = Math.round((bigliettoScontato + Number.EPSILON) * 100) / 100;
    var sconto2Decimali = Math.round((sconto + Number.EPSILON) * 100) / 100;
    
    outputSconto.innerHTML = `-20% (Minorenni) = ${sconto2Decimali} €`;
    outputEuro.innerHTML = `${Biglietto2Decimali} €`;

} else if (eta >= 65) {
    // costoBiglietto = (costoBiglietto / 100) * 60;
    sconto =  ((costoBiglietto * 40) / 100);
    bigliettoScontato = costoBiglietto - sconto;   

    var Biglietto2Decimali = Math.round((bigliettoScontato + Number.EPSILON) * 100) / 100;
    var sconto2Decimali = Math.round((sconto + Number.EPSILON) * 100) / 100;
    
    outputSconto.innerHTML = `-40% (Over 65) = ${sconto2Decimali} €`;
    outputEuro.innerHTML = `${Biglietto2Decimali} €`;

} else {
    var Biglietto2Decimali = Math.round((costoBiglietto + Number.EPSILON) * 100) / 100;
    outputSconto.innerHTML = `-`;
    outputEuro.innerHTML = `${Biglietto2Decimali} €`;
}

