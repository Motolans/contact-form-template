
<?php
  $name = $_POST['name'];
  $company = $_POST['company'];
  $phonenumber = $_POST['phonenumber'];
  $email = $_POST['email];
  $comments = $_POST['comments'];
  $from = 'From:   ';
  $to = 'info@hookandshadow.com;
  $subject = 'Contact Request Form';
  
  $body = "From: $name\n Company: $company\n Phone Number: $phonenumber\n Email: $email\n Comments: $comments";
  
  if ($_POST['submit'] && $captcha =='5') {
    if (mail ($to, $subject, $body, $from)) {
      echo '<p>Your message has been sent! Someone will get back to you shortly. Thank you for your interest!</p>';
      } else {
      echo '<p>Something went wrong, please double check your information and that all required fields have been entered.</p>';
      }
     } else if ($_POST['submit'] && $captcha !='5') {
          echo '<p>Please check your answer again, you entered the Anti-Spam answer inccorectly!</p>'
          }
      

?>


