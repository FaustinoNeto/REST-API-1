const { Router} = require('express');

const UserController = require('./app/Controllers/UserController');
const MidiaController = require('./app/Controllers/MidiaController');
const CategoriaController = require('./app/Controllers/CategoriaController');

const routes = new Router();

routes.post("/user", UserController.store);
routes.get("/user", UserController.show);
routes.post("/midia", MidiaController.store);
routes.get("/midia", MidiaController.show);
routes.post("/categoria", CategoriaController.store);
routes.get("/categoria", CategoriaController.show);



module.exports = routes;