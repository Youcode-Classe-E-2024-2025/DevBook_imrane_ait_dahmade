const express = require('express');

const Route = express.Router();
const AuthController = require('../app/Controllers/Authentifaction');

Route.get('/',AuthController.FormLogin);

module.exports = Route;