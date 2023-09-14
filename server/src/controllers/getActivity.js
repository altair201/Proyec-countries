const {Activity} = require('../db')
const {Country} = require('../db')

const getActivity = async (req, res)=>{
    try {
        const allActivity = await Activity.findAll({
           
            include:{
                model: Country
            } 

        });
        if(!allActivity) res.status(404).send('No hay actividades');
        res.status(200).json(allActivity);
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports={getActivity}