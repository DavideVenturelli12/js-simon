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

const arrayNumber = 5;

ArrayGenerator(arrayNumber);

function ArrayGenerator(arrayNumber) {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 50 + 1));
        const cella = creaCella();
        cella.innerText = array[i];
        container.appendChild(cella);
    }
    console.log(array);
}

function creaCella() {
    const cella = document.createElement('div');
    cella.classList.add('cella');
    return cella;
}


let max = 30;

const timer = document.getElementById('timer');
timer.innerText = max;

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