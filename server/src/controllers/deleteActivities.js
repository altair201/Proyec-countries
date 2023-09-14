const {Activity} = require('../db')

const deleteActivities = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        await Activity.destroy({where: {id}});
        res.status(200).send('Actividad eliminada');
    } catch (error) {
        res.status(500).send(error.message);
    }
    
}
module.exports = {deleteActivities}