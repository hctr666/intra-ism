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
<script>
    $("#file-0b").fileinput({
        language : 'es',
        allowedFileExtensions : ['pdf']
    });

    //verificar si ningun tipo se ha seleccionado
    var tipo = $('#sel-tipo-doc option:selected').val();
    $(function(){
        if (tipo == '0') {
            $('#file-0b').prop('disabled', true);
        }

        $('#sel-tipo-doc').on('change', function(){
            if ($('#sel-tipo-doc option:selected').val() == '0') {
                $('#file-0b').prop('disabled', true);//deshabilitar en caso no haya seleccionado nngun tipo de documento
            } else {
                $('#file-0b').prop('disabled', false);
            }
        });
    });
</script>