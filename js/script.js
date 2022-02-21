const km = prompt('Inserisci i kilometri da percorrere:');
const eta = prompt("inserisci l'età del passeggero:");
const costoKm = 0.21;
let costoBiglietto = km * costoKm;
let sconto 

if (eta < 18) {
    // costoBiglietto = (costoBiglietto / 100) * 80;
    sconto =  ((costoBiglietto * 20) / 100);
    costoBiglietto = costoBiglietto - sconto;    
} else if (eta > 65) {
    // costoBiglietto = (costoBiglietto / 100) * 60;
    sconto =  ((costoBiglietto * 40) / 100);
    costoBiglietto = costoBiglietto - sconto;    
} 

var Biglietto2Decimali = Math.round((costoBiglietto + Number.EPSILON) * 100) / 100;
const outputEuro = document.getElementById ('costo-finale');
outputEuro.innerHTML = 'Il prezzo totale del viaggio è di ' + Biglietto2Decimali + ' €';