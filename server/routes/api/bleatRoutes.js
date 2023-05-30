const router = require('express').Router();
const {createBleat, deleteBleat} = require('../../controllers/bleatController');

// /api/bleats/
router.route('/').post(createBleat);
router.route('/:id').delete(deleteBleat)

module.exports = router