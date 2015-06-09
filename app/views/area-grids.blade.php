<!DOCTYPE html>
<html>
<head>
	<!-- Main CSS -->
	{{ HTML::style('assets/css/grid/grid-animate.css'); }}

	<!-- Modrnizr -->
	{{ HTML::script('assets/js/modernizr.js'); }}
	<!--{{ HTML::style('assets/css/grid/pic-styles.css'); }}-->
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
		font-size: .9em;
	}

	.btn-def{
		width: 130px;
		margin:3px auto 5px 1px;
		background-color:#0e8e5f;
		border-width: 2px;
		border-color:white;
		color:#fff;
	}

	.btn-def:hover{
		color: #0e8e5f;
		background-color: white;
		-webkit-transition: background-color .75s, color .75s;
	}

	.btn-def span.btn-icon{
		float: left;
    	width: 25px;
    	height: 25px;
    	border: 0;
	}

	.spn-team{
		background: url(assets/icons/team_icon.png) no-repeat;
	}

	.spn-files{
		background: url(assets/icons/folder-icon.png) no-repeat;
	}

	.btn-team{
		font-size: .85em;
		vertical-align: middle;
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
			    <div style="margin-top:12%;">
		        	<button class="btn btn-def btn-files" name="sistemas" ><span class="btn-icon spn-files"></span>Archivos</button>
		        	<button class="btn btn-def btn-team" name="sistemas"><span class="btn-icon spn-team"></span>Colaboradores</button>
			    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="comunic" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="comunic"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="rrhh" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="rrhh"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="fina" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="fina"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
					    <div style="margin-top:12%;">
				        	<button class="btn btn-def btn-files" name="legal" ><span class="btn-icon spn-files"></span>Archivos</button>
				        	<button class="btn btn-def btn-team" name="legal"><span class="btn-icon spn-team"></span>Colaboradores</button>
					    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="logist" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="logist"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="prod" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="prod"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="sost" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="sost"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="segu" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="segu"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="salud" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="salud"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="i-d" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="i-d"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
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
				    <div style="margin-top:12%;">
			        	<button class="btn btn-def btn-files" name="comerc" ><span class="btn-icon spn-files"></span>Archivos</button>
			        	<button class="btn btn-def btn-team" name="comerc"><span class="btn-icon spn-team"></span>Colaboradores</button>
				    </div>
			    </span>
			    <div class="nom-area">
					<p>Comercial</p>
				</div>
			</div>
		</div>
	</div>
<script>document.addEventListener("touchstart", function(){}, true);</script>
</div>
</body>
</html>
<script type="text/javascript">
	$(function(){
		$('.btn-team').click(function (e){
			$("#contenedor").load("equipo");//
			//$(window).scrollTop($('#contenedor').offset().bottom);
			$("#contenedor")[0].scrollIntoView(true).animate();
		});
	});
</script>