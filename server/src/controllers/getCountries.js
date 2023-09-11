const axios = require("axios");
const { Country,Activity } = require('../db');
const {getIdPais} = require('../controllers/getIdPais')

const getCountries = async (req, res) => {
  try {
    const { idPais } = req.params;
    if(idPais){
      const responId = await getIdPais(idPais);
      if(responId){
        return res.status(200).json(responId)
      }else{
        return res.status(404).send('no se encontro ID')
      }
    }


    const { data } = await axios("http://localhost:5000/countries");
    data.map(async (dataCountries) => {
      await Country.findOrCreate({
        where: {
          id: dataCountries.cca3
        },
        defaults: {
          name: dataCountries.name.common,
          image: dataCountries.flags.png,
          continent: dataCountries.continents[0],
          capital: dataCountries.capital ? dataCountries.capital[0] : 'Unknown',
          subregion: dataCountries.subregion || 'Unknown',
          area: dataCountries.area,
          population: dataCountries.population,
          coatOfArms: dataCountries.coatOfArms.svg || 'Unknown'
        }
      })

    })
    const allContries= await Country.findAll({include: Activity }); 
    res.status(200).json(allContries)
  } catch (error) {
    res.status(500).send(error.massage)
  }
};

module.exports = { getCountries };