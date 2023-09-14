const { Router } = require("express");
const router = Router();
const {getCountries} = require('../controllers/getCountries');

const {getName} = require('../controllers/getName');
const {postActivity} = require('../controllers/postActivity')
const {getActivity}= require('../controllers/getActivity')
const {deleteActivities} = require('../controllers/deleteActivities')
const {putActivities} = require('../controllers/putActivities')


router.get('/countries/:idPais?', getCountries)
router.get('/name', getName)
router.post('/activities', postActivity)
router.get('/activities', getActivity)
router.delete('/activities/:id', deleteActivities);
router.put('/activities/:id', putActivities);


module.exports = router;
