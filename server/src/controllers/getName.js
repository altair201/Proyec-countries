const { Country, Activity } = require('../db');
const { Op } = require("sequelize");

const getName = async (req, res) => {
    try {
        const { name } = req.query;

        const minname = name.toLowerCase();
        const allCons = await Country.findAll({
            where: {
                name: { [Op.iLike]: `%${minname}%`, },

            },
            include: Activity

        });
        if (!allCons || allCons.length === 0) return res.status(404).send("No se encontraron coincidencias");
        res.status(200).json(allCons);

    } catch (error) {
        res.status(500).send(error.message);
    }

}
module.exports = { getName }

