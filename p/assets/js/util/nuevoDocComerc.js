    var tipo = $('#sel-tipo-doc option:selected').val();
    var tipo_pol = $('#sel-tipo-pol').val();
    var tipo_proc = $('#sel-tipo-proc').val();
    var tipo_foda = $('#sel-tipo-foda').val();
    var co = $('#sel-co').val();

    $(function(){

        $('#_poli').hide();
        $('#_foda').hide();
        $('#_proc').hide();
        $('#_co').hide();
        $("#_nom-poli").hide();
        $("#_fact").hide();

        //deshabilitar si no se ha seleccionado ningún tipo documento
        if (tipo == '0') {
            $('#file-0b').prop('disabled', true);
        };

        if (tipo == '1' && tipo_foda == '0') {
            $('#file-0b').prop('disabled', true);
        };

        //deshabilitar en caso no haya seleccionado nngun tipo de documento
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
                $("#_foda select").val("0");
                $("#_foda").show();
                $("#_nom-poli").hide();
                $("#_co").show();

            } else {
                $("#_foda").hide();
                $("#_foda select").val("0");
            };

            if ($('#sel-tipo-doc option:selected').val() == '2') {
                $("#_co").hide();
                $("#_fact").hide();
                $("#_nom-poli").hide();
            };

            if ($('#sel-tipo-doc option:selected').val() == '3') {
                $("#_co").hide();
            };

            if ($('#sel-tipo-doc option:selected').val() == '4') {
                $("#_poli select").val("0");
                $("#_nom-poli").show();
                $("#_poli").show();
                $("#txtnom").attr("placeholder", "Ingrese el título de la Política");
                $("#_co").hide();
                $("#_fact").hide();

            } else {
                $("#_poli").hide();
                $("#_poli select").val("0");
            };

            if ($('#sel-tipo-doc option:selected').val() == '5') {
                $("#_proc select").val("0");
                $("#_nom-poli").show();
                $("#_proc").show();
                $("#txtnom").attr("placeholder", "Ingrese el título del Procedimiento");
                $("#_co").hide();
                $("#_fact").hide();
            } else {
                $("#_proc").hide();
                $("#_proc select").val("0");
            };

            if ($('#sel-tipo-doc option:selected').val() == '6') {
                $("#_co").hide();
                $("#_nom-poli").hide();
            };

            if ($('#sel-tipo-doc option:selected').val() == '7') {
                $("#_co").hide();
                $("#_nom-poli").hide();
            };

            if ($("#sel-tipo-doc option:selected").val() == '8') {
                $("#_fact").show();
                $("#_nom-poli").hide();
            } else {
                $("#_fact").hide();
            };
        });
    });