const  repositoryNegocios  = require('../Repository/repositoryNegocios');

exports.getAllNegocios = async ()=>{
    try {
        console.log('services');
        let negocios = await repositoryNegocios.getNegociosDB();
        return negocios
    } 
    catch (error) {
        return error
    }
}

exports.getNegocio = async (id) => {
    try {
      return await repositoryNegocios.getNegociosId(id)
    } 
    catch (error) {
      console.log(error);
    }
}

