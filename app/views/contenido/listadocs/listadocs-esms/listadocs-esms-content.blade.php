<!--{{ HTML::style('assets/css/bs/3.3.4/bootstrap.min.css'); }}-->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">

<style type="text/css">
	form, h3{ margin: 20px;	}
</style>
<div class="jumbotron">

@if(Session::has('upload_error'))
	<div class="alert alert-danger fade in alert-dismissable">
		<strong>¡Error!</strong>
		{{ Session::get('upload_error') }}
	</div>
@endif
@if(Session::has('msj-upload-ok'))
	<div class="alert alert-info fade in alert-dismissable">
		{{ Session::get('msj-upload-ok') }}
	</div>
@endif

@if( User::isAdmin() )
<h3><strong>Subir Documento</strong></h3>	
	<form method="POST" enctype="multipart/form-data" action="{{ url('documentos/'.$cod.'/ul_1'); }}">
        <div class="form-group">
	   		<label for="sel-tipo-doc">Tipo documento:</label>
			{{ Form::select('tipo-doc', ['Seleccionar...', 'FODA', 'MOF', 'Organigrama', 'Política', 'Procedimiento'], null, ['class'=>'form-control', 'id'=>'sel-tipo-doc']) }}
		</div>

		<!--selects ocultos-->
		<div id="_nom-poli" class="form-group" style="display:none;">
	   		<!--<label for="txt-poli">Nombre Politica:</label>-->
	   		<input type="text" name="nompol" placeholder="" class="form-control" id="txtnom" >
		</div>
		<div id="_foda" class="form-group" style="display:none;">
	   		<label for="sel-tipo-foda">FODA de:</label>
			{{ Form::select('foda-de', ['Administración', 'Almacén', 'Caja', 'Contabilidad', 'Ventas', 'Superv. Ventas', 'Jefe Ventas', 'Jefe Zonal', 'Ejecutivo Ventas'], null, ['class'=>'form-control', 'id'=>'sel-tipo-foda']) }}
		</div>
		<div id="_fact" class="form-group" style="display:none;">
			<label for="sel-tipo-fac">Factura tipo:</label>
			{{ Form::select('fac-tipo', ['RPC', 'Modem'], null, ['class'=>'form-control', 'id'=>'sel-tipo-fac']) }}
		</div>	
		<!--fin selects ocultos-->

		<!--<div id="_orign" class="form-group">
	   		<label for="sel-origen">Origen documento:</label>
			{{ Form::select('origen-de', [$orign], null, ['class'=>'form-control', 'id'=>'sel-origen']) }}
		</div>-->

		<div class="form-group" style="display:none;">
	   		<label for="sel-origen">Origen documento:</label>  		
  			<select class="form-control" name="orign-de" id="sel-orign">
    		@foreach($orign as $a)
      			<option value="{{ $a->id }}">{{ $a->desc_area }}</option>
    		@endforeach
  			</select>
		</div>
		<div class="form-group">
			<label for="fech-elab">Fecha elaboración:</label>
            <div class='input-group date' id='dtp_elab'>
                <input name="fch-elab" type='text' class="form-control" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
		<div class="form-group">
			<label for="fech-aprob">Fecha aprobación:</label>
            <div class='input-group date' id='dtp_aprob'>
                <input type='text' name="fch-apro" class="form-control" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
		<div class="form-group">
            <input id="file-0b" class="file form-control" name="doc" type="file">
        </div>
	</form>
</div>
@endif
@include('contenido.listadocs.listadocs-comerc.listadocs-comerc-tables')
