const router = require('express').Router();
const {
    createBleat,
    deleteBleat,
    getRecentBleats,
    getSingleBleat
} = require('../../controllers/bleatController');

// /api/bleats/
router.route('/').post(createBleat);
router.route('/:id').delete(deleteBleat).get(getSingleBleat)
router.route('/recent').get(getRecentBleats)

module.exports = router