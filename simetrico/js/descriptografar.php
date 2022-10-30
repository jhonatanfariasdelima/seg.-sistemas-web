<?php

	error_reporting(0);

	$mensagem_criptografada = $_POST["message"];

	$exp =  explode(":", $mensagem_criptografada);

	$chave = strval($exp[0]);
	$iv = $exp[1];
	$msg = $exp[2];

	// print_r($chave);
	// print_r(" ");
	// print_r($iv);
	// print_r(" ");
	// print_r($msg);

	// descriptografa a mensagem
	$mensagem_descriptografada = openssl_decrypt($msg, 'aes-128-cbc', $chave, OPENSSL_ZERO_PADDING, $iv);

	print_r(json_decode(base64_decode($mensagem_descriptografada), true));

?>
