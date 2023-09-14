const {Activity,} = require('../db')
const putActivities = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, dificult, duration, season} = req.body;
        if(!name || !dificult || !duration || !season.length ) return res.status(401).send("faltan datos ");
        await Activity.update({name, dificult, duration, season, }, {where: {id}});
        res.status(200).send('Actividad actualizada');
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = {putActivities}