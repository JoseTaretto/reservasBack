const express = require('express');

const { negocios } = require('./data'); // 'data' es el nombre del archivo donde está exportado


const app = express()
const PORT = 3000;

const routerNegocios = express.Router();

app.use('/api/negocios', routerNegocios)

routerNegocios.get('/', function (req, res) {
  console.log(typeof negocios)
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

app.listen(PORT)