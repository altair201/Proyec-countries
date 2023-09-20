const {Activity} = require('../db');

const postActivity = async(req, res) =>{
    try {
        const {name, dificult, duration, season, countries} = req.body;
        if(!name || !dificult || !duration || !season.length || !countries.length ) return res.status(401).send("faltan datos ");
        const activitycon = await Activity.create({name, dificult, duration, season});
        await activitycon.addCountry(countries)
        res.status(200).json(activitycon);

    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports={postActivity};