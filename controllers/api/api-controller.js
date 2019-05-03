var router = require('express').Router();

var testGetApi = require('./uscity-api-controller')

router.use('/us-city',testGetApi)

module.exports = router