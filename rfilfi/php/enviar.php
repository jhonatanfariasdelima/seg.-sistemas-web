<?php
    
    $arquivo = $_FILES["file"];
    $array = explode(".", $arquivo["name"]);

    $mimetypeh = mime_content_type($arquivo["tmp_name"]);
    echo $mimetypeh;

    if ($mimetypeh == 'image/jpeg'){
        move_uploaded_file($arquivo["tmp_name"], "../upload/".$arquivo["name"]);
    }else{
        echo "tipo invalido";
    }
    
?>