const router = require('express').Router();
const {createBleat} = require('../../controllers/bleatController');

// /api/bleats/
router.route('/').post(createBleat);

module.exports = router