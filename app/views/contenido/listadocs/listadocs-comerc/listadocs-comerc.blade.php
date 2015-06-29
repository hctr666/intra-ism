<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Documentos de {{ $empresa }}</title>
<link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
<link rel="shortcut icon" href="{{ asset('favicon.ico') }}" sizes="32x32">
<link rel="shortcut icon" href="{{ asset('favicon.ico') }}" sizes="48x48">
<link rel="shortcut icon" href="{{ asset('favicon.ico') }}" sizes="64x64">

<!-- Apple Touch Icons -->
<link rel="apple-touch-icon" href="{{ asset('favicon.ico') }}" sizes="120x120">
<link rel="apple-touch-icon" href="{{ asset('favicon.ico') }}" sizes="152x152">
<link rel="apple-touch-icon" href="{{ asset('favicon.ico') }}" sizes="76x76">
<link rel="apple-touch-icon" href="{{ asset('favicon.ico') }}" sizes="114x114">
<link rel="apple-touch-icon" href="{{ asset('favicon.ico') }}" sizes="57x57">
<link rel="apple-touch-icon" href="{{ asset('favicon.ico') }}" sizes="144x144">
<link rel="apple-touch-icon" href="{{ asset('favicon.ico') }}" sizes="72x72">


{{ HTML::style('assets/css/bs/3.1/bootstrap.min.css'); }}
{{ HTML::style('assets/css/bs/3.1/bootstrap-theme.min.css'); }}
{{ HTML::style('assets/css/bs/fileinput.min.css'); }}
{{ HTML::style('assets/css/bs/bootstrap_dtp.min.css'); }}

<style type="text/css">
	.bs-example{
    	margin: 0;
    }

    .navbar-brand{
        margin-top: -15px;
    }

    #logo{
        max-width: 70px;
        margin-bottom: -10px;
    }

    .jumbotron{
        margin-top: 30px;
    }

    option{
        padding: 10px;
        font-size: 0.9em;
    }

</style>
</head>
<body>
    @include('contenido.listadocs.listadocs-comerc.listadocs-comerc-header')
    @include('contenido.listadocs.listadocs-comerc.listadocs-comerc-content')
</body>
</html>

{{ HTML::script('assets/js/jquery/jquery10.min.js'); }}
{{ HTML::script('assets/js/bs/3.1/bootstrap.min.js'); }}
{{ HTML::script('assets/js/bs/fileinput.min.js'); }}
{{ HTML::script('assets/js/bs/fileinput_locale_es.js'); }}
{{ HTML::script('assets/js/moment/moment.min.js'); }}
{{ HTML::script('assets/js/bs/collapse.js'); }}
{{ HTML::script('assets/js/bs/transition.js'); }}
{{ HTML::script('assets/js/bs/bootstrap_dtp.min.js'); }}

<script>

    //Se ocultan todos los selects

    $("#file-0b").fileinput({
        language : 'es',
        allowedFileExtensions : ['pdf']
    });

    $(function () {
        $('.date').datetimepicker({
            format: 'YYYY-MM-DD'
        });
    });

    //verificar si ningun tipo se ha seleccionado
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

            } else {
                $("#_proc").hide();
                $("#_proc select").val("0");
            };

            if ($('#sel-tipo-doc option:selected').val() == '6') {
                $("#_co").hide();
            };

            if ($('#sel-tipo-doc option:selected').val() == '7') {
                $("#_co").hide();
            };

        });

        //prueba de valor de options
        /*$('#sel-orign').on('change', function(){
            alert($(this).val());
        });*/

    });
</script>