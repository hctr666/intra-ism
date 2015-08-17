<a id="reg"></a>
<div class="div-shadow contenido">
	<div>
		<div class="titulo-sec" style="background-color:#0e8e5f; width:100%;">
			<h5 style="padding:8px; color:white;">Reglamento Interno de Trabajo (RIT)</h5>
		</div>		
	</div>
	<div class="wrp-table">
		<table id="tblorgan" class="tbldoc table table-striped table-hover dt-responsive" cellpadding="0" width="100%">
			<thead>
				<tr>
					<th>ID</th>
					<th>Descripción</th>
					<th>Visualizar</th>
					<th>Elaborado</th>
					<th>Versión</th>
					<th>Subido por</th>
					<th>Fecha carga</th>
					@if( User::isAdmin() )
					<th>Eliminar</th>
					@endif
				</tr>
			</thead>
			<tbody>
			@foreach($res_rit as $row)
				<tr>
					<td>{{ $row->id }}</td>
					<td>{{ $row->desc_doc }}</td>
					<td>
						<a href="../visor/index.html#../{{ $row->url_file }}" target="_blank">
							<img style="width:25px;" src="{{ asset('assets/icons/pdf-icon.png') }}">
						</a>
					</td>
					<td>{{ date('d-m-Y', strtotime($row->elaborado)) }}</td>
					<td>{{ $row->version }}</td>
					<td>{{ $row->username }}</td>
					<td>{{ date('d-m-Y - h:m', strtotime($row->created_at)) }}</td>
					@if( User::isAdmin() )
					<td><a href="#"><img class="btn-del-doc"></a></td>
					@endif
				</tr>
			@endforeach
			</tbody>
		</table>
	</div>
</div>