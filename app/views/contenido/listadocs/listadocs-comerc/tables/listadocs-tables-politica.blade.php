<h4><strong>Políticas</strong></h4>
<div class="div-shadow contenido">
	<div>
		<div class="titulo-sec" style="background-color:#0e8e5f; width:100%;">
			<h5 style="padding:8px; color:white;"></h5>
		</div>		
	</div>
	<div class="wrp-table">
		<table id="tblorgan" class="tbldoc table table-striped table-hover dt-responsive" cellpadding="0" width="100%">
			<thead>
				<tr>
					<th>ID</th>
					<th>Descripción</th>
					<th>Visualizar</th>
					<th>Elaborado por</th>
					<th>Subido por</th>
					<th>Versión</th>
					<th>Fecha carga</th>
				</tr>
			</thead>
			<tbody>
			@foreach($res_pol as $row)
				<tr>
					<td>{{ $row->id }}</td>
					<td>{{ $row->desc_doc }}</td>
					<td>
						<a href="http://{{ $row->url_file }}" target="_blank">
							<img style="width:25px;" src="{{ asset('assets/icons/pdf-icon.png') }}">
						</a>
					</td>
					<td>{{ $row->desc_area }}</td>
					<td>{{ $row->username }}</td>
					<td>{{ $row->version }}</td>
					<td>{{ $row->created_at }}</td>
				</tr>
			@endforeach
			</tbody>
		</table>
	</div>
</div>