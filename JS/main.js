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
        titolo: 'Crochette per Cane, Natural Trainer tonno e riso',
        imagine: './CSS/img-cane/crochette-cane-natural.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 22
    },

    {
        id: 'crochette-cane-03',
        titolo: 'Crochette per Cane, Natural Trainer pollo fresco e riso',
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
        prezzo: 12.30
    },

    {
        id: 'spazzola-doppia',
        titolo: 'Spazzola doppia per cani',
        imagine: './CSS/img-cane/spazzola-cane-doppia.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 11.50
    },

    {
        id: 'spazzola-bagno',
        titolo: 'Spazzola da bagno per cani',
        imagine: './CSS/img-cane/spazzola-da-bagno.jpg',
        categoria: {
            nome: 'Cani',
            id: 'cani'
        },
        prezzo: 8.20
    },

    //Gatti

    {
        id: 'crochette-gatto-01',
        titolo: 'Crochette per gatto, Almo Nature pollo e tachino',
        imagine: './CSS/img-gatto/crochette-almo-nature-gatto.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 21.40
    },

    {
        id: 'umido-gatto-01',
        titolo: 'Alimento per gatti, Almo Nature sterilised',
        imagine: './CSS/img-gatto/almo-nature-gatto.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 3.20
    },

    {
        id: 'umido-gatto-02',
        titolo: 'Alimento per gatti, Almo Nature con tonno',
        imagine: './CSS/img-gatto/almo-nature-umido-gatto.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 3.10
    },

    {
        id: 'sabbia-gatto-01',
        titolo: 'Lettiera vegetale agglomerante, GreenCat',
        imagine: './CSS/img-gatto/greencat-sabbia-gatti-lettiera-vegenatle-sabbietta.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 15.60
    },

    {
        id: 'sabbia-gatto-02',
        titolo: 'Lettiera in silica gel, Preziosa',
        imagine: './CSS/img-gatto/lettiera-silicio-preziosa-silica-gel-classica.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 19.45
    },

    {
        id: 'spazzola-gatto-01',
        titolo: 'Spazzola per gatti',
        imagine: './CSS/img-gatto/spazzola-gatti.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 8.20
    },

    {
        id: 'spazzola-gatto-02',
        titolo: 'Spazzola per gatti',
        imagine: './CSS/img-gatto/spazzola-gatto.jpg',
        categoria: {
            nome: 'Gatti',
            id: 'gatti'
        },
        prezzo: 6.30
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
        prezzo: 5.60
    },

    {
        id: 'mangime-pesce-02',
        titolo: 'Mangime per pesci, Tetra',
        imagine: './CSS/img-pesce/mangime-per-pesci-02.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 4.20
    },

    {
        id: 'mangime-pesce-03',
        titolo: 'Bastoncini galleggianti per pesci da laghetto, AllPet Roxana',
        imagine: './CSS/img-pesce/bastoncini-galleggianti-pesci.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 10.20
    },

    {
        id: 'sabbia-pesce-01',
        titolo: 'Materiale da fondo per acquario, Ghiaia Bios',
        imagine: './CSS/img-pesce/sabbia-acquario.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 12.30
    },

    {
        id: 'acquario-01',
        titolo: 'Acquario per pesci, Nobleza',
        imagine: './CSS/img-pesce/acquario-pesci-nobleza.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 27.70
    },

    {
        id: 'acquario-02',
        titolo: 'Acquario per pesci, MTB',
        imagine: './CSS/img-pesce/mtb-acquari-cleo-plus.jpg',
        categoria: {
            nome: 'Pesci',
            id: 'pesci'
        },
        prezzo: 31.20
    },

    //Altri
    {
        id: 'alimento-roditori-01',
        titolo: 'Alimento per roditori, Manitoba',
        imagine: './CSS/img-altri/alimento-roditori.jpg',
        categoria: {
            nome: 'Altri',
            id: 'altri'
        },
        prezzo: 6.30
    },
    
    {
        id: 'alimento-roditori-02',
        titolo: 'Alimento per criceti, Versele Laga',
        imagine: './CSS/img-altri/versele-laga-nature-hamster-alimento-per-criceti-700-gr.jpg',
        categoria: {
            nome: 'Altri',
            id: 'altri'
        },
        prezzo: 7.10
    },

    {
        id: 'crocantini-conigli-01',
        titolo: 'Crocantini per conigli, Versele Laga',
        imagine: './CSS/img-altri/crocantini-per-conigli-adulti.jpg',
        categoria: {
            nome: 'Altri',
            id: 'altri'
        },
        prezzo: 6.30
    },

    //Offerte

];

const containerProdotti = document.querySelector('#container-products');

function caricareProdotti() {
    prodotti.forEach(prodotto => {
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
    })
}

caricareProdotti();