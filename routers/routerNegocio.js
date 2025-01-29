const express = require('express');
const negocioController = require('../Controllers/controllerNegocios')

const routerNegocios = express.Router();

routerNegocios.get('/', negocioController.readAllnegocios)
routerNegocios.get('/:id', negocioController.readNegocioId);
routerNegocios.post('/',negocioController.postNegocioId);

routerNegocios.delete('/:id', async (req, res) => {
  const negocioId = parseInt(req.params.id);
  const index = await negocios.findIndex(n => n._id === negocioId);

  if (index === -1) {
    return res.status(404).json({ message: 'Negocio no encontrado' });
  }
  
  negocios.splice(index, 1);
  res.status(200).json({ message: 'Negocio eliminado con éxito' });
});

module.exports = routerNegocios;
  