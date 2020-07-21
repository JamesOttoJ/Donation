<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Form3 Test</title>
    <link rel="stylesheet" href="stylesheets/Style.css">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div class="form-style-2">
      <div class ="form-style-2-heading">Personal Information</div>
      <form id="DonationForm"><!-- action="/Donations" method="post"-->
        <div>
          <ul>
          <div>
          <input type="text" id="CategoryName" placeholder="Catagory Name"/>
          <input type="number" id="DonationUnits" placeholder="Donation Units"/>
          <input type="number" id="DonationTotalDollars" placeholder="Donation Total Dollars"/>
          </div><div>
          <button id="FormSubmit1" disabled>Submit</button><!--type="submit" formaction"/Donations" formmethod"post"-->
          </div><div>
          <input type="checkbox" id="Exclude" Name="Exclude">
          <label for="Exclude">I would like to be excluded from promotional E-Mails</label>
          </ul>
        </div>
      </form>
  </body>
</html>
