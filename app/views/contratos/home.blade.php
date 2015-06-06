<!DOCTYPE html>
<html>
<head>
	<title>Contratos</title>
	{{ HTML::style('assets/css/contratos-table.css'); }}
	{{ HTML::script('assets/js/sorttable.js'); }}
</head>
<body>
	<div>Contratos</div>
	<table class="sortable">
		<thead>
			<tr>
				<th width="55" class="cod">Cód.</th>
				<th width="180" class="name">Nombres</th>
				<th width="90" class="tipo">Tipo</th>
				<th width="90" class="cargo">Cargo</th>
				<th width="120" class="condi">Condición</th>
				<th width="70" class="ini">Inicio</th>
				<th width="70">Fin</th>
				<th width="70">Monto</th>
				<th width="63.9">Editar</th>
				<th width="63.9">Cese</th>
				<th width="63.9">Renuncia</th>
				<th width="63.9">Imprimir</th>
				<th width="8"></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td width="55" class="cod">1123</td>
				<td width="180" class="name">pnfjnvdfn vkdsfnvksd fnvkdfsj n vndf</td>
				<td width="90" class="tipo">80o</td>
				<td width="90" class="cargo">mhmg</td>
				<td width="120" class="condi">mlyg</td>
				<td width="70" class="ini">7yug</td>
				<td width="70" class="fin">09hjh</td>
				<td width="70">mnn</td>
				<td width="63.9">9</td>
				<td width="63.9">mnkj54</td>
				<td width="63.9">5ffhj</td>
				<td width="63.9">hu8m3</td>
			</tr>
		@for ($i = 0; $i < 100; $i++)
			<tr>
				<td>{{ $i }}</td>
				<td>nk</td>
				<td>00o</td>
				<td>bbhmg</td>
				<td>ygyg</td>
				<td>7yug</td>
				<td>09hjh</td>
				<td>mnn</td>
				<td>87</td>
				<td>lnkj54</td>
				<td>8hj</td>
				<td>0m3</td>
			</tr>
		@endfor
		</tbody>
	</table>
</body>
</html>