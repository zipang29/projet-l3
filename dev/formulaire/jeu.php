<?php
$pseudo=$_POST['pseudo'];
$ville=$_POST['ville'];
$mail=$_POST['mail'];
$sexe=$_POST['sexe'];
$pays=$_POST['pays'];



$user = 'root';
$pswd = '';
$db = 'jeux';
$conn = mysql_connect('localhost', $user, $pswd) or die ("error");
mysql_select_db($db, $conn);



$query = "INSERT INTO joueur(pseudo,ville,mail,sexe,pays) VALUES('$pseudo','$ville','$mail','$sexe','$pays') ";
$result = mysql_query($query) or die("Unable to verify user because : " . mysql_error());

 if($result)
  {
    echo "oui" ;
  }
  else
  {
    echo "non" ;
  }
?>