	
$(document).ready(function(){

	$("#bEnviar").click(function(){
		fLocalReqChaveSimetrica();
		return false;
	});

});


function fLocalReqChaveSimetrica(){

	//var data = JSON.stringify({"usuario": $("#tUsuario").val(), "senha": CryptoJS.SHA256($("#tSenha").val()).toString()});

    var data = JSON.stringify({"usuario": $("#tUsuario").val(), "senha": $("#tSenha").val().toString()});


    var mensagem_criptografada = criptografarChaveSimetrica(data);

    $.ajax({
        url: "js/descriptografar.php",
        type: 'post', 
        data: {message: mensagem_criptografada}
    });
}   

function criptografarChaveSimetrica(data) {

    //var iv = '12345678876543211234567887654321'; 
    var iv = CryptoJS.lib.WordArray.random(128 / 8);

    var mensagem = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data)).toString();
    
    //var chave = '1234567887654321';
    var chave = CryptoJS.lib.WordArray.random(128 / 16);


    // https://cryptojs.gitbook.io/docs/
    var criptografado = CryptoJS.AES.encrypt(mensagem, CryptoJS.enc.Utf8.parse(chave), 
    { 
        iv: CryptoJS.enc.Utf8.parse(iv), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding
    });
 
    var criptografado_string = criptografado.toString();

    console.log(chave+`:`+iv+`:`+criptografado_string);

    return chave+`:`+iv+`:`+criptografado_string;
}

