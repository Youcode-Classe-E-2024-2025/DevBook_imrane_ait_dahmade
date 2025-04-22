const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "root",
  port: 5432
});

client.connect((err) => {
  if (err) {
    console.log('Erreur de connexion:', err);
  } else {
    console.log('Connecté avec succès');

    client.query('CREATE DATABASE "DevBook"', (err) => {
      if (err) {
        console.log('Erreur lors de la création:', err.message);
      } else {
        console.log('Base de données créée avec succès');
      }

      client.end(); 
    });
  }
});
