const connection = require('../../db');

class Developer {
  constructor() {
    if (!connection) {
      throw new Error('La connexion à la base de données a échoué');
    }
    this.db = connection;
  }

  create(name, password) {
    const query = 'INSERT INTO devlopeurs (name, password) VALUES (?, ?)';

    this.db.query(query, [name, password], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'insertion du développeur :', err);
        return;
      }
      console.log('Développeur ajouté avec succès', results);
    });
  }
}


module.exports = Developer;
