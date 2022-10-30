
$(document).ready(function(){

    $.ajax({
        type: "GET",
        url: "php/listar.php",
        dataType: "json",
        success: function(retorno) {
            if(retorno.status == 's'){
                for(var i = 0; i < retorno.registros.length; i++){
                    $("#mostrar").append(retorno.registros[i].nome + "<br>");
                }
            }
        }
    })
});


function gravar(){

    var dados = $("form").serialize();

    $.ajax({
        type: "POST",
        url: "php/gravar.php",
        dataType: "json",
        data: dados,
        success: function(retorno) {
            if(retorno.status == 's'){
                for(var i = 0; i < retorno.registros.length; i++){
                    $("#mostrar").append(retorno.registros[i].nome + "<br>");
                }
            }
        }
    })
}
