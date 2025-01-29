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
        return res.status(500).send({ mensaje: "Hubo un error al intentar obtener el negocio1" })
    }
}

exports.postNegocioId = async (req,res)=>{
    try{
        const { _id, name, datetime, img } = req.body;
        let negocio =  await servicesNegocio.postNegocio({ _id, name, datetime, img })
        res.status(201).json({ message: 'Negocio agregado con éxito', agregado: nuevoNegocio.name });
    }
    catch (error) {
        console.log(error + 'asdasd');
        return res.status(500).send({ mensaje: "Hubo un error al intentar crear el negocio", error: error.message });
    }
}

