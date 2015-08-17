	//alert($('#sel-sede option:selected').text());
	//array para almacenar los id de cada etiqueta <a>
	var linksId = ['esms','sist','comu','ghuma','cont','fina',
				   'legal','logis','produ','soste',
				   'segu','salud','i+d','proy','mant'];

	$(document).ready(function(){
		//obtiene el valor inicial seleccionado del select
		var sede = $('#sel-sede option:selected').val();
		//concatena el link raiz + la sede
		var link = 'documentos/esms/' + sede;
		//función para transformar la url
		cambiaUrl(link, sede);
		//evento cada vez que se cambia de opción (sede)
		$('#sel-sede').on('change', function(){
			sede = $('#sel-sede option:selected').val();
			link = 'documentos/esms/' + sede;
			cambiaUrl(link, sede);
		});
	});

	function cambiaUrl(link, sede){
		//por cada objeto dentro del array se cambiara
		//las rutas según el area
		linksId.forEach(function(l){
			$('#'+l).attr('href', link + '/' + l);
		});
	}