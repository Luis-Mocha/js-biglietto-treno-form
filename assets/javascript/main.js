const form = document.querySelector('#form')
let ticketDiv = document.querySelector('#ticketDiv')

let nameUser = document.querySelector('#form-name').value
let surnameUser = document.querySelector('#form-surname').value

// Funzione per generare un numero casuale dato un massimo
function getRandomIntMax(max) {
    return Math.floor(Math.random() * max + 1);
}

// Funzione per generare un numero casuale dato un min e un max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// FORM EVENT
form.addEventListener('submit', function (invioForm) {
    //Evito che si ricarichi il sito
    invioForm.preventDefault();

    // Ottenre nome e cognome
    let nameUser = document.querySelector('#form-name').value;
    let surnameUser = document.querySelector('#form-surname').value;
    let userInfo = nameUser + ' ' + surnameUser;
    // ottenere i valore di numero km
    let numberKms = parseFloat(document.querySelector('#form-km-number').value);
    // Ottenere il valore della sezione select
    let selectDiscount = document.getElementById('form-sconto').value;

    //  calcolare il prezzo base per km
    let pricePerKm = numberKms * 0.21;

    console.log(numberKms, pricePerKm, selectDiscount);

    // calcolare il prezzo finale
    if (selectDiscount == 'under18') {

        finalPrice = pricePerKm * 0.8;
        discountInfo = 'Biglietto Under 18';

    } else if (selectDiscount == 'over65') {

        finalPrice = pricePerKm  * 0.6;
        discountInfo = 'Biglietto Over 65';

    } else {
        finalPrice = pricePerKm;
        discountInfo = 'Biglietto Standard';

    };

    // numero carrozza
    let randomCarrozza = getRandomIntMax(10)
    //numero Codice Cp
    let randomCodiceCp = getRandomIntInclusive(10000, 99000)


    // funzione per gnerare il prezzo in html
    function displayPrice( ) {
        ticketDiv.innerHTML =
        `
        <h2 class="text-center text-light text-uppercase mb-3">
            il tuo biglietto
        </h2>
        <!-- card biglietto-->
        <div class="bg-light p-3">
            <span class="text-uppercase fw-semibolb d-block mb-2">dettaglio passeggeri</span>
            <!-- Biglietto Info -->
            <div class="d-flex flex-column flex-md-row text-center">
                <!-- sezione nome biglietto-->
                <div class="bg-secondary text-light d-flex flex-column p-3">
                    <span class="text-uppercase">
                        nome passeggero
                    </span>
                    <span class="fs-3 text-capitalize">
                        ${userInfo}
                    </span>
                </div>
                <!-- sezione info viaggio -->
                <div class="border d-flex flex-column flex-md-row flex-fill justify-content-between p-3">
                    <!-- 1 -->
                    <div class="info-offerta d-flex flex-column my-3 align-content-between">
                        <span class="title-info fw-semibold">
                            Offerta
                        </span>
                        <span class="dato-info">
                            ${discountInfo}
                        </span>
                    </div>
                    <!-- 2 -->
                    <div class="info-carrozza d-flex flex-column my-3">
                        <span class="title-info fw-semibold">
                            Carrozza
                        </span>
                        <span class="dato-info">
                            ${randomCarrozza}
                        </span>
                    </div>
                    <!-- 3 -->
                    <div class="info-codicecp d-flex flex-column my-3">
                        <span class="title-info fw-semibold">
                            Codice CP
                        </span>
                        <span class="dato-info">
                            ${randomCodiceCp}
                        </span>
                    </div>
                    <!-- 4 -->
                    <div class="info-costo d-flex flex-column my-3">
                        <span class="title-info fw-semibold">
                            Costo Biglietto
                        </span>
                        <span class="dato-info fs-4 fw-bold text-danger">
                            ${finalPrice.toFixed(2)} &euro;
                        </span>
                    </div>
                </div>

            </div>
        </div>
        `
    };

    displayPrice();

    // animazione treno brutta 
    let trenoAnimation = document.querySelector('#treno-animation')
    trenoAnimation.classList.remove('d-none')

});


// Tasto per resettare il form
const resetButton = document.querySelector('#reset-button')

resetButton.addEventListener('click', function resetForm(params) {
    form.reset ();
})
