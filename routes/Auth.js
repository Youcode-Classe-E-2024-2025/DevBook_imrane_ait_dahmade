const express = require('express');
const Route = express.Router();

const { name } = require('ejs');
const AuthController = require('../app/Controllers/Authentifaction');


const Auth  = new AuthController;
Route.get('/',AuthController.FormLogin);
Route.post('/login',(req,res)=>{
    Auth.register(req,res);
});



module.exports = Route;