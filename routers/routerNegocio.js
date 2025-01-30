const express = require('express');
const negocioController = require('../Controllers/controllerNegocios')

const routerNegocios = express.Router();

routerNegocios.get('/', negocioController.readAllnegocios)
routerNegocios.get('/:id', negocioController.readNegocioId);
routerNegocios.post('/', negocioController.postNegocio);
routerNegocios.put('/:id', negocioController.updateNegocio);
routerNegocios.delete('/:id', negocioController.deleteNegocio);

module.exports = routerNegocios;
  