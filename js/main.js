let inputNomePasseggero = document.querySelector('#name');
let inputDistanzaKm = document.querySelector('#count-km');
let inputEtaAnni = document.querySelector('#age');
let graphic = document.querySelector('.cont-img');
let numTreno = document.querySelector('#n-treno');
let carrozza = document.querySelector('#carrozza');

let btnGeneraTicket = document.querySelector('#generate') ;
let btnClearAll = document.querySelector('#clear') ;


btnGeneraTicket.addEventListener('click', function() {
    graphic.classList.add('visible');

    // FUNZIONE NUMERI RANDOM TRENO
    let numTrenoStart = parseInt(1000);
    let numTrenoEnd = parseInt(3000);
    let randomNumberTreno = Math.floor(Math.random() * (numTrenoEnd + 1 - numTrenoStart)) + numTrenoStart;
    document.getElementById ('n-treno').innerHTML = randomNumberTreno;

    // FUNZIONE NUMERI RANDOM CARROZZA
    let numCarrozzaStart = parseInt(1);
    let numCarrozzaEnd = parseInt(20);
    let randomNumberCarrozza = Math.floor(Math.random() * (numCarrozzaEnd + 1 - numCarrozzaStart)) + numCarrozzaStart;
    document.getElementById ('carrozza').innerHTML = randomNumberCarrozza;


    // FUNZIONE CALCOLO
    let distanzaKm = parseFloat(inputDistanzaKm.value);
    let etaAnni = inputEtaAnni.value;
    let nomePasseggero = inputNomePasseggero.value;
    
    const prezzoKm = 0.21;
    let costoBiglietto = distanzaKm * prezzoKm;
    let scontoBiglietto = 0;   

    document.getElementById ('nome-pass').innerHTML = nomePasseggero;
    document.getElementById ('km').innerHTML = distanzaKm;
    let outputSconto = document.getElementById ('sconto');
    let outputEuro = document.getElementById ('prezzo');

    if (isNaN (distanzaKm)) {
        alert('devi inserire un numero');
        location.reload();
    } else {
        if (etaAnni == 'minorenne') {
            scontoBiglietto = ((costoBiglietto *20) / 100);
            costoBiglietto -= scontoBiglietto; 
            scontoBiglietto = Math.round((scontoBiglietto + Number.EPSILON) * 100) / 100;
            outputSconto.innerHTML = `-20% (Minorenni) = ${scontoBiglietto} €`;
        } else if (etaAnni == 'senior') {
            scontoBiglietto = ((costoBiglietto *40) / 100);
            costoBiglietto -= scontoBiglietto;
            scontoBiglietto = Math.round((scontoBiglietto + Number.EPSILON) * 100) / 100;
            outputSconto.innerHTML = `-40% (Over65) = ${scontoBiglietto} €`;
        } else {
            outputSconto.innerHTML = `-`;
        }
    }
    
    costoBiglietto = Math.round((costoBiglietto + Number.EPSILON) * 100) / 100;
    outputEuro.innerHTML = `${costoBiglietto} €`;
});

btnClearAll.addEventListener('click', function() {
    inputNomePasseggero.value = '';
    inputDistanzaKm.value = '';
    inputEtaAnni.value = '';
    graphic.classList.remove('visible');
})


