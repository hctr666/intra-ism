<!DOCTYPE html>
<html>
<head>
	<title>Users view</title>
	{{ HTML::style('assets/css/bs/bootstrap.min.css'); }}
</head>
<body>
	<h1>Usuarios</h1>
		<table class="table table-condensed">
			<thead style="background-color:#0e8e5f;">
				<tr>
					<th><font color="white">Codigo</font></th>
					<th><font color="white">Nombre</font></th>
					<th><font color="white">Email</font></th>
					<th>····</th>
					<th>····</th>
				</tr>
			</thead>
			<tbody>
			@if($users)
				@foreach($users as $user)
				<tr>
					<td>{{$user->id}}</td>
					<td>{{$user->display_name}}</td>
					<td>{{$user->email}}</td>
					<td>{{HTML::link('user/delete/'.$user->id, 'Borrar', array('class'=>'btn-sm btn-danger'))}}</td>
					<td>{{HTML::link('user/update/'.$user->id, 'Editar', array('class'=>'btn-sm btn-info'))}}</td>
				</tr>
				@endforeach
			@else
				<font color="red">No hay usuarios registrados</font>
			@endif
			</tbody>
		</table>
<br/>
{{HTML::link('user/create', 'Nuevo usuario', array('class'=>'btn btn-info'))}}
</body>
</html>