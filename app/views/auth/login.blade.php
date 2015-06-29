<!DOCTYPE html>
<!--[if IE 8]> 				 <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
	<meta name="description" content=""/>
	<meta name="keywords" content="" />
	<meta name="author" content="hctr"/>
	
	<!-- Favicons -->
	<link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
	<link rel="shortcut icon" href="{{ asset('favicon.ico') }}" sizes="32x32">
	<link rel="shortcut icon" href="{{ asset('favicon.ico') }}" sizes="48x48">
	<link rel="shortcut icon" href="{{ asset('favicon.ico') }}" sizes="64x64">
	<title>Acceso al Sistema</title>
	<!-- Bootstrap core CSS -->
	{{ HTML::style('assets/css/bs/bootstrap.css'); }}

    <!-- Custom styles for this template -->
    {{ HTML::style('assets/css/login.css'); }}
    {{ HTML::style('assets/css/animate-custom.css'); }}

    <!-- custom.modernizr script for this template -->
    {{ HTML::script('assets/js/custom.modernizr.js'); }}

</head>
<body>
<div class="container" id="login-block">
	<div class="row">
		<div class="col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
			<div class="login-box clearfix animated flipInY">
				<div class="login-logo">
	        		<a href="#"><img src="assets/img/logo-small-2.png" alt="Industrias San Miguel" /></a>
				</div>
				<hr />
		    	<h3 class="animated bounceInDown inises">Acceso Intranet</h3>	        	
		    	<div class="login-form">
					@if(Session::has('mensaje_error'))
		    		<div class="alert alert-danger fade in alert-dismissable">
		    			<strong>¡Error!</strong>
						{{ Session::get('mensaje_error') }}
		    		</div>
		    		@endif
		    		
		    		@if(Session::has('mensaje_info'))
	    			<div class="alert alert-info fade in alert-dismissable">
	    				{{ Session::get('mensaje_info') }}
	    			</div>
		    		@endif

		    		{{ Form::open(array('url' => '/login')) }}
						{{ Form::text('email', Input::old('email'), array('placeholder'=>'Email o nombre de usuario', 'required' => 'required', 'autofocus' => 'autofocus')) }}
						{{ Form::password('pass', array('placeholder' => 'Contraseña', 'required' => 'required')) }}
						<label class="checkbox check">
							{{ Form::checkbox('rememberme', true) }}Recordar Contraseña
						</label>
						{{ Form::submit('Acceder', array('class' => 'btn btn-login')) }}
					{{ Form::close() }}
		    	</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
