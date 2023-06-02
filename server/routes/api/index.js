const router = require('express').Router();
const bleatRoutes = require('./bleatRoutes');
const replyRoutes = require('./replyRoutes')

router.use('/bleats', bleatRoutes)
router.use('/replies', replyRoutes)

module.exports = router