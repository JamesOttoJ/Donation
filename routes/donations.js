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
    var dbFilePath = path.join(__dirname, '/../db/DonationDatabase.sqlite3');
    var exists = fs.existsSync(dbFilePath);
    let db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE);

    console.log(req.body);
    console.log('Got a POST req');
    console.log(req.body.DonorID);
    console.log(req.body.CategoryName);
    console.log(req.body.DonationUnits);
    console.log(req.body.DonationTotalDollars);
    console.log(req.body.StoreID);
    console.log("Done with req body.");
    //    res.send('Looking for Table');

    // if the database does not exist, create it, otherwise print records to console
    if (!exists) {

        console.log("Table not found");
    } else {
        console.log("Table Found!");
        db.run("create table TestTable(TestColumn text);");
        insert(req);
    }
    // db.all(sql, [], (rows) => {
    //     rows.forEach((row) => {
    //         console.log(row.name);
    //     });
    // });
    console.log("SQLite Command Processed");
    db.close();
});

var insert = function(req) {
    console.log("Insert Called");
    // db.run("INSERT INTO Donations (DonorID, CategoryName, DonationUnits, DonationTotalDollars, StoreID) VALUES (" +
    //     req.body.DonorID +
    //     ", " + "'" +
    //     req.body.CategoryName +
    //     "'," +
    //     req.body.DonationUnits +
    //     ", " +
    //     req.body.DonationTotalDollars +
    //     ", " +
    //     req.body.StoreID + ");");
    // console.log("Insert Finished");
    db.run("insert into TestTable values(TestInput);");
}

module.exports = router;