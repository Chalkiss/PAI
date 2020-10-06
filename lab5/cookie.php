<?php session_start(); ?>
<!DOCTYPE html>
<html>
    <head>
        <title>PHP</title>
        <meta charset='UTF-8' />
    </head>
<body>
    <?php
    if(isset($_GET["czas"])){
        $czas = $_GET["czas"];
        setcookie("czas",$czas,time() + (10), "/");
        echo "Pomyślnie dodano cookie";
    }
    ?><br>
    <a href="index.php">Strona użytkownika</a>
</body>
</html>