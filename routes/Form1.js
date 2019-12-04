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

router.use(express.static(path.join(__dirname, '/../public/Donations.html')));

// router.post('/', function(req, res) {
//     console.log('Got a POST request')
//     res.send('Got a POST request')
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Donations Page');
    console.log('Donations opened');
});

router.post('/', jsonParser, function(req, res) {
    console.log(req.body);
    console.log('Got a POST req');

    // if the database does not exist, create it, otherwise print records to console
    if (!exists) {

        console.log("Table not found");
    } else {

        res.status(200).end();

        NumberExists = false
        db.all("SELECT * FROM Donations WHERE PhoneNumber =" + PhoneNumber + ";", function(err, rows) {
            if (rows != null || rows != []) {
                NumberExists = true
                return NumberExists
            } else {
                NumberExists = false
                return NumberExists
            };
        });
        if (NumberExists) {
            DonationGet.open("GET", "/Form2");
            DonationGet.send(null);
        } else {
            DonationGet.open("GET", "/Form3");
            DonationGet.send(null);
        };
    };
});

module.exports = router;