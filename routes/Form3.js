var express = require('express');
var router = express.Router();
var path = require('path');
// var sqlite3 = require('sqlite3').verbose();
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
// var fs = require('fs');

// var dbFilePath = path.join(__dirname, '/../db/DonationDatabase.sqlite3');
// var exists = fs.existsSync(dbFilePath);
// let db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE);
// let sql = "SELECT DonorID FROM Donations";

// router.use('/', express.static(path.join(__dirname + '/public/Form3.html')));

// router.post('/', function(req, res) {
//     console.log('Got a POST request')
//     res.send('Got a POST request')
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Form3');
    //res.sendFile(__dirname + '/../public/Form3.html');
    console.log('Form1 opened');
    // console.log(path.resolve(path.join(__dirname + '/../public/Form3.html')));
    // res.sendFile(path.resolve(path.join(__dirname + '/../public/Form3.html')));
    // res.redirect(301, "../");
    // res.send("Form3");
    res.status(200).end();
});

module.exports = router;