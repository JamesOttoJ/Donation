// variable setup
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var jsonParser = bodyParser.json();

var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/users.js');
var donationsRouter = require('./routes/donations.js');
var dbFilePath = path.join(__dirname, 'db/DonationDatabase.sqlite3');
var exists = fs.existsSync(dbFilePath);
var db = new sqlite3.Database(dbFilePath);

var app = express();
var port = 3003

// view engine setup
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Donations', donationsRouter);

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// http://expressjs.com/en/starter/basic-routing.html
// app.get('/Donations', function(req, res) {
//     res.sendFile(__dirname + '/public/Donations.html');
// });

// https://www.npmjs.com/package/sqlite3
//app.post('/Donations', function(req, res)
// var insert = function(req) {
//     console.log("Insert Called");
//     db.run('INSERT INTO Donations (DonorID, CatagoryName, DonationUnits, DonationTotalDollars, StoreID) VALUES (' +
//         req.body.DonorID +
//         ', ' + '"' +
//         req.body.CatagoryName + '"' +
//         ', ' +
//         req.body.DonationUnits +
//         ', ' +
//         req.body.DonationTotalDollars +
//         ', ' +
//         req.body.StoreID + ')');
//     console.log("Insert Finished");
// }

// app.post('/Donations', jsonParser, function(req, res) {
//     console.log(req.body)
//     console.log('JS Post req');

//     // if the database does not exist, create it, otherwise print records to console
//     if (!exists) {
//         console.log("Table not found");
//     } else {
//         console.log("Table Found!");
//         insert(Request);
//         console.log("Request Received");
//     }
//     db.each('SELECT * from Donations', function(row) {
//         console.log("SQLite Command Processed")
//         res.send('record:' + row);
//     });
// });

//app.get('/Donations', function(req, res))

//db.close();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;