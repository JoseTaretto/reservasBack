const express = require('express');
const routerNegocio = require ('./routers/routerNegocio')
const routerProducts = require ('./routers/routerProducts')
const cors = require('cors');

const app = express()
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api/negocios', routerNegocio)
app.use('/api/productos', routerProducts)

app.listen(PORT)