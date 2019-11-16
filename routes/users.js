var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Users Page');
    console.log('Users path opened');
});

module.exports = router;