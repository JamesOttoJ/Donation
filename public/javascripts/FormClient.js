// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();

// console.log("Client.js is working!")

// console.log('Testing Add');

console.log('Client-side code running');

const DonationForm = document.getElementById("DonationForm");
const EMail = document.getElementById("EMail");
const Button = document.getElementById("FormSubmit");
const Button1 = document.getElementById('FormSubmit1');

EMail.addEventListener('keyup', function(event) {
    isValidEmail = EMail.checkValidity();

    if (isValidEmail) {
        Button.disabled = false;
    } else {
        Button.disabled = true;
    }
});
Button.addEventListener('click', function(event) {
    if (Button.disabled == false) {
        var Form = [document.getElementById("DonorID").value, document.getElementById("CategoryName").value, document.getElementById("DonationUnits").value, document.getElementById("DonationTotalDollars").value, document.getElementById("StoreID").value]
        console.log(Form)
        console.log('button was clicked');
        event.preventDefault();
        // request the user from our app's sqlite database
        const DonationPost = new XMLHttpRequest();

        DonationPost.open('post', '/Donations');
        DonationPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        DonationPost.send(JSON.stringify({
            'DonorID': document.getElementById("DonorID").value,
            'CategoryName': document.getElementById("CategoryName").value,
            'DonationUnits': document.getElementById("DonationUnits").value,
            'DonationTotalDollars': document.getElementById("DonationTotalDollars").value,
            'StoreID': document.getElementById("StoreID").value,
            'FName': document.getElementById("FName").value,
            'LName': document.getElementById("LName").value,
            'PhoneNumber': document.getElementById("PhoneNumber").value,
            'EMail': document.getElementById("EMail").value,
            'Exclude': document.getElementById("Exclude").value
        }));
    } else {
        alert("That input is not valid");
    }
});

Button1.addEventListener('click', function(event) {
    var PhoneNumber = document.getElementById("PNumber1") + document.getElementById("PNumber2") + document.getElementById("PNumber3")
    console.log(PhoneNumber);
})