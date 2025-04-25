const db = require('mysql');

const  connect = db.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'devbook'
});

 connectionTrue  =connect.connect((err) => {
    if (err) {
        console.log('not connected');
        console.error('Erreur MySQL :', err); // <-- Ici on affiche l’erreur réelle
    } else {
        console.log('connected');
    }
});


module.exports = connect;

