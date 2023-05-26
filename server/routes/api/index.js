const router = require('express').Router();
const bleatRoutes = require('./bleatRoutes');

router.use('/bleats', bleatRoutes)

module.exports = router