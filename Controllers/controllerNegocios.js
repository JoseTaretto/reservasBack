const { error } = require('console');
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

exports.postNegocio = async (req,res)=>{
    try{
        const { _id, name, datetime, img } = req.body;
        let negocio =  await servicesNegocio.postNegocio({ _id, name, datetime, img })
        res.status(201).json({ message: 'Negocio agregado con éxito', agregado: negocio.name });
    }
    catch (error) {
        return res.status(500).send({ mensaje: "Hubo un error al intentar crear el negocio", error: error.message });
    }
}

exports.updateNegocio = async (req,res)=>{
    try{
        let id = req.params.id;
        const {name, datetime, img } = req.body;
        let negocioUpdate = await servicesNegocio.updateNegocio({name, datetime, img }, id) ;
        res.status(201).json({ message: 'Negocio actulizado con éxito', agregado: negocioUpdate.name });
    }
    catch (error) {
        return res.status(500).send({ mensaje: "Hubo un error al actulizado crear el negocio", error: error.message });
    }
}


exports.deleteNegocio = async (req, res)=>{
    try{
        let negocio = await servicesNegocio.deleteNegocio(req.params.id) ;
        if (result.error) {
            return res.status(404).json({ message: result.error });
        }
        res.status(200).json({ message: result.message });   
    } catch (error) {
        console.log(error);
        return res.status(500).send({ mensaje: "Hubo un error al intentar obtener el negocio" })
    }
}
