const { render } = require('ejs');

const Livre = require('../Models/Livre');

const Book = new Livre;
class LivreController {

   
    async ListesLivres(req, res) {
        try {
            const Livresliste = await Book.All();

            console.log(Livresliste.length);

            res.render('ListeLivres.ejs', { Livres: Livresliste });
        } catch (err) {
            console.error('Error fetching books:', err);
            res.status(500).send('Internal Server Error');
        }
    }
    async FiltrerParCategorie (categorie){
        try{
            const Filtrer = await Book.find(categorie);
        }

    }
}


module.exports = LivreController;