<a id="rpc"></a>
<div class="div-shadow contenido">
	<div>
		<div class="titulo-sec" style="background-color:#0e8e5f; width:100%;">
			<h5 style="padding:8px; color:white;">Facturas RPC</h5>
		</div>		
	</div>
	<div class="wrp-table">
		<table id="tblorgan" class="tbldoc table table-striped table-hover dt-responsive" cellpadding="0" width="100%">
			<thead>
				<tr>
					<th>ID</th>
					<th>Descripción</th>
					<th>PDF</th>
					<th>Mes_factura</th>
					<th>Año_factura</th>
					<th>Subido por</th>
					<th>Fecha carga</th>
					@if( User::isAdmin() )
					<th>Eliminar</th>
					@endif
				</tr>
			</thead>
			<tbody>
			@foreach($res_rpc as $row)
				<tr>
					<td>{{ $row->id }}</td>
					<td>{{ $row->desc_doc }}</td>
					<td>
						<a href="../visor/index.html#../{{ $row->url_file }}" target="_blank">
							<img style="width:25px;" src="{{ asset('assets/icons/pdf-icon.png') }}">
						</a>
					</td>
					<td>{{ FechaUtil::get_nom_mes($row->elaborado) }}</td>
					<td>{{ FechaUtil::getYear($row->elaborado) }}</td>
					<td>{{ $row->username }}</td>
					<td>{{ $row->created_at }}</td>
					@if( User::isAdmin() )
					<td><a data-toggle="modal" onclick="alert(<?php echo $row->url_file; ?>)" data-target="#confirma-mdl"><img class="btn-del-doc"></a></td>
					@endif				
				</tr>
			@endforeach
			</tbody>
		</table>
	</div>
</div>