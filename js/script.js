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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
//  Il programma stampa la somma di tutti i numeri inseriti.


// let result = 0;

// for (let i=1; i <=5; i++){
//     let numero = prompt("inserisci un numero");
//     numero = parseInt(numero);
//     result += numero;
// }

// console.log("il risultato è: "+result);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

// let list = []

// for (let i=1; i <=6; i++){
//     let numero = prompt("inserisci un numero");
//     numero = parseInt(numero);
    
//     if(numero % 2 ===1){
//         list.push(numero);
//     }

// }

// console.log(list);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
//   { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
//   { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
// ]
// Crea un nuovo array con la lista dei mammiferi.

// const animali =[
// { nome: "leone", "famiglia": "felidi", "classe": "mammiferi" },
// { nome: "ane", "famiglia": "canidi", "classe": "mammiferi" },
// { nome: "gallina", "famiglia": "fasianidi", "classe": "uccelli" }, 

// ]

// const mammiferi = animali.filter((tipoAnimale) =>{
//     if(tipoAnimale.classe === "mammiferi"){
//         return true
//     }
// });

// console.log(animali, mammiferi);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.


// const persone = [
// { "nome": "mauro", "cognome": "rossi", "eta": 28 },
// { "nome": "claudio", "cognome": "bianchi", "eta": 17 },
// { "nome": "francesco", "cognome": "verdi", "eta": 50 }, 
// ]

      
// const personeOk = persone.map(element =>{
//     if(element.eta >= 18){
//         return `ciao ${element.nome} ${element.cognome}, puoi guidare`;
//     } else{
//         return `ciao ${element.nome} ${element.cognome}, non puoi guidare`;
//     }
// });

// console.log(personeOk);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
// Infine stampa separatamente i 3 array.


// const cars = [
//     { brand: "Toyota", model: "Camry", fuel: "Gasoline" },
//     { brand: "Honda", model: "Civic", fuel: "Electric" },
//     { brand: "Ford", model: "Focus", fuel: "Hybrid" },
//     { brand: "Chevrolet", model: "Malibu", fuel: "Diesel" },
//     { brand: "Tesla", model: "Model 3", fuel: "Ethanol" },
//     { brand: "Nissan", model: "Altima", fuel: "Gasoline" },
//     { brand: "BMW", model: "3 Series", fuel: "Electric" },
//     { brand: "Mercedes-Benz", model: "C-Class", fuel: "Hybrid" },
//     { brand: "Audi", model: "A4", fuel: "Gasoline" },
//     { brand: "Volkswagen", model: "Passat", fuel: "Diesel" }
// ];

// // Separate arrays for gasoline, diesel, and other fuels
// const gasolineCars = cars.filter(car => car.fuel === "Gasoline");
// const dieselCars = cars.filter(car => car.fuel === "Diesel");
// const otherFuelCars = cars.filter(car => !["Gasoline", "Diesel"].includes(car.fuel));

// // Print the filtered arrays
// console.log("Gasoline Cars:", gasolineCars);
// console.log("Diesel Cars:", dieselCars);
// console.log("Other Fuel Cars:", otherFuelCars);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Dati due array di oggetti che rappresentano parti di una anagrafica di persone (nome, cognome, professione),
// crea un array che contenga tutti gli elementi di entrambi e fai un log di questo ultimo array.


// Dati due array di oggetti che rappresentano parti di una anagrafica di persone (nome, cognome, professione)
const array1 = [
    { nome: 'Topolino', cognome: 'Mouse', professione: 'Ingegnere' },
    { nome: 'Paperino', cognome: 'Duck', professione: 'Medico' },
    { nome: 'Pippo', cognome: 'Goofy', professione: 'Architetto' },
];

console.log(array1);

const array2 = [
    { nome: 'Minnie', cognome: 'Mouse', professione: 'Avvocato' },
    { nome: 'Paperina', cognome: 'Duck', professione: 'Infermiere' },
    { nome: 'Pluto', cognome: 'Dog', professione: 'Docente' },
];

console.log(array2);

// crea un array che contenga tutti gli elementi (con la proprietà spread)
const array3 = [...array1, ...array2];

//fai un log di questo ultimo array.
console.log(array3);