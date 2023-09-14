const { Country,Activity } = require('../db');

const getIdPais = async(idPais)=>{
    try {
       
        const conver = idPais.toUpperCase()
        const paisId = await Country.findOne({ 
            where: { id: conver },
            include: Activity
        });
        if(!paisId){
            return { error: "No se encontró el pais por ID" };
        } 
        return paisId;
    } catch (error) {
        throw new Error(error.message);
    }
}
module.exports={getIdPais}