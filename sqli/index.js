
function acessar(){

    var dados = $("form").serialize();

    $.ajax({
        beforeSend: function(){
            console.log(dados);
        },
        type: "POST",
        url: "autenticar.php",
        dataType: "json",
        data: dados,
        success: function(retorno) {
            alert(retorno.mensagem);
            if(retorno.status == 's'){
                alert("logado");
            }else{
                alert("não logado");
            }
        }
    })
}

