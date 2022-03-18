//debug
console.log('JS OK!')

/*
CONSEGNA:

- Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

-Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto 
precedentemente, tramite il prompt().

- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei 
numeri da indovinare sono stati individuati.
*/



const container = document.getElementById('container');

//determino una variabile con il numero di valori che andranno inserinti nell'array
const arrayNumber = 5;

//definisco un array vuoto per i numeri generati
let randomNumberArray = [];

//definisco la funzione per generare i numeri randomici
ArrayGenerator(arrayNumber);

//eseguo la funzione che genera 5 numeri randomi e li inserisce nell'array
function ArrayGenerator(arrayNumber) {

    for (let i = 0; i < 5; i++) {
        //pusho i valori generari all'interno dell'array
        randomNumberArray.push(Math.floor(Math.random() * 50 + 1));
        //definisco la funzione per la creazione della cella
        const cella = creaCella();
        //inserico i ciascun valore all'interno della cella
        cella.innerText = randomNumberArray[i];
        //inserisco le celle create all'inerno del div #container
        container.appendChild(cella);
    }
    //stampo i valori dell'array generati
    console.log(randomNumberArray);
    return (randomNumberArray);
}

//eseguo la funzione per la creazione della cella
function creaCella() {
    const cella = document.createElement('div');
    cella.classList.add('cella');
    return cella;
}

//definisco una variabile di appoggio per i secondi
let max = 30;

//inserisco il valore all'interno del div
const timer = document.getElementById('timer');
timer.innerText = max;

//imposto ogni quanto far ripetere la funzione
const number = setInterval(myFunctionInterval, 1000); // verrà eseguito ogni secondo (1000ms)

function myFunctionInterval() {
    max--;
    timer.innerText = max;
    //console.log(max);
    if (max <= 0) {
        // cancello il setInterval
        clearInterval(number);
        timer.innerText = 'Tempo scaduto';
    }
}

//definisco un array vuoto per i numeri inseriti dall'utente
let arrayUserNumbers = [];

//do un delay alla funzione per dare il tempo all'utente di memorizzare i numeri generatri
setTimeout(askFiveNumber, 31000);

//eseguo la funzione chiedendo all'utente di inserire 5 numeri
function askFiveNumber() {

    for (let i = 0; i < 5; i++) {
        userNumbers = parseInt(prompt(`${i + 1} - Inserisci i numeri visti in precedenza`));
        //impossto una condizione a while nella quale, finche i valori inseriti non sono dei numeri,
        //chiede di inserire il numero
        while (isNaN(userNumbers)) {
            userNumbers = parseInt(prompt(`${i + 1} - Inserisci i numeri visti in precedenza`));
        }
        //pusho i valori generari all'interno dell'array
        arrayUserNumbers.push(userNumbers);
    }
    console.log(arrayUserNumbers);
    return (arrayUserNumbers);
}

