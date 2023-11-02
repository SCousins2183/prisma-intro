const router = require('express').Router();
module.exports = router;

router.use('/author', require('./author'));
router.use('/book', require('./book'));
