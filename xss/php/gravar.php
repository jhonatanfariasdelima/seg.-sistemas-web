<?php
    
    include "config.php";

    $nome = htmlspecialchars($_POST["nome"]); 
    $sobrenome = htmlspecialchars($_POST["sobrenome"]);

    mysqli_query($con, "INSERT INTO usuario (nome, sobrenome, cpf) VALUES ('$nome', '$sobrenome', '9999')");

    include "listar.php";
    

?>


