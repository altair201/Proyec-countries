const { Country } = require('../db');

const getIdPais = async(idPais)=>{
    try {
       
        const conver = idPais.toUpperCase()
        const paisId = await Country.findOne({ where: { id: conver } });
        if(!paisId){
            return { error: "No se encontró el ID" };
        } 
        return paisId;
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports={getIdPais}