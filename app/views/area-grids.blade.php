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
			<h2 style="padding:8px; color:white;">Contenido</h2>
		</div>		
	</div>
	<div class="row div-shadow">
		@include('contenido.esms')
	</div>
	@include('contenido.comercial')
</div>
<script>document.addEventListener("touchstart", function(){}, true);</script>
</body>
</html>
<script type="text/javascript">
	$(function(){
		$('.btn-team').click(function (e){
			/*var nom = $(this).attr('name');
			if (nom != "comerc") {

			};*/
			$(window).scrollTop($('#contenedor').offset().bottom);
			$("#contenedor")[0].scrollIntoView(true);
		});
		$(".btn-files").click(function(e){
			//$('#contenedor').load('archivos');
			$("#contenedor")[0].scrollIntoView(true);
		});
	});
</script>
