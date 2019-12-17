var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var jsonParser = bodyParser.json();

var dbFilePath = path.join(__dirname, '/../db/DonationDatabase.sqlite3');
var exists = fs.existsSync(dbFilePath);
var db = new sqlite3.Database(dbFilePath);

// router.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log(res.phoneNumber);
    res.render('index', { title: 'Express' });
    // res.sendFile(path.join(__dirname, '/../public/index.html'));
});

module.exports = router;