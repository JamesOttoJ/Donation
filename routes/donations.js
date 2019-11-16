var express = require('express');
var router = express.Router();
var path = require('path');
var sqlite3 = require('sqlite3').verbose();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var fs = require('fs');

var dbFilePath = path.join(__dirname, '../db/DonationDatabase.sqlite3');
var exists = fs.existsSync(dbFilePath);
var db = new sqlite3.Database(dbFilePath);

router.use(express.static(path.join(__dirname, '../public/Donations.html')));

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
    console.log('Got a POST req');
    res.send('Got a POST req');
    console.log(req.body);
    //    res.send('Looking for Table');


    // if the database does not exist, create it, otherwise print records to console
    if (!exists) {
        console.log("Table not found");
    } else {
        console.log("Table Found!");
        insert(err, req);
    }
    db.each('SELECT * from Donations', function(err, row) {
        console.log('${row.DonorID} ${row.CatagoryName} ${row.DonationUnits} ${row.DonationTotalDollars} ${row.StoreID} ');
    });
    console.log("SQLite Command Processed");
});

var insert = function(req) {
    console.log("Insert Called");
    db.run('INSERT INTO Donations (DonorID, CatagoryName, DonationUnits, DonationTotalDollars, StoreID) VALUES (' +
        req.body.DonorID +
        ', ' + '"' +
        req.body.CatagoryName + '"' +
        ', ' +
        req.body.DonationUnits +
        ', ' +
        req.body.DonationTotalDollars +
        ', ' +
        req.body.StoreID + ');');
    console.log("Insert Finished");
}

module.exports = router;