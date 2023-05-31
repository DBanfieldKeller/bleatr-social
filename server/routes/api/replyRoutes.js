const router = require('express').Router();
const {replyToBleat} = require('../../controllers/bleatController')

router.route('/:id').put(replyToBleat)

module.exports = router