<?php

    include "config.php";

    $resultado = mysqli_query($con, "SELECT * FROM usuario");

    $i = 0;
    if(mysqli_num_rows($resultado) > 0)
	{
		while($registro = mysqli_fetch_assoc($resultado))
		{
            $retorno["registros"][$i]["nome"] = $registro["nome"];
            $retorno["registros"][$i]["sobrenome"] = $registro["sobrenome"];
            $i++;
        }
    }

    $retorno["status"] = "s";
    $retorno["mensagem"] = "Listagem de usuário";

    echo json_encode($retorno);
    
?>