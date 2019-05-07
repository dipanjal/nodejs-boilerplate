var router = require('express').Router();

let usCityApiController = require('./uscity-api-controller'),
    chatApiController = require('./chat-controller');

router.use('/us-city',usCityApiController)
router.use('/chat-room',chatApiController)

module.exports = router