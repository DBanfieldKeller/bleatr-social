const router = require('express').Router();
const {replyToBleat, deleteReply} = require('../../controllers/bleatController')

router.route('/:id').put(replyToBleat)
router.route('/:bleatID/:replyID').delete(deleteReply)

module.exports = router