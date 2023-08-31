const {Activity} = require('../db')

const getActivity = async (req, res)=>{
    try {
        const allActivity = await Activity.findAll();
        if(!allActivity) res.status(404).send('no hay activity');
        res.status(200).json(allActivity);
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports={getActivity}