const router = require('express').Router();
const {
    createBleat,
    deleteBleat,
    getRecentBleats
} = require('../../controllers/bleatController');

// /api/bleats/
router.route('/').post(createBleat);
router.route('/:id').delete(deleteBleat)
router.route('/recent').get(getRecentBleats)

module.exports = router