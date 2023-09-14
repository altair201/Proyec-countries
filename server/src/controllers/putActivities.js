const {Activity} = require('../db')
const putActivities = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        await Activity.update(req.body, {where: {id}});
        res.status(200).send('Actividad actualizada');
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = {putActivities}