const express = require('express');
const Route = express.Router();

const { name } = require('ejs');
const AuthController = require('../app/Controllers/Authentifaction');
const LivreController = require('../app/Controllers/LivreController');

const Auth  = new AuthController;
const Livre = new LivreController;
Route.get('/',AuthController.FormResigter);
Route.post('/register',(req,res)=>{
    Auth.register(req,res);
});
Route.post('/login',(req,res) =>{
    Auth.Login(req,res);
});

Route.get('/login' , AuthController.FormLogin);


Route.get('/Livres',(req,res) => {
    Livre.ListesLivres(req,res);
});


module.exports = Route;