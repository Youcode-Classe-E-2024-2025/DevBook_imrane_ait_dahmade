const { Client } = require('pg');

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "DevBook",
  port: 5432
});

client.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à DevBook:', err.stack);
  } else {
    console.log('Connecté à la base DevBook');
  }
});

module.exports = client;
