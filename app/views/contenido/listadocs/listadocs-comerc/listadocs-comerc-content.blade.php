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
		@if($cod == 'bhr' || $cod == 'ch')
        <div class="form-group">
	   		<label for="sel-tipo-doc">Tipo documento:</label>
			{{ Form::select('tipo-doc', ['0'=>'Seleccionar...', '8'=>'Factura'], null, ['class'=>'form-control', 'id'=>'sel-tipo-doc']) }}
		</div>
		@else
        <div class="form-group">
	   		<label for="sel-tipo-doc">Tipo documento:</label>
			{{ Form::select('tipo-doc', ['Seleccionar...', 'FODA', 'MOF', 'Organigrama', 'Política', 'Procedimiento', 'RIT', 'RSST', 'Factura'], null, ['class'=>'form-control', 'id'=>'sel-tipo-doc']) }}
		</div>
		@endif
		<!--selects ocultos-->
		<div id="_nom-poli" class="form-group" style="display:none;">
	   		<!--<label for="txt-poli">Nombre Politica:</label>-->
	   		<input type="text" name="nompol" placeholder="" class="form-control" id="txtnom" >
		</div>
		<div id="_poli" class="form-group" style="display:none;">
	   		<label for="sel-tipo-pol">Politica de:</label>
			{{ Form::select('pol-de', ['Administración', 'Almacén', 'Caja', 'Contabilidad', 'Ventas'], null, ['class'=>'form-control', 'id'=>'sel-tipo-pol']) }}			
		</div>
		<div id="_proc" class="form-group" style="display:none;">
	   		<label for="sel-tipo-foda">Procedimiento de:</label>
			{{ Form::select('proc-de', ['Administración', 'Almacén', 'Caja', 'Contabilidad', 'Ventas'], null, ['class'=>'form-control', 'id'=>'sel-tipo-proc']) }}
		</div>
		<div id="_co" class="form-group" style="display:none;">
	   		@if( $cod == 'ga' )
	   		{{ Form::label('cop', 'Centro Operativo:', array('for' => 'sel-co')) }}
			{{ Form::select('c-op', ['Cañete', 'Casma', 'Chimbote', 'Chincha', 'Huacho', 'Huaral', 'Huaraz', 'Ica', 'Mala', 'Nazca', 'San Juan de Lurigancho'], null, ['class'=>'form-control', 'id'=>'sel-co']) }}
			@elseif( $cod == 'sl' )
	   		{{ Form::label('cop', 'Centro Operativo:', array('for' => 'sel-co')) }}
			{{ Form::select('c-op', ['Camana', 'Cuzco', 'Ilo', 'Mollendo', 'Moquegua', 'Pedregal', 'Puno', 'Tacna'], null, ['class'=>'form-control', 'id'=>'sel-co']) }}
			@elseif( $cod == 'ck' )
	   		{{ Form::label('cop', 'Centro Operativo:', array('for' => 'sel-co')) }}
			{{ Form::select('c-op', ['Arequipa', 'Juliaca'], null, ['class'=>'form-control', 'id'=>'sel-co']) }}			
			@endif
		</div>
		<div id="_foda" class="form-group" style="display:none;">
	   		<label for="sel-tipo-foda">FODA de:</label>
			{{ Form::select('foda-de', ['Administración', 'Almacén', 'Caja', 'Contabilidad', 'Ventas', 'Superv. Ventas', 'Jefe Ventas', 'Jefe Zonal', 'Ejecutivo Ventas'], null, ['class'=>'form-control', 'id'=>'sel-tipo-foda']) }}
		</div>
		<div id="_fact" class="form-group" style="display:none;">
			<label for="sel-tipo-fac">Factura tipo:</label>
			{{ Form::select('fac-tipo', ['8'=>'RPC', '9'=>'Modem'], null, ['class'=>'form-control', 'id'=>'sel-tipo-fac']) }}
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
			@if($cod == 'ch' || $cod == 'bhr')
			<label for="fech-elab">Fecha emisión:</label>
			@else
			<label for="fech-elab">Fecha elaboración:</label>
			@endif
            <div class='input-group date' id='dtp_elab'>
                <input name="fch-elab" type='text' class="form-control" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
        @if($extra == 1)
		<div class="form-group">
			<label for="fech-aprob">Fecha aprobación:</label>
            <div class='input-group date' id='dtp_aprob'>
                <input type='text' name="fch-apro" class="form-control" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
        @endif
		<div class="form-group">
            <input id="file-0b" class="file form-control" name="doc" type="file">
        </div>
	</form>
</div>
@endif
@include('contenido.listadocs.listadocs-comerc.listadocs-comerc-tables')
