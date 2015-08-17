{{ HTML::style('assets/css/bs/3.3.4/bootstrap.min.css'); }}
<style type="text/css">
	form, h3{ margin: 20px;	}
</style>
<div>
	<div>
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
		<input id="harea" type="hidden" value="esms">
		@if( User::isAdmin() )
			<form style="margin:30px;margin-top:-15px;" method="POST" enctype="multipart/form-data" action="{{ url('docs/ism/sistemas/soporte/ul_2'); }}" class="form-horizontal">
		        <h3><strong>Subir Documento</strong></h3>
		        <div class="form-group">
			   		<label class="col-sm-2 control-label" for="sel-tipo-doc">Tipo documento</label>
			   		<div class="col-sm-10">
						{{ Form::select('tipo-doc', ['0'=>'Seleccionar...', '1'=>'Manual', '2'=>'Formato'], null, ['class'=>'form-control', 'id'=>'sel-tipo-doc']) }}
			   		</div>
				</div>
				<!--selects ocultos-->
				<div id="_man-tipo" class="form-group">
					<label class="col-sm-2 control-label" for="sel-man-tipo">Manual de</label>
					<div class="col-sm-10">
						{{ Form::select('sel-man-tipo', ['0'=>'Instalación/Configuración', '1'=>'Usuario'], null, ['class'=>'form-control', 'id'=>'sel-man-tipo']) }}
					</div>
				</div>
				<!--fin selects ocultos-->
				<div class="form-group">
					<label class="col-sm-2 control-label" for="txtdesc">Descripción</label>
					<div class="col-sm-10">
						<input type="text" name="txtdesc" id="txtdesc" class="form-control" placeholder='Titulo del documento' />					
					</div>
				</div>
		        <div id="_ver" class="form-group">
					<label class="col-sm-2 control-label" for="txtversion">Versión</label>
					<div class="col-sm-10">
						<input class="form-control" type="number" step='0.1' min='1.0' name="txtversion" id="txtversion" />
					</div>
				</div>

				<div class="form-group">
					<label class="col-sm-2 control-label" for="fech-elab">Fecha elaboración</label>
		            <div class='col-sm-10 input-group date ' id='dtp_elab'>
		                <input name="fch-elab" type='text' class="form-control" />
		                <span class="input-group-addon">
		                    <span class="glyphicon glyphicon-calendar"></span>
		                </span>
		            </div>
		        </div>
				<div class="form-group">
					<label class="col-sm-2 control-label"></label>
					<div class="col-sm-10">
			            <input id="file-0b" class="file form-control" name="doc" type="file">
					</div>
		        </div>
			</form>
		</div>
		@endif
	</div>
</div>