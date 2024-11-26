const express = require('express');
const negocioController = require('../Controllers/controllerNegocios')

const routerNegocios = express.Router();

routerNegocios.get('/', negocioController.readAllnegocios)
routerNegocios.get('/:id', negocioController.readNegocioId);

routerNegocios.post('/',async  (req,res)=>{

  let {_id,name, datetime, img} = req.body;

  let negocio =  {_id, name, datetime, img};
  await negocios.push(negocio);
  res.status(201).json({ message: 'Negocio agregado con éxito', agregado: negocio.name });
}
)

routerNegocios.delete('/:id', async (req, res) => {
  const negocioId = parseInt(req.params.id);

  const index = await negocios.findIndex(n => n._id === negocioId);

  if (index === -1) {
    return res.status(404).json({ message: 'Negocio no encontrado' });
  }

  // Eliminar el negocio directamente del array usando splice
  negocios.splice(index, 1);

  res.status(200).json({ message: 'Negocio eliminado con éxito' });
});

module.exports = routerNegocios;
  