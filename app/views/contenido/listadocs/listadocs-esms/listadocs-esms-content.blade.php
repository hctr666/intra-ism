<style type="text/css">
	form, h3{ margin: 20px;	}
</style>
<div class="jumbotron">

@if(Session::has('upload_error'))
	<div class="alert alert-danger fade in alert-dismissable msj">
		<strong>¡Error!</strong>
		{{ Session::get('upload_error') }}
	</div>
@endif
@if(Session::has('msj-upload-ok'))
	<div class="alert alert-info fade in alert-dismissable msj">
		{{ Session::get('msj-upload-ok') }}
	</div>
@endif
<input id="harea" type="hidden" value="esms">
@if( User::isAdmin() )
	<form method="POST" class="form-horizontal" enctype="multipart/form-data" action="{{ url('documentos/esms/'.$cod_sede.'/'.$cod.'/ul_2'); }}">
        <h3><strong>Subir Documento</strong></h3>
        <div class="form-group">
	   		<label for="sel-tipo-doc" class="col-sm-2 control-label">Tipo documento:</label>
	   		<div class="col-sm-10">
	   		@if( $cod == 'esms')
				{{ Form::select('tipo-doc', ['0'=>'Seleccionar...', '1'=>'Organigrama', '3'=>'RIT', '4'=>'RSST', '8'=>'Factura'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-doc']) }}
	   		@else
				{{ Form::select('tipo-doc', ['0'=>'Seleccionar...', '1'=>'FODA', '2'=>'MOF', '3'=>'Organigrama', '4'=>'Política', '5'=>'Procedimiento'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-doc']) }}
	   		@endif
	   		</div>
		</div>
        <div id="_fact" class="form-group" style="display:none;">
			<label class="col-sm-2 control-label" for="sel-tipo-fac">Factura tipo:</label>
			<div class="col-sm-10">
			{{ Form::select('fac-tipo', ['8'=>'RPC', '9'=>'Modem'], null, ['class'=>'form-control frm-selct', 'id'=>'sel-tipo-fac']) }}
			</div>
		</div>

		<!--selects ocultos-->
		<div id="_nom-poli" class="form-group" style="display:none;">
	   		<label for="txt-poli" class="col-sm-2 control-label">Descripción</label>
	   		<div class="col-sm-10">
		   		<input type="text" name="nompol" required placeholder="" class="form-control frm-selct" id="txtnom" >
	   		</div>
		</div>
		<div id="_txcarg" class="form-group" style="display:none;">
	   		<label for="txt-poli" class="col-sm-2 control-label">MOF de</label>
	   		<div class="col-sm-10">
	   			<input type="text" name="tcarg" required placeholder="Ingrese el Cargo" class="form-control frm-selct" id="txtcarg" >
			</div>
		</div>
		<!--fin selects ocultos-->

		<!--<div id="_orign" class="form-group">
	   		<label for="sel-origen">Origen documento:</label>
			{{ Form::select('origen-de', [$orign], null, ['class'=>'form-control', 'id'=>'sel-origen']) }}
		</div>-->
		<div class="form-group">
			<label class="col-sm-2 control-label" for="txtvers5aqion">Versión</label>
			<div class="col-sm-10">
				<input type="number" required value="1" min='1' step="0.1" id="txtversion" name="txtversion"  class="form-control number-input-w" />
			</div>
		</div>
		<div class="form-group">
			<label for="fech-elab" class="col-sm-2 control-label">Fecha elaboración:</label>
            <div class='input-group date date-input-w col-sm-10' id='dtp_elab'>
                <input name="fch-elab" type='text' required class="form-control" />
                <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
            </div>
        </div>
		<div class="form-group">
			<label class="col-sm-2 control-label"></label>
			<div class="col-sm-10 file_input">
				<input id="file-0b" class="file form-control" name="doc" type="file">
			</div>
        </div>
	</form>
</div>
@endif
@include('contenido.listadocs.listadocs-esms.listadocs-esms-tables')
