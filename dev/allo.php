<html>
<head>

</head>
<body>
<?php

$user = 'root';
$pswd = '';
$db = 'jeux';
$conn = mysql_connect('localhost', $user, $pswd) or die ("error");
mysql_select_db($db, $conn);



$query = "SELECT score FROM joueur WHERE score > 10 "  ;
$result = mysql_query($query) or die("ERR : " . mysql_error());
?>
La liste des meilleurs scores :<br />
<?php
while($row = mysql_fetch_array($result))
{
	echo $row['score'].'<br>';
}

mysql_close ();
?>


</body>
</html>
