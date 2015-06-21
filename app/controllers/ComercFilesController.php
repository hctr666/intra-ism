<?php
/**
* 
*/
class ComercFilesController extends BaseController
{
	
	public function get_index($empresa){
		$nomemp = null;
		$img_url = null;
		switch ($empresa) {
			case 'ga':
				$nomemp = "G & A";
				$img_url = "../assets/img/GA.jpg";
				break;
			
			case 'sl':
				$nomemp = "SilverLake";
				$img_url = "../assets/img/SILVERLAKE.jpg";
				break;
			
			case 'ck':
				$nomemp = "Cyncat";
				$img_url = "../assets/img/cyncat.jpg";
				break;

			case 'ptv':
				$nomemp = "PTV Business";
				$img_url = "../assets/img/PTV.jpg";
				break;

			case 'thr':
				$nomemp = "THR";
				$img_url = "../assets/img/THR.jpg";
				break;
		}

		return View::make("contenido.listadocs.listadocs-comerc.listadocs-comerc", array('empresa' => $nomemp, 'cod' => $empresa, 'url_logo' => $img_url));
	}

	public function store($cod){		
		$url_destino = ""; //var url de destino
		$filename = ""; //nombre de archivo
		$foldername = ""; //nombre de folder
		$tipo = Input::get('tipo-doc'); //obtiene valor tipo documento seleccionado

		if (Input::hasFile('doc')) { //Si hay documento seleccionado
			if ($tipo != '0') { //Si ha seleccionado tipo documento
				$file = Input::file('doc'); //obtiene archivo
				$filename = $file->getClientOriginalName(); //obtiene nombre archivo
				$foldername = public_path()."/docs/"; //establece nombre folder documentos
	        	
				switch ($cod) {
					case 'ga': //si el documento pertenece a GYA
						if (!file_exists($foldername."/GYA")) { //si el archivo no existe
							$this->creafolder($foldername, "GYA"); //se crea folder
						}
						$url_destino = $foldername."GYA"; //url destino
						$url_destino = $this->carpetaSegunTipo($tipo, $url_destino);
						//almacena según tipo documento

						//$url_destino = public_path()."/docs/GYA/";
						if (!file_exists($url_destino.$filename)) {
							$uploadSuccess = $file->move($url_destino, $filename);
						} else {
							return Redirect::to('documentos/'.$cod)
									->with('upload_error', 'El archivo ya existe :(');
						}
						break;
					
					case 'sl':
						if (!file_exists($foldername."/SL")) { //si el archivo no existe
							$this->creafolder($foldername, "SL"); //se crea folder
						}
						$url_destino = $foldername."SL"; //url destino
						$url_destino = $this->carpetaSegunTipo($tipo, $url_destino);
						//almacena según tipo documento

						//$url_destino = public_path()."/docs/GYA/";
						if (!file_exists($url_destino.$filename)) {
							$uploadSuccess = $file->move($url_destino, $filename);
						} else {
							return Redirect::to('documentos/'.$cod)
									->with('upload_error', 'El archivo ya existe :(');
						}
						break;

					case 'ck':
						if (!file_exists($foldername."/CK")) { //si el archivo no existe
							$this->creafolder($foldername, "CK"); //se crea folder
						}
						$url_destino = $foldername."CK"; //url destino
						$url_destino = $this->carpetaSegunTipo($tipo, $url_destino);
						//almacena según tipo documento

						//$url_destino = public_path()."/docs/GYA/";
						if (!file_exists($url_destino.$filename)) {
							$uploadSuccess = $file->move($url_destino, $filename);
						} else {
							return Redirect::to('documentos/'.$cod)
									->with('upload_error', 'El archivo ya existe :(');
						}
						break;

					case 'ptv':
						if (!file_exists($foldername."/PTV")) { //si el archivo no existe
							$this->creafolder($foldername, "PTV"); //se crea folder
						}
						$url_destino = $foldername."PTV"; //url destino
						$url_destino = $this->carpetaSegunTipo($tipo, $url_destino);
						//almacena según tipo documento

						//$url_destino = public_path()."/docs/GYA/";
						if (!file_exists($url_destino.$filename)) {
							$uploadSuccess = $file->move($url_destino, $filename);
						} else {
							return Redirect::to('documentos/'.$cod)
									->with('upload_error', 'El archivo ya existe :(');
						}
						break;

					case 'thr':
						if (!file_exists($foldername."/THR")) { //si el archivo no existe
							$this->creafolder($foldername, "THR"); //se crea folder
						}
						$url_destino = $foldername."THR"; //url destino
						$url_destino = $this->carpetaSegunTipo($tipo, $url_destino);
						//almacena según tipo documento

						//$url_destino = public_path()."/docs/GYA/";
						if (!file_exists($url_destino.$filename)) {
							$uploadSuccess = $file->move($url_destino, $filename);
						} else {
							return Redirect::to('documentos/'.$cod)
									->with('upload_error', 'El archivo ya existe :(');
						}
						break;
				}
				//$url_destino = 
				return Redirect::to('documentos/'.$cod)
						->with('msj-upload-ok', 'Archivo cargado correctamente :)');

			} else {
				//error message				
			}
		} else {
			return Redirect::to('documentos/'.$cod)
					->with('upload_error', 'Ocurrió un error al subir el archivo :(');
		}
	}

	public function creafolder($ruta, $nom){
		mkdir($ruta.$nom, 0777);
	}

	public function carpetaSegunTipo($tipo, $url_destino){
		switch ($tipo) {
			case '1':
				if (!file_exists($url_destino."/ORGANIGRAMA")) {
					mkdir($url_destino."/ORGANIGRAMA", 0777);
				}
				$url_destino = $url_destino . "/ORGANIGRAMA/";
				break;

			case '2':
				if (!file_exists($url_destino."/MOF")) {
					mkdir($url_destino."/MOF", 0777);
				}
				$url_destino = $url_destino . "/MOF/";
				break;

			case '3':
				if (!file_exists($url_destino."/FODA")) {
					mkdir($url_destino."/FODA", 0777);
				}
				$url_destino = $url_destino . "/FODA/";								
				break;

			case '4':
				if (!file_exists($url_destino."RIT")) {
					mkdir($url_destino."/RIT", 0777);
				}
				$url_destino = $url_destino . "/RIT/";
				break;

			case '5':
				if (!file_exists($url_destino."POLITICA")) {
					mkdir($url_destino."/POLITICA", 0777);
				}
				$url_destino = $url_destino . "/POLITICA/";
				break;
		}
		return $url_destino;
	}
}