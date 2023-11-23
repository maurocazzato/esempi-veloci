// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// chiedo il primo numero
// const numberUno = parseInt(prompt("inserisci un numero"));
// console.log(numberUno);

// // chiedo il secondo numero
// const numberDue = parseInt(prompt("inserisci un numero"));
// console.log(numberDue);

// // il software stampa il maggiore
// if (numberUno > numberDue){
//     console.log("il numero aggiore :" + numberUno);
    
// }else{
//     console.log("il numero aggiore :" + numberDue);
// }




// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// user iserisce la prima parola
// const first = prompt("Inserisci una parola");
// console.log(first);

// // user iserisce la prima parola
// const second = prompt("Inserisci una parola");
// console.log(second);

// if (first.length === second.length){
//     alert("le parole sono lunghe uguali");
// }else if (first.length > second.length){
//     console.log(first + " è più lunga di " + second);

// }else{
//     console.log(second + " è più lunga di " + first);
// }



// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//  Il programma stampa la somma di tutti i numeri inseriti.


// let result = 0;

// for (let i=1; i <=5; i++){
//     let numero = prompt("inserisci un numero");
//     numero = parseInt(numero);
//     result += numero;
// }

// console.log("il risultato è: "+result);


// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

let list = []

for (let i=1; i <=6; i++){
    let numero = prompt("inserisci un numero");
    numero = parseInt(numero);
    
    if(numero % 2 ===1){
        list.push(numero);
    }

}

console.log(list);