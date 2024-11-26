const Negocio = require('./negocios');  // Asegúrate de que la ruta sea correcta
const conectarDB = require('../db/db');

conectarDB();

exports.getNegociosDB = async ()=>{
    try {

        console.log('repository');
        let negociosdb = await Negocio.find();
        return negociosdb;
    } catch (error) {
        console.log(error);
    }
}

exports.getNegociosId = async (id)=>{
    try {
        let negocio = await Negocio.findById(id);
        return negocio;
    } catch (error) {
        console.log(error);
    }
}