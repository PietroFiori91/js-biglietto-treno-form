// const kmPercorsi = prompt("Inserisci i chilometri da percorrere.");

// OPZIONE 1

// const anniPasseggero = prompt("Inserisci la tua età.");

// OPZIONE 2

// const userYearOfBirth = prompt("In che anno sei nato?");
// const currentDate = new Date();
// const userAge = currentDate.getFullYear() - parseInt(userYearOfBirth);

// console.log("l'utente ha " + userAge + " anni.");

// prezzo biglietto 

// const prezzoBiglietto = (kmPercorsi * 0.21).toFixed(2);

// GLI IF E GLI ELSE



// innerhtml

// const sconto20 = (prezzoBiglietto * 20) / 100;
// const noSconto = prezzoBiglietto;
// const sconto40 = (prezzoBiglietto * 40) / 100;

// const finalPriceMinor = prezzoBiglietto - sconto20.toFixed(2);
// const finalPriceMajor = prezzoBiglietto - sconto40.toFixed(2);
// const finalPriceFull = prezzoBiglietto;

// document.getElementById("prezzofinale").innerHTML = finalPriceMinor

// document.getElementById("prezzofinale").innerHTML = finalPriceMajor

// document.getElementById("prezzofinale").innerHTML = finalPriceFull


// _______________________________________________________


const usernameInputElement = document.querySelector("[name='username']");
const kmInputElement = document.querySelector("[name='kmpercorsi']");
const etàInputElement = document.querySelector("[name='etàpasseggero']");

const btnGenera = document.querySelector(".btn-genera");

btnGenera.addEventListener("click", function() {
    console.log("click");

    const username = usernameInputElement.value;
    const km = parseInt(kmInputElement.value);
    const età = parseInt(etàInputElement.value);

    const prezzoBiglietto = (km * 0.21).toFixed(2);
    const sconto20 = (prezzoBiglietto * 20) / 100;
    const noSconto = prezzoBiglietto;
    const sconto40 = (prezzoBiglietto * 40) / 100;

    let sconto=0

    if (età < 18) {
        sconto = (prezzoBiglietto * 20) / 100;
        console.log("L'utente ha diritto a " + sconto.toFixed(2) + " Euro di sconto");
        document.getElementById("username-biglietto").innerHTML = username
        document.getElementById("costo-finale-biglietto").innerHTML = sconto20
    } else if (età >= 18 && età < 65) {
        sconto = 0;
        console.log("L'utente non ha diritto ad alcuno sconto");
        document.getElementById("username-biglietto").innerHTML = username
        document.getElementById("costo-finale-biglietto").innerHTML = noSconto
    } else {
        sconto = (prezzoBiglietto * 40) / 100;
        console.log("L'utente ha diritto a " + sconto.toFixed(2) + " Euro di sconto");
        document.getElementById("username-biglietto").innerHTML = username
        document.getElementById("costo-finale-biglietto").innerHTML = sconto40
    }

    const finalPrice = (prezzoBiglietto - sconto).toFixed(2);
    console.log("Prezzo del biglietto: " + finalPrice + " Euro");
});