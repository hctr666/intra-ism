<!DOCTYPE html>
<html>
<head>
			<!-- Main CSS -->
	{{ HTML::style('assets/css/grid/grid-animate.css'); }}

		<!-- Modrnizr -->
	{{ HTML::script('assets/js/modernizr.js'); }}
	{{ HTML::style('assets/css/grid/pic-styles.css'); }}

	<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<style type="text/css">
.nom-area {
	background-color:grey;
	margin-top:-5px;
}

.nom-area p {
	text-align:center;
	padding:3px;
}
</style>
<body>
<div class="row div-shadow">
	<div>
		<div class="titulo-sec" style="background-color:#0e8e5f; width:100%;">
			<h2 style="padding:8px; color:white;">Archivos y publicaciones</h2>
		</div>		
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic row">
				{{ HTML::image("assets/img/sistemas.jpg"); }}
			    <span class="pic-caption bottom-to-top">
			        <a href="{{ route('opciones', array('area'=>'sistemas')); }}">{{ HTML::image("assets/icons/explorer.png"); }}
			        	<center><strong>Sistemas</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Sistemas</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    {{ HTML::image("assets/img/comunic.jpg"); }}
			    <span class="pic-caption bottom-to-top">
			        <a href="#">{{ HTML::image("assets/icons/explorer.png"); }}
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Comunicaciones</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
				{{ HTML::image("assets/img/gesthumana.jpg"); }}
			    <span class="pic-caption bottom-to-top">
			        <a href="">{{ HTML::image("assets/icons/explorer.png"); }}
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Gestión Humana</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    {{ HTML::image("assets/img/cont-fina.jpg"); }}
			    <span class="pic-caption bottom-to-top">
			        <a href="">{{ HTML::image("assets/icons/explorer.png"); }}
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Contabilidad y Finanzas</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
				<!--Effect: Bottom to Top -->
				<div class="pic">
				    {{ HTML::image("assets/img/legal.jpg"); }}
				    <span class="pic-caption bottom-to-top">
				        <a href="">{{ HTML::image("assets/icons/explorer.png"); }}
				        	<center><strong>Explorar</strong></center>
				        </a>
				    </span>
				    <div class="nom-area">
						<p>Área Legal</p>
					</div>
				</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    {{ HTML::image("assets/img/logistica.jpg"); }}
			    <span class="pic-caption bottom-to-top">
			        <a href="">{{ HTML::image("assets/icons/explorer.png"); }}
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Logística</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    {{ HTML::image("assets/img/produccion.jpg"); }}
			    <span class="pic-caption bottom-to-top">
			        <a href="">{{ HTML::image("assets/icons/explorer.png"); }}
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Producción</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    {{ HTML::image("assets/img/sostenible.jpg"); }}
			    <span class="pic-caption bottom-to-top">
			        <a href="">{{ HTML::image("assets/icons/explorer.png"); }}
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Sostenibilidad</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    {{ HTML::image("assets/img/seg-ind.jpg"); }}
			    <span class="pic-caption bottom-to-top">
			        <a href="">{{ HTML::image("assets/icons/explorer.png") }}
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Seguridad Industrial</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    <img src="assets/img/salud-oc.jpg" alt="Pic"/>
			    <span class="pic-caption bottom-to-top">
			        <a href=""><img src="assets/icons/explorer.png">
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Salud Ocupacional</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    <img src="assets/img/id.jpg" alt="Pic"/>
			    <span class="pic-caption bottom-to-top">
			        <a href=""><img src="assets/icons/explorer.png">
			        	<center><strong>Explorar</strong></center>
			        </a>
				</span>
			    <div class="nom-area">
					<p>I+D</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
		<div class="pic-container">
			<!--Effect: Bottom to Top -->
			<div class="pic">
			    <img src="assets/img/distribuidor.jpg" alt="Pic"/>
			    <span class="pic-caption bottom-to-top">
			        <a href=""><img src="assets/icons/explorer.png">
			        	<center><strong>Explorar</strong></center>
			        </a>
			    </span>
			    <div class="nom-area">
					<p>Comercial</p>
				</div>
			</div>
		</div>
	</div>
<script>document.addEventListener("touchstart", function(){}, true);</script>
{{ HTML::script('assets/js/bs/bootbox.min.js'); }}
</div>
</body>
</html>