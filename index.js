const routerNegocio = require ('./Routers/routerNegocio')
const routerProducts = require ('./routers/routerProducts')
const express = require('express');



const cors = require('cors');

const app = express()
app.use(express.json()); // 💡 Middleware para leer JSON en req.body
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api/negocios', routerNegocio)
app.use('/api/productos', routerProducts)


app.listen(PORT)