<?php

    include "config.php";

    $usuario = $_POST["usuario"]; // mysqli_real_escape_string
    $senha = $_POST["senha"]; // mysqli_real_escape_string

    $stmt = $con->prepare("SELECT * FROM usuario WHERE usuario = ? AND senha = ?");
    $stmt->bind_param('ss', $usuario, $senha);

    $stmt->execute();

    $resultado = $stmt->store_result();
    
    
    $retorno["status"] = "n";
    $retorno["mensagem"] = "não autenticado";

    if($stmt->num_rows() > 0) {
        $retorno["status"] = "s";
        $retorno["mensagem"] = "autenticado";
    }

    echo json_encode($retorno);
    
?>