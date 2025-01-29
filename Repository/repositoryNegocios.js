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
        let negocio = new Negocio (_id, name, datetime, img)
        await negocio.save();
        return negocio;
    } 
    catch (error) {
        throw error; // Retorna el error para que el controlador lo maneje
    }
}

exports.updateNegocio = async ({name, datetime, img }, id)=>{
    try {
        return await Negocio.findOneAndReplace({_id:id},{name, datetime, img})
    } 
    catch (error) {
        console.log(error);
    }
}