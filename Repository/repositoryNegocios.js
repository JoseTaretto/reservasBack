const Negocio = require('./negocios');  // Asegúrate de que la ruta sea correcta
const conectarDB = require('../db/db');

conectarDB();

exports.getNegociosDB = async ()=>{
    try {
        let negociosdb = await Negocio.find();
        return negociosdb;
    } 
    catch (error) {
        console.log(error);
    }
}

exports.getNegociosId = async (id)=>{
    try {
        let negocio = await Negocio.findById(id);
        return negocio;
    } 
    catch (error) {
        console.log(error);
    }
}

exports.postNegocios = async (_id, name, datetime, img)=>{
    try {
        let negocio1 = new Negocio (_id, name, datetime, img)
        await negocio1.save();
        return true;
    } 
    catch (error) {
        console.log(error+ 'repo');
        throw error; // Retorna el error para que el controlador lo maneje
    }
}