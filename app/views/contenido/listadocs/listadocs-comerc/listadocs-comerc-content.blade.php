{{ HTML::style('assets/css/bs/3.3.4/bootstrap.min.css'); }}

<style type="text/css">
	form, h3{ margin: 20px;	}
</style>
<div class="jumbotron">

@if(Session::has('upload_error'))
	<div class="alert alert-danger fade in alert-dismissable msj" >
		<strong>¡Error!</strong>
		{{ Session::get('upload_error')	}}
	</div>
@endif
@if(Session::has('msj-upload-ok'))
	<div class="alert alert-info fade in alert-dismissable msj">
		{{ Session::get('msj-upload-ok') }}
	</div>
@endif

@if( User::isAdmin() )	
	<form method="POST" enctype="multipart/form-data" class="form-horizontal" action="{{ url('documentos/'.$cod.'/ul_1'); }}">
		<h3><strong>Subir Documento</strong></h3>
		@if($cod == 'bhr' || $cod == 'ch')
        <div class="form-group">
	   		<label class="col-sm-2 control-label" for="sel-tipo-doc">Tipo documento</label>
	   		<div class="col-sm-10">
			{{ Form::select('tipo-doc', ['0'=>'Seleccionar...', '8'=>'Factura'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-doc']) }}
	   		</div>
		</div>
		@else
        <div class="form-group">
	   		<label for="sel-tipo-doc" class="col-sm-2 control-label" >Tipo documento</label>
	   		<div class="col-sm-10">
			{{ Form::select('tipo-doc', ['Seleccionar...', 'FODA', 'MOF', 'Organigrama', 'Política', 'Procedimiento', 'RIT', 'RSST', 'Factura'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-doc']) }}	   		
	   		</div>
		</div>
		<div id="_txcarg" class="form-group" style="display:none;">
	   		<label for="txt-poli" class="col-sm-2 control-label">MOF de</label>
	   		<div class="col-sm-10">
		   		<input type="text" name="txcarg" placeholder="Ej.: Jefe de ventas" class="form-control frm-selct" id="txtcarg" >
	   		</div>
		</div>
		@endif
		<!--selects ocultos-->
		<div id="_nom-poli" class="form-group" style="display:none;">
	   		<label for="nompol" class="col-sm-2 control-label">Descripción</label>
	   		<div class="col-sm-10">
		   		<input type="text" name="nompol" placeholder="" class="form-control frm-selct" id="txtnom" >
	   		</div>
		</div>
		<div id="_poli" class="form-group" style="display:none;">
	   		<label for="sel-tipo-pol" class="col-sm-2 control-label">Politica de</label>
	   		<div class="col-sm-10">
			{{ Form::select('pol-de', ['Administración', 'Almacén', 'Caja', 'Contabilidad', 'Ventas'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-pol']) }}
	   		</div>
		</div>
		<div id="_proc" class="form-group" style="display:none;">
	   		<label for="sel-tipo-foda" class="col-sm-2 control-label">Procedimiento de</label>
	   		<div class="col-sm-10">
			{{ Form::select('proc-de', ['Administración', 'Almacén', 'Caja', 'Contabilidad', 'Ventas'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-proc']) }}
	   		</div>
		</div>
		<div id="_co" class="form-group" style="display:none;">
	   		@if( $cod == 'ga' )
	   		{{ Form::label('cop', 'Centro Operativo', array('for' => 'sel-co', 'class' => 'col-sm-2 control-label')) }}
	   		<div class="col-sm-10">
			{{ Form::select('c-op', ['Cañete', 'Casma', 'Chimbote', 'Chincha', 'Huacho', 'Huaral', 'Huaraz', 'Ica', 'Mala', 'Nazca', 'San Juan de Lurigancho'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-co']) }}
	   		</div>
			@elseif( $cod == 'sl' )
	   		{{ Form::label('cop', 'Centro Operativo', array('for' => 'sel-co', 'class' => 'col-sm-2 control-label')) }}
	   		<div class="col-sm-10">
			{{ Form::select('c-op', ['Camana', 'Cuzco', 'Ilo', 'Mollendo', 'Moquegua', 'Pedregal', 'Puno', 'Tacna'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-co']) }}
			</div>
			@elseif( $cod == 'ck' )
	   		{{ Form::label('cop', 'Centro Operativo', array('for' => 'sel-co', 'class' => 'col-sm-2 control-label')) }}
			<div class="col-sm-10">
			{{ Form::select('c-op', ['Arequipa', 'Juliaca'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-co']) }}		
			</div>
			@endif
		</div>
		<div id="_foda" class="form-group" style="display:none;">
	   		<label for="sel-tipo-foda" class="col-sm-2 control-label">FODA de</label>
			<div class="col-sm-10">
			{{ Form::select('foda-de', ['Administración', 'Almacén', 'Caja', 'Contabilidad', 'Ventas', 'Superv. Ventas', 'Jefe Ventas', 'Jefe Zonal', 'Ejecutivo Ventas'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-foda']) }}
			</div>
		</div>
		<div id="_fact" class="form-group" style="display:none;">
			<label for="sel-tipo-fac" class="col-sm-2 control-label">Factura tipo</label>
			<div class="col-sm-10">
			{{ Form::select('fac-tipo', ['8'=>'RPC', '9'=>'Modem'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-fac']) }}
			</div>
		</div>	
		<!--fin selects ocultos-->

		<!--<div id="_orign" class="form-group">
	   		<label for="sel-origen">Origen documento:</label>
			{{ Form::select('origen-de', [$orign], null, ['class'=>'form-control', 'id'=>'sel-origen']) }}
		</div>-->

		<div class="form-group" style="display:none;">
	   		<label class="col-sm-2 control-label" for="sel-origen">Origen documento</label>  		
	   		<div class="col-sm-10">
	  			<select class="form-control" name="orign-de" id="sel-orign">
	    		@foreach($orign as $a)
	      			<option value="{{ $a->id }}">{{ $a->desc_area }}</option>
	    		@endforeach
	  			</select>
	   		</div>
		</div>
		<div class="form-group">
			@if($cod == 'ch' || $cod == 'bhr')
			<label for="fech-elab" class="col-sm-2 control-label">Fecha emisión</label>
			@else
			<label for="fech-elab" class="col-sm-2 control-label">Fecha elaboración</label>
			@endif
            <div class='input-group date date-input-w col-sm-10' id='dtp_elab'>
                <input name="fch-elab" type='text' required class="form-control" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
		<div class="form-group">
			<label for="doc" class="col-sm-2 control-label"></label>
			<div class="col-sm-10 file_input">
            	<input id="file-0b" class="file form-control" name="doc" type="file">
        	</div>
        </div>
	</form>
</div>
@endif
@include('contenido.listadocs.listadocs-comerc.listadocs-comerc-tables')
