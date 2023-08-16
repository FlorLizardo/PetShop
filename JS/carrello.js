let prodottiCarrello = localStorage.getItem('prodotti-in-carrello');
prodottiCarrello = JSON.parse(prodottiCarrello);


const contenedorCarrelloVuoto = document.querySelector('#container-carrello-vuoto');
const containerProdotti = document.querySelector('#carrello-prodotti');
const containerCarrelloAzioni = document.querySelector('#carrello-azioni');
const containerCarrelloCompra = document.querySelector('#carrello-compra');
let bottoniEliminare = document.querySelectorAll('.carrello-prodotto-eliminare');
const bottoneSvuotare = document.querySelector('#carrello-azioni-svuotare')
const bottoneTotale = document.querySelector('#total');
const bottoneComprare = document.querySelector('#carrello-azioni-comprare');

function caricareProdotti() {
    if(prodottiCarrello && prodottiCarrello.length > 0) {

        contenedorCarrelloVuoto.classList.add('disabled');
        containerProdotti.classList.remove('disabled');
        containerCarrelloAzioni.classList.remove('disabled');
        containerCarrelloCompra.classList.add('disabled');
    
        containerProdotti.innerHTML = '';
    
        prodottiCarrello.forEach(prodotto => {
    
            const div = document.createElement('div');
            div.classList.add('carrello-prodotto');
            div.innerHTML = `
                <img class="carrello-prodotto-img" src="${prodotto.imagine}" alt='${prodotto.titolo}'>
                <div class="carrello-prodotto-titolo">
                    <small class="small">Nome</small>
                    <h3 class="prodotto-titolo">${prodotto.titolo}</h3>
                </div>
                <div class="prodotto-carrello-quantita">
                    <small class="small">Quantità</small>
                    <p>${prodotto.quantita}</p>
                </div>
                <div class="carrello-prodotto-prezzo">
                    <small class="small">Prezzo</small>
                    <p>$${prodotto.prezzo}</p>
                </div>
                <div class="carrello-prodotto-subtotal">
                    <small class="small">Subtotal</small>
                    <p>$${prodotto.prezzo * prodotto.quantita}</p>
                </div>
                <button class="carrello-prodotto-eliminare" id='${prodotto.id}'><i class="bi bi-trash-fill"></i></button>
            `;
    
            containerProdotti.append(div);
        });
    
    } else {
        contenedorCarrelloVuoto.classList.remove('disabled');
        containerProdotti.classList.add('disabled');
        containerCarrelloAzioni.classList.add('disabled');
        containerCarrelloCompra.classList.add('disabled');
    }

    aggiornareBottoniEliminare();
    aggiornareTotale();
}

caricareProdotti();


function aggiornareBottoniEliminare() {
    bottoniEliminare = document.querySelectorAll('.carrello-prodotto-eliminare');

    bottoniEliminare.forEach(bottone => {
        bottone.addEventListener('click', eliminareDelCarrello);

    })
}

function eliminareDelCarrello(e) {
    const idBottone = e.currentTarget.id;
    const index = prodottiCarrello.findIndex(prodotto => prodotto.id === idBottone);
    
    prodottiCarrello.splice(index, 1);
    caricareProdotti();

    localStorage.setItem('prodotti-in-carrello', JSON.stringify(prodottiCarrello));
}

bottoneSvuotare.addEventListener('click', svuotareCarrello);
function svuotareCarrello () {
    prodottiCarrello.length = 0;
    localStorage.setItem('prodotti-in-carrello', JSON.stringify(prodottiCarrello));
    caricareProdotti();
}

function aggiornareTotale() {
    const totaleCalcolato = prodottiCarrello.reduce((acc, prodotto) => acc + (prodotto.prezzo * prodotto.quantita), 0);
    total.innerText = `€${totaleCalcolato}`;
}

bottoneComprare.addEventListener('click', comprareCarrello);
function comprareCarrello () {
    prodottiCarrello.length = 0;
    localStorage.setItem('prodotti-in-carrello', JSON.stringify(prodottiCarrello));
   
    contenedorCarrelloVuoto.classList.add('disabled');
    containerProdotti.classList.add('disabled');
    containerCarrelloAzioni.classList.add('disabled');
    containerCarrelloCompra.classList.remove('disabled');
}