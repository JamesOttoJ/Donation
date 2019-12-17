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
var Form1Router = require('./routes/Form1.js');
var Form2Router = require('./routes/Form2.js');
var Form3Router = require('./routes/Form3.js');
var dbFilePath = path.join(__dirname, 'db/DonationDatabase.sqlite3');
var exists = fs.existsSync(dbFilePath);
var db = new sqlite3.Database(dbFilePath);

var app = express();
var port = 3003
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Donations', donationsRouter);
app.use('/Form1', Form1Router);
app.use('/Form2', Form2Router);
app.use('/Form3', Form3Router);

// app.get('/Form2', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '/../public/Form2.html'));
//     console.log('Form2 opened');
// });

// app.get('/Form3', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '/../public/Form3.html'));
//     console.log('Form3 opened');
// });

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

// https://www.npmjs.com/package/sqlite3

process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Closed database");
    });
    server.close(() => {
        console.log('Closed out remaining connections');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
});
module.exports = app;