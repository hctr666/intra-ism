<nav class="navbar navbar-default navbar-fixed-top sb-slide" role="navigation">
	<!-- Left Control -->
	<div class="sb-toggle-left navbar-left">
		<div class="navicon-line"></div>
		<div class="navicon-line"></div>
		<div class="navicon-line"></div>
	</div><!-- /.sb-control-left -->

	<!-- Right Control -->
	<div class="sb-toggle-right navbar-right">
		<!--<div class="navicon-line"></div>
		<div class="navicon-line"></div>
		<div class="navicon-line"></div>-->
		@if(is_null(Auth::user()->fotoperfil))
		<img width="70%" src="assets/img/foto-perfil.png">
		@else
		<img width="70%" src="{{ 'data: image;base64,'.base64_encode(Auth::user()->fotoperfil) }}">
		@endif
	</div><!-- /.sb-control-right -->

	<div class="container" id="main-header">
		<!-- Logo -->
		<div id="logo" class="navbar-left">
			<a href="http://localhost/ism-inet/public/"><img src="assets/img/logo-small-2.png" alt="ISM" width="77" height="40"></a>
		</div><!-- /#logo -->
		
		<!-- Menu -->
		<ul class="nav navbar-nav navbar-right">
			<li><a href="home"  title="Intranet ISM">Inicio</a></li>
			<li><a href="#nosotros" id="we" title="Misión, Visión y valores ISM">Nosotros</a></li>
			<li><a href="#archivos" id="news" title="Noticias destacadas y novedades">Sistema de Archivos</a></li>
			<!--li><a id="top-arrow" href="#">^</a></li-->
		</ul>
	</div>
</nav>