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
        console.log("Table Found!");
        db.serialize(() => {
            insert(req);
            console.log("Insert Processed");
            db.all("SELECT * FROM Donations;", (err, rows) => {
                console.log("Donations table info");
                console.log(rows);
                if (err) {
                    return console.error(err.message);
                };
            });
            db.all("SELECT * FROM DonorData;", (err, rows) => {
                console.log("DonorData table info")
                console.log(rows);
                if (err) {
                    return console.error(err.message);
                };
            });
            console.log("All is finished");
        });
    }
    res.status(200).end();
});

var insert = function(req) {
    console.log("Insert Called");
    db.serialize(() => {
        db.run("INSERT INTO Donations (DonorID, CategoryName, DonationUnits, DonationTotalDollars, StoreID) VALUES (" +
            req.body.DonorID +
            ", '" +
            req.body.CategoryName +
            "', " +
            req.body.DonationUnits +
            ", " +
            req.body.DonationTotalDollars +
            ", 1);");
        db.run("INSERT OR REPLACE INTO DonorData (FName, LName, PhoneNumber, EMail) VALUES ('" +
            req.body.FName +
            "', '" +
            req.body.LName +
            "', " +
            req.body.PhoneNumber +
            ", '" +
            req.body.EMail + "');");
    });
    console.log("Insert Finished");
}

module.exports = router;