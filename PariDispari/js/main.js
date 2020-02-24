/*
prompt ---> “scegli Pari o Dispari”     --------> ES: Pari
prompt ---> “Scegli un numero da 1 a 5”         --------> ES: 5
creo un numero RANDOM da 1-5              --------> ES: 10
10 + 5 = 15 è un numero DISPARI
log     -------->   Spiacente, hai scelto PARI, ma la somma del tuo numero e del mio numero random ha restituito un numero DISPARI, hai perso!!!
*/

var pariDispari = prompt("Pari o Dispari?");
console.log(pariDispari);
var numeroUtente = parseInt(prompt("Scegli un numero"));
console.log(numeroUtente);


var numero = generaRandomMinMax(1,5);
console.log(numero);
if ((numero + numeroUtente) % 2 != 0) {
    console.log("Spiacente, hai scelto " + pariDispari + " ma la somma del tuo numero e del mio numero random ha restituito un numero DISPARI, hai perso!!!" );
} else {
    console.log("Hai vinto!");
}


function generaRandomMinMax(min,max) { //funzione che genera un numero random tra due valori dati in ingresso MIN e Max
    var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min; // variabile globale
    return numeroRandom;
}
