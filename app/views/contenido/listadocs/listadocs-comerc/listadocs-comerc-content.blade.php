<!--{{ HTML::style('assets/css/bs/3.3.4/bootstrap.min.css'); }}-->
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
<style type="text/css">
	form, h3{
		margin: 20px;
	}
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

<h3><strong>Cargar Documento</strong></h3>	
	<form method="POST" enctype="multipart/form-data" action="{{ url('documentos/'.$cod.'/ul_1'); }}">
        <div class="form-group">
   		<label for="sel-tipo-doc">Tipo documento:</label>
		{{ Form::select('tipo-doc', ['Seleccionar...', 'Organigrama', 'MOF', 'FODA', 'RIT', 'Política'], null, ['class'=>'form-control', 'id'=>'sel-tipo-doc']) }}
		</div>
        <div class="form-group">
            <input id="file-0b" class="file form-control" name="doc" type="file">
        </div>
	</form>
</div>