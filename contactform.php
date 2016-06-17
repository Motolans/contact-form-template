<!DOCTYPE html>
<?php
  /*
		

  */
function filterForm ($data){
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}



$fullName = $phone = $email = $callTime = $message = $phoneErr = $fullNameErr = $emailErr = $company = "";
$sendEmail = true;


  if ($_SERVER["REQUEST_METHOD"] == "POST"){
  	if (empty($_POST["fullName"])){
  		$fullNameErr = "Name is required";
      $sendEmail = false;
  	} else {
  		$fullName = filterForm($_POST["fullName"]);
      if (!preg_match("/^[a-zA-Z ]*$/", $fullName)){
        $fullNameErr = "Only letters and white space allowed";
        $sendEmail = false;
      }
  	}
  	
  	$phone = filterForm($_POST["phone"]);
  	if (!preg_match("/^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i", $phone)){
  		$phoneErr = "Invalid phone number format";
  		$sendEmail = false;
  	}
  	
  	if (empty($_POST["email"])){
  		$emailErr = "Email address is required";
      $sendEmail = false;
  	} else {
  		$email = filterForm($_POST["email"]);
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $emailErr = "Invalid email format";
        $sendEmail = false;
      }
  	}
  	//$callTime = filterForm($_POST["callTime"]);
  	$message = filterForm($_POST["message"]);
  	$company = filterForm($_POST["company"]);

  	echo  $fullNameErr  . "<br>" . $phoneErr . "<br>" . $emailErr;

  	if ($sendEmail){

  		$package = $fullName . "<br>" . $phone . "<br"> . $email . "<br>" . $company . "<br>" . $message . "<br>";

  		/*
  		*UNCOMMENT MAIL LINE BEFORE DEPLOYING
  		*/
  		//mail ("info@hookandshadow.com", "H&S Query", $package);

  		//UNCOMMENT THE NEXT TWO LINES OUT BEFORE DEPLOYING
  		echo $package;
  		echo "Email sent";
  	}
  }
 ?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<title>Contact Us</title>
</head>

<body>
<div id="form-wrap">
	<form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="POST">>
		<fieldset>
			<h4>Contact Us</h4>
			<label class='labelone' for="name">Full Name: </label>
			<input name="fullName"/>
			<label for='phonenumber'>Best Contact Number: </label>
			<input name='phone' />
			<label for='email'>Email: </label>
			<input name="email"/>
			<label for='company'>Company Name: </label>
			<input name='company'/>
			<label for="comments">Comments: </label>
			<textarea name='message'></textarea>

		</fieldset>
		<fieldset>
			<label for='captcha'>*We just want to make sure you are human (Anti-Spam). What is 2 + 3?></label>
			<input name='captcha' placeholder='Enter Answer Here'>
			<input class='btn' type='submit' name='submit' value='Send Email' />
			<input class='btn' type='reset' name='reset' value='Reset Form'/>

		</fieldset>

	</form>
	<footer>
		<div class='container'>
			<div id="socialmedia">
				<button><a href='#'>FaceBook</a></button>
				<button><a href='#'>Twitter</a></button>
				<button><a href='#'>Google+</a></button>
			</div>
		<p>Brought to you by [insert name here].</p>	
		</div>
	</footer>

</body>
</html>

