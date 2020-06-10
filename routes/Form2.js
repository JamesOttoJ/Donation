var express = require('express');
var router = express.Router();
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var fs = require('fs');

var dbFilePath = path.join(__dirname, '/../db/DonationDatabase.sqlite3');
var exists = fs.existsSync(dbFilePath);
let db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE);
// let sql = "SELECT DonorID FROM Donations";

// router.use(express.static(path.join(__dirname, '/../public/Form2.html')));

// router.post('/', function(req, res) {
//     console.log('Got a POST request')
//     res.send('Got a POST request')
// })

router.get('/', function(req, res, next) {
    console.log('Form2 opened');
    res.sendFile(path.join(__dirname + '/../public/Form2.html'));
    // res.writeHead({ referer: "http://localhost:3003/Form2" });
    res.send("Form2");
});

module.exports = router;