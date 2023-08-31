const { Router } = require("express");
const router = Router();
const {getCountries} = require('../controllers/getCountries');

const {getName} = require('../controllers/getName');
const {postActivity} = require('../controllers/postActivity')
const {getActivity}= require('../controllers/getActivity')


router.get('/countries/:idPais?', getCountries)

router.get('/name', getName)
router.post('/activities', postActivity)
router.get('/activities', getActivity)

module.exports = router;
