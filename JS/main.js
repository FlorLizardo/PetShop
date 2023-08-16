//Prodotti

const prodotti = [
    //Cani
    {
        id: 'crochette-cane-01',
        titolo: 'Crochette per Cane, Prolife',
        imagine: './CSS/img-cane/crochette-cane.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 20
    },

    {
        id: 'crochette-cane-02',
        titolo: 'Crochette per Cane, Natural Trainer',
        imagine: './CSS/img-cane/crochette-cane-natural.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 22
    },

    {
        id: 'crochette-cane-03',
        titolo: 'Crochette per Cane, Natural Trainer',
        imagine: './CSS/img-cane/crochette-cane-natural-trainer.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 23
    },


    {
        id: 'kit-per-cani',
        titolo: 'Kit di toelettatura per cani',
        imagine: './CSS/img-cane/kit-toelettatura-cani.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 16
    },

    {
        id: 'pettine-bilaterale',
        titolo: 'Pettine bilaterale per cani',
        imagine: './CSS/img-cane/pettine-bilaterale-cane.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 12
    },

    {
        id: 'spazzola-doppia',
        titolo: 'Spazzola doppia per cani',
        imagine: './CSS/img-cane/spazzola-cane-doppia.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 11
    },

    {
        id: 'spazzola-bagno',
        titolo: 'Spazzola da bagno per cani',
        imagine: './CSS/img-cane/spazzola-da-bagno.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 8
    },

    //Gatti

    {
        id: 'crochette-gatto-01',
        titolo: 'Crochette per gatto, Almo Nature',
        imagine: './CSS/img-gatto/crochette-almo-nature-gatto.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 21
    },

    {
        id: 'umido-gatto-01',
        titolo: 'Alimento per gatti, Almo Nature',
        imagine: './CSS/img-gatto/almo-nature-gatto.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 3
    },

    {
        id: 'umido-gatto-02',
        titolo: 'Alimento per gatti, Almo Nature',
        imagine: './CSS/img-gatto/almo-nature-umido-gatto.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 3
    },

    {
        id: 'sabbia-gatto-01',
        titolo: 'Lettiera agglomerante, GreenCat',
        imagine: './CSS/img-gatto/greencat-sabbia-gatti-lettiera-vegenatle-sabbietta.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 15
    },

    {
        id: 'sabbia-gatto-02',
        titolo: 'Lettiera in silica gel, Preziosa',
        imagine: './CSS/img-gatto/lettiera-silicio-preziosa-silica-gel-classica.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 19
    },

    {
        id: 'spazzola-gatto-01',
        titolo: 'Spazzola per gatti',
        imagine: './CSS/img-gatto/spazzola-gatti.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 8
    },

    {
        id: 'spazzola-gatto-02',
        titolo: 'Spazzola per gatti',
        imagine: './CSS/img-gatto/spazzola-gatto.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 6
    },

    //Pesci

    {
        id: 'mangime-pesce-01',
        titolo: 'Mangime per pesci rossi, Tetra',
        imagine: './CSS/img-pesce/tetra-goldfish-1-l-mangime-per-pesci-rossi-.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 5
    },

    {
        id: 'mangime-pesce-02',
        titolo: 'Mangime per pesci, Tetra',
        imagine: './CSS/img-pesce/mangime-per-pesci-02.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 4
    },

    {
        id: 'mangime-pesce-03',
        titolo: 'Bastoncini galleggianti, AllPet Roxana',
        imagine: './CSS/img-pesce/bastoncini-galleggianti-pesci.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 10
    },

    {
        id: 'sabbia-pesce-01',
        titolo: 'Materiale da fondo, Ghiaia Bios',
        imagine: './CSS/img-pesce/sabbia-acquario.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 12
    },

    {
        id: 'acquario-01',
        titolo: 'Acquario per pesci, Nobleza',
        imagine: './CSS/img-pesce/acquario-pesci-nobleza.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 27
    },

    {
        id: 'acquario-02',
        titolo: 'Acquario per pesci, MTB',
        imagine: './CSS/img-pesce/mtb-acquari-cleo-plus.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 31
    },

    //Altri
    {
        id: 'alimento-roditori-01',
        titolo: 'Alimento per roditori, Manitoba',
        imagine: './CSS/img-altri/alimento-roditori.jpg',
        categoria: {
            nome: 'Altri animali',
            id: 'altri'
        },
        prezzo: 6
    },
    
    {
        id: 'alimento-roditori-02',
        titolo: 'Alimento per criceti, Versele Laga',
        imagine: './CSS/img-altri/versele-laga-nature-hamster-alimento-per-criceti-700-gr.jpg',
        categoria: {
            nome: 'Altri animali',
            id: 'altri'
        },
        prezzo: 7
    },

    {
        id: 'crocantini-conigli-01',
        titolo: 'Crocantini per conigli, Versele Laga',
        imagine: './CSS/img-altri/crocantini-per-conigli-adulti.jpg',
        categoria: {
            nome: 'Altri animali',
            id: 'altri'
        },
        prezzo: 6
    },

    //Offerte

];

const containerProdotti = document.querySelector('#container-products');
const bottoniCategorie = document.querySelectorAll('.bottom-category');
const titoloPrincipale = document.querySelector('#titolo-principale');
let bottoniAggiungere = document.querySelectorAll('.prodotto-aggiungere');
const numero = document.querySelector('#numero');

function caricareProdotti(prodottiScelti) {

    containerProdotti.innerHTML = '';
    
    prodottiScelti.forEach(prodotto => {
        const div = document.createElement('div');
        div.classList.add('prodotto');
        div.innerHTML = `
            <img class="prodotto-img" src="${prodotto.imagine}" alt="${prodotto.titolo}">
            <div class="prodotto-dettagli">
                <h3 class="prodotto-titolo">${prodotto.titolo}</h3>
                <p class="prodotto-prezzo">€${prodotto.prezzo}</p>
                <button class="prodotto-aggiungere" id='${prodotto.id}'>Aggiungere</button>
            </div>
        `;

        containerProdotti.append(div);
    });
    aggiornareBottoniAggiungere();
}

caricareProdotti(prodotti);

bottoniCategorie.forEach(bottone => {
    bottone.addEventListener('click', (e) =>{

        bottoniCategorie.forEach(bottone => bottone.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id != 'tutti') {
            const prodottiCategoria = prodotti.find(prodotto => prodotto.categoria.id === e.currentTarget.id);
            titoloPrincipale.innerText = prodottiCategoria.categoria.nome;

            const prodottiBottone = prodotti.filter(prodotto => prodotto.categoria.id ===e.currentTarget.id);
            caricareProdotti(prodottiBottone);
        } else {
            titoloPrincipale.innerText = 'Tutti i prodotti';
            caricareProdotti(prodotti);
        }
    })
});

function aggiornareBottoniAggiungere() {
    bottoniAggiungere = document.querySelectorAll('.prodotto-aggiungere');

    bottoniAggiungere.forEach(bottone =>
        bottone.addEventListener('click', aggiungereCarrello));
}

let prodottiCarrello;
let prodottiCarrelloLS = localStorage.getItem('prodotti-in-carrello');


if (prodottiCarrelloLS) {
    prodottiCarrello = JSON.parse(prodottiCarrelloLS);
    aggiornareNumero();
} else {
    prodottiCarrello = [];
}


function aggiungereCarrello(e) {

    const idBottone = e.currentTarget.id;
    const prodottoAggiunto = prodotti.find(prodotto => prodotto.id === idBottone);

    if(prodottiCarrello.some(prodotto => prodotto.id === idBottone)) {
        const index = prodottiCarrello.findIndex(prodotto => prodotto.id === idBottone);
        prodottiCarrello[index].quantita++;
    } else {
        prodottoAggiunto.quantita = 1;
        prodottiCarrello.push(prodottoAggiunto);
    }

    aggiornareNumero();

    localStorage.setItem('prodotti-in-carrello', JSON.stringify(prodottiCarrello));
}

function aggiornareNumero() {
    let nuevoNumero = prodottiCarrello.reduce((acc, prodotto) => acc + prodotto.quantita, 0);
    numero.innerText = nuevoNumero;
}

