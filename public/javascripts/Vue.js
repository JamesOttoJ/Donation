//var sqlite3 = require('sqlite3').verbose()

console.log("Vue.js is working!")

new Vue({
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

})