// var express = require('express');
//var path = require('path');
// var sqlite3 = require('sqlite3').verbose();
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
// var fs = require('fs');

// var dbFilePath = path.join(__dirname, 'db/DonationDatabase.sqlite3');
// var exists = fs.existsSync(dbFilePath);
// var db = new sqlite3.Database(dbFilePath);

console.log('Client-side code running');

const DonationForm = document.getElementById("DonationForm");
const Button1 = document.getElementById('FormSubmit1');

Button1.addEventListener('click', function(event) {
    event.preventDefault();

    // var PhoneNumber = document.getElementById("PNumber1") + document.getElementById("PNumber2") + document.getElementById("PNumber3");
    const PhoneNumber = document.getElementById("PNumber1").value + document.getElementById("PNumber2").value + document.getElementById("PNumber3").value;
    console.log(document.getElementById("PNumber1").value);
    console.log(document.getElementById("PNumber2").value);
    console.log(document.getElementById("PNumber3").value);
    console.log(PhoneNumber);
    const DonationPost = new XMLHttpRequest();

    DonationPost.open('post', '/Form1');
    DonationPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    DonationPost.setRequestHeader("followAllRedirects", "true");
    DonationPost.send(JSON.stringify({
        'PhoneNumber': PhoneNumber,
        'Form': 1
    }));
});