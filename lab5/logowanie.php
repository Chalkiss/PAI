<?php session_start();
	if(isset($_POST["submit"])){
        require("funkcje.php");
		foreach($osoby as $osoba){
			if($_POST["login"]== $osoba->login && $_POST["password"]== $osoba->haslo){
				$_SESSION["zalogowanyImie"] = $osoba->imieNazwisko;
				echo $_SESSION["zalogowanyImie"];
				$_SESSION["zalogowany"] = 1;
				header("Location: user.php");
			}
		};
    }
    if($_SESSION["zalogowany"]!=1)
        header("Location:index.php");
?>