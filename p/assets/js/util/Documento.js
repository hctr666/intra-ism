var tipo = $('#sel-tipo-doc option:selected').val();

$(function(){
	$("#_man-tipo").hide();

	//deshabilitar si no se ha seleccionado ningún tipo documento
	if (tipo == '0') {
	    $('#file-0b').prop('disabled', true);
	};

    $('#sel-tipo-doc').on('change', function(){
        if ($('#sel-tipo-doc option:selected').val() == '0') {
            $('#file-0b').prop('disabled', true);
        } else {
            $('#file-0b').prop('disabled', false);
        }
    });

    //Ocultar y mostrar los selects según selección
    $('#sel-tipo-doc').on('change', function(){
	    if ($('#sel-tipo-doc option:selected').val() == '1') {
            $("#_man-tipo").show();
        } else {
            $("#_man-tipo").hide();
        };
    });
});