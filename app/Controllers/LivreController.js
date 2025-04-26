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
    async FiltrerParCategorie (catgorie){
        try{
            const Filtrer = await Book.Filtrage('categorie_id' ,catgorie);
            console.log('test');
            return Filtrer;
        }
        catch(err){
            console.log('test error');
            return false
        }
    }
}

const filtrer = new LivreController;
filtrer.FiltrerParCategorie(1);

module.exports = LivreController;