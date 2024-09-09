const express = require('express');
const routerNegocios = require ('./routers/router')
const cors = require('cors');

const app = express()
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/api/negocios', routerNegocios)

app.listen(PORT)