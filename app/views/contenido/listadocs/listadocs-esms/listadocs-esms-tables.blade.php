<div class="tables-container">
	<h4><strong>Estructura Organizacional</strong></h4>
	@include('contenido.listadocs.listadocs-esms.tables.listadocs-tables-orgn')
	@include('contenido.listadocs.listadocs-esms.tables.listadocs-tables-mof')
</div>
<hr>
<div class="tables-container">
	@include('contenido.listadocs.listadocs-esms.tables.listadocs-tables-foda')
</div>
<hr>
<div id="poli" class="tables-container">
	@include('contenido.listadocs.listadocs-esms.tables.listadocs-tables-politica')
</div>
<hr>
<div id="proc" class="tables-container">
	@include('contenido.listadocs.listadocs-esms.tables.listadocs-tables-procedure')
</div>
@if( $cod == 'esms' )
<div class="tables-container">
	<h4><strong>Facturas</strong></h4>
	@include('contenido.listadocs.listadocs-esms.tables.listadocs-tables-rpc')
	@include('contenido.listadocs.listadocs-esms.tables.listadocs-tables-modem')
</div>
@endif