<?php session_start();
$_SESSION["zalogowany"]=0;?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
    <body>
	<a href="user.php">Strona użytkownika</a><br>
	<?php 
		require("funkcje.php");
		echo "<h1>Nasz System</h1>";
		//echo 'Przesłany login: ' . $_POST["login"] . '<br>';
			//echo 'Przesłane hasło: ' . $_POST["password"] . '<br>';
		if(isset($_POST["wyloguj"])&&$_SESSION["zalogowany"]==1){
			$_SESSION["zalogowany"] = 0;
		}
	?>   
	<form action="logowanie.php" method="POST">
		<fieldset>
			<legend>Dane użytkownika</legend>
			Login: <input type="text" name="login"><br>
			Hasło: <input type="text" name="password"><br>
			<button type="submit" name="submit" method="POST" value="Zaloguj">Zaloguj</button>
		</fieldset>
	</form>
		<br>
		<br>
		<form action="cookie.php" method="GET">
        <fieldset>
            <legend>Formularz Cookie</legend>
            <input type="number" name="czas">
            <button type="submit" name="utworzCookie">utworzCookie</button>
        </fieldset>
    </form>
	<?php
        if(isset($_COOKIE["czas"])) {
            echo "Zapisane cookie: " . $_COOKIE["czas"];
        }
    ?>
</body>
</html>