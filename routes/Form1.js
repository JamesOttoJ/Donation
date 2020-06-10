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

router.use(express.static(path.join(__dirname + '/../public/Form1.html')));

// router.post('/', function(req, res) {
//     console.log('Got a POST request')
//     res.send('Got a POST request')
// })

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log(req.body.Form);
    if (req.body.Form === 1) {
        res.send('loading');
    } else if (req.body.Form === 2) {
        res.sendFile(__dirname + '/../public/Form2.html');
    } else if (req.body.Form === 3) {
        res.sendFile(__dirname + '/../public/Form3.html');
    } else {
        res.sendFile(__dirname + '/../public/Form1.html');
    }
    console.log('Form1 opened');
});

router.post('/', jsonParser, function(req, res) {
    console.log(req.body);
    console.log('Got a POST req');
    // const DonationGet = new XMLHttpRequest();
    // console.log("New http request");


    // if the database does not exist, create it, otherwise print records to console
    if (!exists) {
        console.log("Table not found");
    } else {
        NumberExists = false
        db.serialize(() => {
            db.all("SELECT PhoneNumber FROM DonorData WHERE PhoneNumber =" + req.body.PhoneNumber + ";", function(err, row) {
                // console.log(row);
                // console.log(req.body.PhoneNumber);
                // console.log(err);
                // console.log(Number(row) === 0);
                // res.redirect(302, '/../');
                // res.end();
                if (Number(row) !== 0) {
                    console.log("Number Found in table");
                    console.log("Form3");
                    req.body.Form = 3
                    return res.redirect('/Form1');
                } else {
                    console.log("Number not found in table");
                    console.log("Form2");
                    return res.redirect('/Form2');
                    // res.writeHead(302, { Location: "../Form2" });
                    // res.sendFile("/../public/Form2.html");
                };
            });

            // console.log(NumberExists);
            /*if (NumberExists) {
                console.log("Form2");
                res.send({ err: 0, redirectUrl: "/Form2" });
            } else {
                console.log("Form3");
                res.send({ err: 0, redirectUrl: "/Form3" });
            };*/
            // res.status(200).end();
        });
    };
});

module.exports = router;