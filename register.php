<!DOCTYPE html>

<html>
	<head>
		<base href=".">
		<title>VDonate | We Help You To Help</title><link rel="icon" href="./img/logo_square.png">
<!-- style sheet links -->
			<link rel="stylesheet" href="./css/main.css" type="text/css">
			<link rel="stylesheet" href="./css/moomenuh.css" type="text/css">
			<link rel="stylesheet" href="./css/template.css" type="text/css">
<!-- MOOMENU HORIZONTAL-->
			<script type="text/javascript" src="./js/UvumiDropdown.js"></script>
			<script type="text/javascript">
				var menu = new UvumiDropdown('main_menu');
			</script>
	</head>
	<body style="font-size:0.75em;">
		<div id="wrapper" style="width:980px;">
			<div id="header">
				<div id="logo">	
					<a src="./index.php">
						<img class="header-logo" src="./img/logo.png" >
					</a>
					<img class="header-tag" src="./img/tag.png" >		
				</div>
				<!--	Main nav	-->
				<div id="nav_main">
					<div class="moduletable _menu ">
						<ul class="menu" id="main_menu" style="visibility: visible; display: block; overflow: visible; height: auto; margin-left: -1px; ">
							<li class="item-101" style="position: relative; display: block; top: 0px; z-index: 1; float: left; "><a href="." style="display: block; ">Home</a></li>
							<li class="item-115" style="position: relative; display: block; top: 0px; z-index: 1; float: left; "><a href="./faq" style="display: block; ">FAQ</a></li>
							<li class="item-116" style="position: relative; display: block; top: 0px; z-index: 1; float: left; "><a href="./register.php" style="display: block; ">Register</a></li>
							<li class="item-114" style="position: relative; display: block; top: 0px; z-index: 1; float: left; "><a href="./login" style="display: block; ">Login</a></li>
							<li class="item-159" style="position: relative; display: block; top: 0px; z-index: 1; float: left; "><a href="./about_us" style="display: block; ">About Us</a></li>
							<li style="clear: left; display: block; position: relative; top: 0px; height: 0px; width: 0px; font-size: 0px; line-height: 0px; margin: 0px; padding: 0px; ">&nbsp;</li>
						</ul>
					</div>
				</div>
				<div class="web-icons">
				<!--	SOCIAL LINKS	-->
								
				<!--	Translate	-->
				</div> 		<!-- 	end of web-icons 		-->	
			</div>	<!-- end of header-->
			<div id="register">
				<form id="register" method="post" action="submit.php" onsubmit="return validateForm()">
					<label for="fname">First Name:</label>
					<input type="text" id="fname" name="fname" style="margin-left:100px;"><br><br>
					<label for="fname">Last Name:</label>
					<input type="text" id="lname" name="lname" style="margin-left:100px;"><br><br>
					<label for="r_gender">Gender:</label>
						<input type="radio" id="r_gender" name="r_gender" value="m" style="margin-left:120px;">Male
						<input type="radio" id="r_gender" name="r_gender" value="f"> Female<br><br>
					<label for="dob">Date of Birth:</label>
					<input type="date" style="margin-left:92px;"><br><br>
					<label for="add">Address:</label>
					<input type="text"style="margin-left:114px;"><br><br>
					<label for="state">State:</label>
					<? session_start();
					include('conec.php');
					$name= mysql_query("select state_id,state_name from t_state"); ?>
					<select name="state" id="state" style="margin-left:130px;">
						<option value=" ">Select State</option>
					<? while($res= mysql_fetch_assoc($name))
					{ ?>
						<option value="<? echo $res['state_id']?>">
					<? echo $res['state_name']?>
					</option>
					<? }?>
					</select><br><br>
					<label for="dist">Select District:</label>
					<? 
					$d_name= mysql_query("select dist_id,dist_name from t_dist"); ?>
					<select name="dist" id="dist" style="margin-left:85px;"><option value="">Select District</option>
						<? while($d_res= mysql_fetch_assoc($d_name))
						{ ?>
						<option value="<? echo $d_res['dist_id']?>">
						<? echo $d_res['dist_name']?>
						</option>
						<? }?>
					</select><br><br>
					<label for="dist">Select City/Taluka:</label>
					<? 
					$c_name= mysql_query("select city_id,city_name from t_city"); ?>
					<select name="city" id="city" style="margin-left:62px;"><option value="">Select city/taluka</option>
						<? while($c_res= mysql_fetch_assoc($c_name))
						{ ?>
						<option value="<? echo $c_res['city_id']?>">
						<? echo $c_res['city_name']?>
						</option>
						<? }?>
					</select><br><br>
					<label for="mno">Mobile no.</label>
					<input type="text" name="mobile" id="mno"style="margin-left:107px;"/><br><br>
					<label for="mno1">Landline no.</label>
					<input type="text" name="landline" id="mno1" style="margin-left:97px;"/><br><br>
					<label for="eid">Email ID:</label>
					<input type="text" name="email" id="eid" style="margin-left:114px;"/><br><br>
					<label for="pwd">Enter Password</label>
					<input type="password" name="pwd" id="pwd" style="margin-left:77px;"/><br><br>
					<label for="pwd1">Repeat Password</label>
					<input type="password" name="pwd1" id="pwd1" style="margin-left:67px;"/><br><br>
					<label for="bg">Blood Group:</label>
					<select name="bg" id="bg" style="margin-left:88px;">
						<option value="">Select</option>	
						<option value="ap">A+(positive)</option>
						<option value="bp">B+(positive)</option>
						<option value="abp">AB+(positive)</option>
						<option value="op">O+(positive)</option>
						<option value="on">O-(Negative)</option>
						<option value="abn">AB-(Negative)</option>
						<option value="bn">B-(Negative)</option>
						<option value="an">A-(Negative)</option>
					</select><br><br><br>
					<input type="submit" value="Register" name="Register" />
				</form>
			</div>
		</div>
	</body>
</html>

