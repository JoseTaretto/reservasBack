const servicesNegocio = require ('../Services/servicesNegocios')

exports.readAllnegocios = async (req, res)=>{

    try {
        let negocios = await servicesNegocio.getAllNegocios();
        return res.status(200).send(negocios);
    }     
    catch (error) {
        return error
    }

}

exports.readNegocioId = async (req, res)=>{
    try{
        let id = req.params.id;
        let negocio = await servicesNegocio.getNegocio(id) ;
        return res.status(200).send(negocio);   
    } catch (error) {
        console.log(error);
        return res.status(500).send({ mensaje: "Hubo un error al intentar obtener el negocio" })
    }
}
