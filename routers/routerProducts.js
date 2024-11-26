const express = require('express');
const { Producto } = require('../dataProductos');

const routerProducts = express.Router();

routerProducts.get('/', function (req, res) {
    res.send(Producto)
})

routerProducts.get('/:id', async (req, res) => {
    let productoId = parseInt(req.params.id);
    let producto = await Producto.find(n => n._id === productoId);

    if (producto) {
        res.send(producto);
    } else {
        res.status(404).send({ message: 'Producto no encontrado' });
    }
});

routerProducts.post('/', async (req, res) => {

    let { _id, name, datetime, img } = req.body;
    let producto = { _id, name, datetime, img };
    await Producto.push(producto);
    res.status(201).json({ message: 'Producto agregado con éxito', agregado: producto.name });
}
)

routerProducts.delete('/:id', async (req, res) => {
    const productoId = parseInt(req.params.id);

    const index = await Producto.findIndex(n => n._id === productoId);

    if (index === -1) {
        return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Eliminar el negocio directamente del array usando splice
    Producto.splice(index, 1);

    res.status(200).json({ message: 'Producto eliminado con éxito' });
});

module.exports = routerProducts;