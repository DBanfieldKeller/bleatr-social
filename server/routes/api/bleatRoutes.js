const router = require('express').Router();
const {
    createBleat,
    deleteBleat,
    getRecentBleats,
    getSingleBleat,
    getBleatsByUser
} = require('../../controllers/bleatController');

// /api/bleats/
router.route('/').post(createBleat);
router.route('/:id').delete(deleteBleat).get(getSingleBleat);
router.route('/recent/bleats').get(getRecentBleats);
router.route('/users/:username').get(getBleatsByUser)

module.exports = router