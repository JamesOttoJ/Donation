<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Form2 Test</title>
    <link rel="stylesheet" href="stylesheets/Style.css">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div class="form-style-2">
      <div class ="form-style-2-heading">Personal Information</div>
        <form id="DonationForm" action="../PHP/Form2.php" method="post">
          <div>
            <div>
              <label for="field1"><span>Name <span class="required">*</span></span><input type="text" id="FName" class="input-field-name" name="field1" value="" placeholder="First"/>
              <input type="text" id="LName" class="input-field-name" name="field1" value="" placeholder="last"/>
            </div><div>
              <label for="field2"><span>Email <span class="required">*</span></span><input type="email" id="EMail" class="input-field" name="field2" value=""/>
            </div><div>
              <input type="text" id="CategoryName" placeholder="Catagory Name"/>
              <input type="number" id="DonationUnits" placeholder="Donation Units"/>
              <input type="number" id="DonationTotalDollars" placeholder="Donation Total Dollars"/>
            </div><div>
              <button id="FormSubmit1" disabled>Submit</button>
            </div><div>
              <input type="checkbox" id="Exclude" Name="Exclude">
              <label for="Exclude">I would like to be excluded from restating aditional content</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>
