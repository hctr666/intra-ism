<div class="img-slider" style="height:auto">
	@include('home.subcontent.carousel')
</div>
<div id="contenedor" class="container" style="min-height:600px;">
	@include('home.subcontent.nosotros')
</div>
<!-- Site -->
<div class="container">
	<div id="archivos"></div>
	<div style="height:50px; margin-bottom:22px;"></div>		
	<div class="col-lg-12">
		<h2 class="tit-fsys"><strong>Sistema de Archivos</strong></h2>
		@include('home.subcontent.area-grids')
	</div>
</div><!-- /.container -->
<div class="container">
	<div id="loultimo"></div>
	<div style="height:40px;"></div>	
	<div class="col-lg-12">
		<h2 class="tit-fsys"><strong>Últimas Noticias</strong></h2>
		@include('home.subcontent.last-news')
	</div>	
</div>
<div id="multim"></div>
