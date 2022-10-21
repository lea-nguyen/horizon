<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HORIZON - Contact</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>

<body>

    <?php

        include('secret.php');

        $link = new PDO("mysql:host={$host};dbname={$dbname};", $username, $password, array (PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

        if(isset($_POST["email"]) && isset($_POST["objet"]) && isset($_POST["message"])){
        $sql = "INSERT INTO pt_contact(email, objet, message) VALUES (:email, :objet, :message)";
        $req = $link -> prepare($sql);
        $req -> execute(array('email' => $_POST["email"], 
                                'objet' => $_POST["objet"], 
                                'message' => $_POST["message"]));
        $req = null;
        }
    ?>
</body>

<script type="text/javascript">
    if (localStorage.getItem('langue') == "1") {
        $('body').append("<p>Envoie du message...<br>Merci&nbsp;!</p>");
    } else {
        $('body').append("<p>Sending the message...<br>Thank you&nbsp;!</p>");
    }
    setTimeout(function () {
        window.location.assign("../city.html")
    }, 1000);
</script>

</html>