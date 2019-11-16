// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();

// console.log("Client.js is working!")

// console.log('Testing Add');

console.log('Client-side code running');

const button = document.getElementById('FormSubmit');

button.addEventListener('click', function(event) {
    console.log('button was clicked');
    event.preventDefault();

    console.log("Submit Called");
    // request the user from our app's sqlite database
    const userRequest = new XMLHttpRequest();

    userRequest.open('post', '/Donations');
    userRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        // userRequest.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         var rows = JSON.parse(this.responseText);
        //         var tbl = "<table border=1>";
        //         tbl += "<thead><td>Donor ID</td><td>Category Name</td><td>Donation Units</td><td>Donation Total Dollars</td><td>Store ID</td></thead>";
        //         for (var i = 0; i < rows.length; i++) {
        //             tbl += "<tr><td>" + rows[i].DonorID + "</td><td>" + rows[i].CatagoryName + "</td><td>" + rows[i].DonationUnits + "</td><td>" + rows[i].DonationTotalDollars + "</td><td>" + rows[i].StoreID + "</td></tr>";
        //             console.log('record:', JSON.stringify(rows[i]));
        //         }
        //         tbl += "</table>";
        //         document.getElementById("tbl").innerHTML = tbl;
        //     }
        // };
    userRequest.send(JSON.stringify({
        'DonorID': document.getElementById("DonorID").value,
        'CatagoryName': document.getElementById("CatagoryName").value,
        'DonationUnits': document.getElementById("DonationUnits").value,
        'DonationTotalDollars': document.getElementById("DonationTotalDollars").value,
        'StoreID': document.getElementById("StoreID").value
    }));
});


/*new Vue({
    el: '#app',
    data: {
        form: {
            DonorID: 1,
            CatagoryName: "",
            DonationUnits: 23,
            DonationTotalDollars: 34,
            StoreID: 45
        }
    },
    methods: {
        submit() {
            console.log('submitted!', this.form);
            console.log('Submitted');

            fetch('/Donations')
                //.then(response => response.json()); // handle response.....
                .then(res => res.text())
                .then(text => console.log(text))
        }
    }

})*/