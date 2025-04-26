const { format } = require('mysql');
const db = require('../../db');

class Emprunt {

    constructor(id_devlopeur, id_livre, date_entprunter, date_retourne, date_retourne_reel) {
        this.id_devlopeur = id_devlopeur;
        this.id_livre = id_livre;
        this.date_entprunter = date_entprunter;
        this.date_retourne = date_retourne;
        this.date_retourne_reel = date_retourne_reel;
    }

    async create(id_devlopeur, id_livre) {
        const date_entprunter = new Date();  // Get the current date and time
        
        // Create a new date for `date_retourne` by adding 15 days
        let dateRetourne = new Date(date_entprunter);
        dateRetourne.setDate(dateRetourne.getDate() + 15);
        
        // Format the dates to match your SQL format (YYYY-MM-DD HH:MM:SS)
        const formattedDateEntprunter = date_entprunter.toISOString().slice(0, 19).replace('T', ' ');
        const formattedDateRetourne = dateRetourne.toISOString().slice(0, 19).replace('T', ' ');
    
        try {
            // Pass the formatted dates to the db.create function
            const result = await db.create('emprunts', {
                id_devlopeur,
                id_livre,
                date_entprunter: formattedDateEntprunter,
                date_retourne: formattedDateRetourne
            });
            console.log('Le user a emprunté un livre ', result);
            return result;
        } catch (err) {
            console.log('Il y a un problème, l\'utilisateur ne prend pas le livre', err);
            return false;
        }
    }
    
    




}

const emprunt = new Emprunt();

module.exports = Emprunt;