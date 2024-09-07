const express = require('express');
const routerNegocios = require ('./routers/router')

const app = express()
const PORT = 3000;

app.use('/api/negocios', routerNegocios)

routerNegocios.get('/:id', function (req, res) {
  const negocioId = parseInt(req.params.id);
  const negocio = negocios.find(n => n._id === negocioId);

  if (negocio) {
    res.send(negocio);
  } else {  
    res.status(404).send({ message: 'Negocio no encontrado' });
  }
});

app.listen(PORT)