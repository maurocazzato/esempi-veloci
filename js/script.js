// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// chiedo il primo numero
const numberUno = prompt("inserisci un numero");
console.log(numberUno);

// chiedo il secondo numero
const numberDue = prompt("inserisci un numero");
console.log(numberDue);

// il software stampa il maggiore
if (numberUno > numberDue){
    console.log(numberUno);
    
}else{
    console.log(numberDue);
}