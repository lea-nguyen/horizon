<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HORIZON</title>
    <link rel="stylesheet" href="../styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <link rel="icon" href="../images/logo.png" type="image/x-icon">
</head>

<body>

    <div class="container">
        <div id='platform_r'>
            <div id='room'>

        <?php

        include('secret.php');

        $link = new PDO("mysql:host={$host};dbname={$dbname};", $username, $password, array (PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        
        $get_id = $_GET['metier'];
        $id_metier = intval($get_id);

        $sql = "SELECT images, description, description_2, interview, interview_2 
        FROM `pt_batiment` 
        WHERE id = $id_metier";
        // On prépare la requête avant l'envoi :
        $req = $link -> prepare($sql);
        $req -> execute();
        // On crée une liste non numérotée avec les résultats
        while($data = $req -> fetch()){
        // On affiche chaque résultat sous forme d'un item de la liste
        echo '<img src="../images/room/'.$data['images'].'">';
        echo '<div id="character">            </div>        </div> </div>';

        echo '<div class="livre">'.$data['description'];
        echo ' <iframe width="381" height="214" src="https://www.youtube.com/embed/'.$data['interview'].'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ';
        if($id_metier==15 || $id_metier==16){
            echo ' <iframe width="381" height="214" src="https://www.youtube.com/embed/'.$data['interview_2'].'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ';
        };
        echo '</div>';

        echo '<div class="livre_2">'.$data['description_2'];
        echo ' <iframe width="381" height="214" src="https://www.youtube.com/embed/'.$data['interview_2'].'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ';
        echo '</div> </div>';
        
        }
        $req = null;
        ?>
    </div>


</body>
<script src="../functions.js"></script>
<script>
        var plan = JSON.parse('<?php    $id_metier = intval($_GET["metier"]);    $sql = "SELECT coordonnees    FROM `pt_batiment`    WHERE id = $id_metier";    $req = $link -> prepare($sql);    $req -> execute();    while($data = $req -> fetch()){    echo $data["coordonnees"];    }    $req = null;    ?>');
        var book = JSON.parse('<?php    $id_metier = intval($_GET["metier"]);    $sql = "SELECT coordLivre    FROM `pt_batiment`    WHERE id = $id_metier";    $req = $link -> prepare($sql);    $req -> execute();    while($data = $req -> fetch()){    echo $data["coordLivre"];    }    $req = null;    ?>');
        
        var book_2 = JSON.parse('<?php    $id_metier = intval($_GET["metier"]);    $sql = "SELECT coordLivre_2    FROM `pt_batiment`    WHERE id = $id_metier";    $req = $link -> prepare($sql);    $req -> execute();    while($data = $req -> fetch()){    echo $data["coordLivre_2"];    }    $req = null;    ?>');
</script>
<script src="room.js"></script>
</html>