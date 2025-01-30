const  repositoryNegocios  = require('../Repository/repositoryNegocios');

exports.getAllNegocios = async ()=>{
    try {
      let negocios = await repositoryNegocios.getNegociosDB();
      return negocios;
    } 
    catch (error) {
      return error;
    }
}

exports.getNegocio = async (id) => {
    try {
      let negocioId = await repositoryNegocios.getNegociosId(id);
      return negocioId;
    } 
    catch (error) {
      console.log(error);
    }
}

exports.postNegocio = async ( _id, name, datetime, img) => {
  try {
    negocio = await repositoryNegocios.postNegocios(_id, name, datetime, img);
    return negocio;
  } 
  catch (error) {
    throw error;
  }
}

exports.updateNegocio = async ({name, datetime, img }, id) => {
  try {    
    let negocio = await repositoryNegocios.updateNegocio({ name, datetime, img }, id);
    return negocio;
  } 
  catch (error) {
    console.log(error);
  }
}

exports.deleteNegocio = async (id) => {
  try {
    let negocioId = await repositoryNegocios.deleteNegocios(id);
    return negocioId;
  } 
  catch (error) {
    console.log(error);
  }
}

