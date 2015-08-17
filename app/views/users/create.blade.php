<h1>Nuevo Usuario</h1>

@if(Session::has('mensaje_error'))
<div>
	<strong>¡Error!</strong>
	{{ Session::get('mensaje_error') }}
</div>
@endif

{{ Form::open(array('url' => '/user/created')) }}
	<!--Datos personales-->
	<label>Nombres:</label>
	<input type="text" name="txtname"/><br/>
	<label>Apellidos:</label>
	<input type="text" name="txtapel"/><br/>
	<label>Empresa:</label>
	<select id="sl_emp">
		<option></option>
	</select><br/>	
	<label>Area:</label>
	<select id="sel_area">
		<option></option>
	</select><br/>
	<label>Cargo:</label>
	<select id="sl_cargo">
		<option></option>
	</select><br/>
	<hr/>
	<!--Datos de usuario-->
	<label>Usuario:</label>
	<input type="text" name="txtusern"/><br/>
	<label>Email:</label>
	<input type="email" name="txtemail"/><br/>
	<label>Contraseña:</label>
	<input type="password" name="txtpass"/><br/>
	<label>Confirmar contraseña:</label>
	<input type="password" name="txtconfpass"><br/>
	<label>Foto perfil</label>
	<input type="file" value="Buscar foto" name="fl_foto"><br/>
	<input type="submit" value="Aceptar">
{{ Form::close() }}

