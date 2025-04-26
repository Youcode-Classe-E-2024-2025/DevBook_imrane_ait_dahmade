const express = require('express');
const Route = express.Router();

const { name } = require('ejs');
const AuthController = require('../app/Controllers/Authentifaction');
const LivreController = require('../app/Controllers/LivreController');

const Auth = new AuthController();
// const Livre = new LivreController();
//Route.get('/',AuthController.FormResigter);

Route.get('/', AuthController.FormResigter);
Route.post('/register',  Auth.register('ahmed','hello'));

Route.post('/login', (req, res) => {
    Auth.Login(req, res);
});

Route.get('/login', AuthController.FormLogin);


Route.get('/Livres', (req, res) => {
    LivreController.ListesLivres(req, res);
});


module.exports = Route;