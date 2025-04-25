const express = require('express');

const Route = express.Router();
const AuthController = require('../app/Controllers/Authentifaction');

Route.get('/',AuthController.FormLogin);
Route.post('/login',AuthController.login({
    name:this.name,
    password:this.password,
}) );
module.exports = Route;