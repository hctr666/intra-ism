<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Documentos de {{ $area }} - {{ $sede }}</title>
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
{{ HTML::style('assets/css/bs/datatables.bstrap.css'); }}
{{ HTML::style('assets/css/tables/datatables.resp.css'); }}

<style type="text/css">
	.bs-example{ margin: 0; }
    .navbar-brand{ margin-top: -15px; }
    #logo{ max-width: 80px; margin-bottom: -10px; }
    .jumbotron{ margin-top: 30px; }
    option{ padding: 10px; font-size: 0.9em; }
    table.dataTable th, table.dataTable td { font-size: 0.85em; }
    .div-shadow { -webkit-box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.62); -moz-box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.62); box-shadow: 0px 0px 36px -7px rgba(0,0,0,0.62); }
    table{ margin:25px; }
    .tables-container{ margin: 15px; }
    .wrp-table{ margin: 25px; }
    .col-sm-12{ padding: 0px; }
    table{ margin-left: 5px; margin-right: 16px; }
    @media(min-width: 768px){ .nav-align{ float: right; } }
    .smenu { font-size: .85em; }
    .nom-area{ float:left; font-style:italic; margin-top:16px; font-family: serif; }
</style>
</head>
<body>
    @include('contenido.listadocs.listadocs-esms.listadocs-esms-header')
</body>
</html>

<!--Scripts-->
{{ HTML::script('assets/js/jquery/jquery10.min.js'); }}
{{ HTML::script('assets/js/bs/3.1/bootstrap.min.js'); }}
{{ HTML::script('assets/js/bs/fileinput.min.js'); }}
{{ HTML::script('assets/js/bs/fileinput_locale_es.js'); }}
{{ HTML::script('assets/js/moment/moment.min.js'); }}
{{ HTML::script('assets/js/bs/collapse.js'); }}
{{ HTML::script('assets/js/bs/transition.js'); }}
{{ HTML::script('assets/js/bs/bootstrap_dtp.min.js'); }}
{{ HTML::script('assets/js/tables/datatables.min.js'); }}
{{ HTML::script('assets/js/tables/datatables.responsive.min.js'); }}
{{ HTML::script('assets/js/bs/datatables.bstrap.js'); }}
{{ HTML::script('assets/js/util/nuevoDocComerc.js'); }}

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

    $(document).ready(function() {
        $('.tbldoc').DataTable();
    });

    /*
     *div navigation
     */
    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top-90
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#bs-example-navbar-collapse-1 a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#bs-example-navbar-collapse-1 ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }
</script>
