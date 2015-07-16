<!DOCTYPE html>
<html lang="en" class="sb-init">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- Meta -->
<meta charset="utf-8">
<title>ISM Intranet Corporativa</title>
<meta name="description" content="Intranet corporativa ISM &copy;">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
<!-- Stylesheets -->
<!--{{ HTML::style('http://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic'); }}-->
{{ HTML::style('assets/css/bs/bootstrap.min.css'); }}
{{ HTML::style('assets/css/slide-bars/slidebars.min.css'); }}
{{ HTML::style('assets/css/style.css'); }}
{{ HTML::style('assets/css/style-2.css'); }}

</script><style type="text/css"></style><style type="text/css"></style>
<style type="text/css">
	#img-footer{ float: left;padding:4px;width:40px;background-color:rgba(255,255,255, .7);border-radius: 100px; }
	#contenedor{ border-top: dotted;border-bottom: dotted;border-color: #0e8e5f;border-width: .17em; }
</style>
<!-- Shims -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">

<!--<meta property="og:url" content="http://plugins.adchsm.me/slidebars/">-->
<meta property="og:title" content="Conecta">

<!-- Web App -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<!-- Favicons -->
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
	
<!-- Startup Images -->
<!-- iPhone 5, 5S, 5C -->
<link href="http://plugins.adchsm.me/slidebars/images/startup/1096.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">

<!-- iPhone 4, 4S -->
<link href="http://plugins.adchsm.me/slidebars/images/startup/920.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">

<!-- iPhone, 3G, 3GS -->
<link href="http://plugins.adchsm.me/slidebars/images/startup/460.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image">

<!-- iPad Retina, Mini Retina Portrait -->
<link href="http://plugins.adchsm.me/slidebars/images/startup/2008.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">

<!-- iPad Retina, Mini Retina Landscape -->
<link href="http://plugins.adchsm.me/slidebars/images/startup/1496.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">

<!-- iPad, Mini Portrait -->
<link href="http://plugins.adchsm.me/slidebars/images/startup/1004.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image">

	<!-- iPad, Mini Landscape -->
<link href="http://plugins.adchsm.me/slidebars/images/startup/748.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image">
{{ HTML::style('assets/css/slide-bars/prettify.css'); }}

<body id="top" data-twttr-rendered="true">
	<!-- Header -->
	@include('home.main-header')

	<!-- Contenido principal -->
	@include('home.main-content-wrapper')

	<!-- Menu deslizables ocultos -->
	@include('home.left-sb')
	@include('home.right-sb')

	<!--Footer-->
	@include('home.main-footer')
	
	<!-- Scripts -->
	<!-- jQuery -->
	{{ HTML::script('assets/js/jquery/jquery.min.js'); }}

	<!-- Bootstrap -->
	{{ HTML::script('assets/js/bs/bootstrap.min.js'); }}
	{{ HTML::script('https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'); }}
	{{ HTML::script('http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js'); }}
	
	<script type="text/javascript">
		//inicializa el carrusel de fotos
	    $('.carousel').carousel({ interval: 3000 })
	</script>


	<!-- Slidebars -->
	{{ HTML::script('assets/js/slide-bars/slidebars.min.js'); }}
	<script>
		(function($) {
			$(document).ready(function() { // Initiate Slidebars
				$.slidebars();
			});
		}) (jQuery);
	</script>

	<!--scripts slideshow-->
	{{ HTML::script('assets/js/slide-show/responsiveslides.min.js'); }}

	<!--Plugins para la agenda-->
	<script type="text/javascript" src='assets/js/moment/moment.min.js'></script>
	{{ HTML::script('assets/js/calendar/fullcalendar.min.js'); }}
	{{ HTML::script('assets/js/calendar/gcal.js'); }}
	{{ HTML::script('assets/js/calendar/lang-all.js'); }}
	{{ HTML::script('assets/js/loader/loadie.min.js'); }}

</body>
<script type="text/javascript">
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
        $('#main-header a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#main-header ul li a').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    }

    function makeHome() { $("#sb-site").load("home"); }

</script>
</html>