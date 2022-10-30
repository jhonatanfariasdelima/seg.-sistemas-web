

function enviar(){

    var formData = new FormData();
    var arquivo = $("#arquivo")[0].files;
    formData.append('file', arquivo[0]);

    $.ajax({
        type: "POST",
        data: formData,
        url: "php/enviar.php",
        contentType: false,
        processData: false
    })


}