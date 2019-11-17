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

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;