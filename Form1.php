<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Form1 Test</title>
    <link rel="stylesheet" href="./stylesheets/Style.css">
    <!--<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>-->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--<link rel="shortcut icon" href="images/favicon.ico">-->

    <!-- import the webpage's client-side javascript file -->

  </head>
  <body>
    <div class="form-style-2">
      <div class ="form-style-2-heading">Personal Information</div>
      <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
        <div>
          <label><span>Phone Number <span class="required">*</span></span><input type="text" class="tel-number-field" value="" maxlength="3" name="PNumber1"/>-<input type="text" class="tel-number-field" value="" maxlength="3" name="PNumber2"/>-<input type="text" class="tel-number-field1" value="" maxlength="4" name="PNumber3"/></label>
          <p>Phone number disclaimer</p>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      <?php
      $PNumber1 = $PNumber2 = $PNumber3 = "";
      if ($_SERVER["REQUEST METHOD"] = "POST"){
        $PNumber1 = test_input($_POST["PNumber1"]);
        $PNumber2 = test_input($_POST["PNumber2"]);
        $PNumber3 = test_input($_POST["PNumber3"]);
      }
      function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
      }
      ?>
      Your phone number is (<?php echo( $PNumber1); ?>) <?php echo( $PNumber2); ?> - <?php echo( $PNumber3);?>
    </div>
  </body>
</html>
