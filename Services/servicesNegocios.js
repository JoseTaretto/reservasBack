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
    console.log('lleguen al service')
    await repositoryNegocios.postNegocios(_id, name, datetime, img);
    return true;
  } 
  catch (error) {
    console.log(error);
    throw error;
  }
}


