const express = require('express');
const { negocios } = require('../data');

const routerNegocios = express.Router();

routerNegocios.get('/', function (req, res) {
    res.send(negocios)
})

routerNegocios.get('/:id', function (req, res) {
    const negocioId = parseInt(req.params.id);
    const negocio = negocios.find(n => n._id === negocioId);
  
    if (negocio) {
      res.send(negocio);
    } else {  
      res.status(404).send({ message: 'Negocio no encontrado' });
    }
});

module.exports = routerNegocios;
  