<?php
/**
* 
*/
class ComercFilesController extends BaseController
{

	public function get_index($empresa){

		#$area = Area::all(['id', 'desc_area']);
		$area = Area::orderBY('desc_area')->get(['id', 'desc_area']);
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

		return View::make("contenido.listadocs.listadocs-comerc.listadocs-comerc", array('empresa' => $nomemp, 'cod' => $empresa, 'url_logo' => $img_url, 'orign' => $area));
	}

	public function store($cod){		
		$url_destino = ""; //var url de destino
		$filename = ""; //nombre de archivo
		$desc_doc = "";//nombre documento para db
		$url_doc = "";//url acceso desde browser
		$foldername = ""; //nombre de folder
		$tipo = Input::get('tipo-doc'); //obtiene valor tipo documento seleccionado
		$origen = Input::get('orign-de');
		$fech_elab = Input::get('fch-elab');
		$fech_aprob = Input::get('fch-apro');
		$id_user = Auth::user()->id;

		if (Input::hasFile('doc')) { //Si hay documento seleccionado
			if ($tipo != '0') { //Si ha seleccionado tipo documento
				$file = Input::file('doc'); //obtiene archivo
				$filename = $file->getClientOriginalName(); //obtiene nombre archivo
				$foldername = "c:/xampp/htdocs/ism-intra-fs/docs/"; //establece nombre folder documentos
	        	
	        	//asigna la carpeta correspondiente y el nombre del documento
				switch ($cod) {
					case 'ga': //si el documento pertenece a GYA
						if (!file_exists($foldername."/GYA")) { //si el archivo no existe
							$this->creafolder($foldername, "GYA"); //se crea folder
						}
						$url_destino = $foldername."GYA"; //url destino
						
						//selecciona tipo documento y le asigna el nombre tipo-empresa-fecha de carga
						$result = $this->carpetaSegunTipo($tipo, $url_destino);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename;//nombre par almacenar en la bd

						//se asigna el nombre del documento
						$filename = $filename."_gya_".Time::fecha_hoy().".pdf";

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

						//selecciona tipo documento y le asigna el nombre tipo-empresa-fecha de carga
						$result = $this->carpetaSegunTipo($tipo, $url_destino);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename;//nombre par almacenar en la bd

						//se asigna el nombre del documento
						$filename = $filename."_slake_".Time::fecha_hoy().".pdf";

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

						//selecciona tipo documento y le asigna el nombre tipo-empresa-fecha de carga
						$result = $this->carpetaSegunTipo($tipo, $url_destino);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename;//nombre par almacenar en la bd

						//se asigna el nombre del documento
						$filename = $filename."_cyncat_".Time::fecha_hoy().".pdf";

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

						//selecciona tipo documento y le asigna el nombre tipo-empresa-fecha de carga
						$result = $this->carpetaSegunTipo($tipo, $url_destino);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename;//nombre par almacenar en la bd

						//se asigna el nombre del documento
						$filename = $filename."_ptv_".Time::fecha_hoy().".pdf";

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

						//selecciona tipo documento y le asigna el nombre tipo-empresa-fecha de carga
						$result = $this->carpetaSegunTipo($tipo, $url_destino);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename;//nombre par almacenar en la bd

						//se asigna el nombre del documento
						$filename = $filename."_thr_".Time::fecha_hoy().".pdf";

						//$url_destino = public_path()."/docs/GYA/";
						if (!file_exists($url_destino.$filename)) {
							$uploadSuccess = $file->move($url_destino, $filename);
						} else {
							return Redirect::to('documentos/'.$cod)
									->with('upload_error', 'El archivo ya existe :(');
						}
						break;
				}

				//$this->store_in_db($filename, $url, $tipo, $area_id, $elab, $aprob, $emp, $user);
				$url_destino = str_replace("c:/xampp/htdocs", "localhost", $url_destino);
				$nom_tipo_doc = $this->getNomTipo($tipo);
				$emp_id = $this->getIdEmpresa($cod);

				return Redirect::to('documentos/'.$cod.'/ul_1/s_db')
						->with('cod', $cod)
						->with('desc_doc', $desc_doc)
						->with('url_doc', $url_destino)
						->with('tipo_doc', $nom_tipo_doc)
						->with('area_id', $origen)
						->with('elaborado', $fech_elab)
						->with('aprobado', $fech_aprob)
						->with('empresa_id', $emp_id)
						->with('user_id', $id_user)
						->with('filename', $filename);
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
		$filename = '';
		$result = null;
		$tipo_d = null;

		switch ($tipo) {
			case '1':
				$tipo_d = Input::get('foda-de');
				if (!file_exists($url_destino."/FODA")) {
					mkdir($url_destino."/FODA", 0777);
					$url_destino = $url_destino . "/FODA/";
				} else {
					$url_destino = $url_destino . "/FODA/";
				}
				$filename = "FODA";
				$result = $this->docSegunArea($filename, $tipo_d, $url_destino);
				$arr = explode("|", $result);
				$url_destino = $arr[0];
				$filename = $arr[1];
				break;

			case '2':
				if (!file_exists($url_destino."/MOF")) {
					mkdir($url_destino."/MOF", 0777);
					$url_destino = $url_destino . "/MOF/";
				} else {
					$url_destino = $url_destino . "/MOF/";
				}
				$filename = "MOF";
				break;

			case '3':
				if (!file_exists($url_destino."/ORGANIGRAMA")) {
					mkdir($url_destino."/ORGANIGRAMA", 0777);
					$url_destino = $url_destino."/ORGANIGRAMA/";
				} else {
					$url_destino = $url_destino."/ORGANIGRAMA/";
				}
				$filename = "Organigrama";
				break;

			case '4':
				$tipo_d = Input::get('pol-de');
				if (!file_exists($url_destino."/POLITICA")) {
					mkdir($url_destino."/POLITICA", 0777);
					$url_destino = $url_destino . "/POLITICA/";
				} else {
					$url_destino = $url_destino . "/POLITICA/";
				}
				$filename = "Política";
				$result = $this->docSegunArea($filename, $tipo_d, $url_destino);
				$arr = explode("|", $result);
				$url_destino = $arr[0];
				$filename = $arr[1];
				break;

			case '5':
				$tipo_d = Input::get('proc-de');
				if (!file_exists($url_destino."/PROCEDIMIENTO")) {
					mkdir($url_destino."/PROCEDIMIENTO", 0777);
					$url_destino = $url_destino . "/PROCEDIMIENTO/";
				} else {
					$url_destino = $url_destino . "/PROCEDIMIENTO/";
				}
				$filename = "Procedimiento";
				$result = $this->docSegunArea($filename, $tipo_d, $url_destino);
				$arr = explode("|", $result);
				$url_destino = $arr[0];
				$filename = $arr[1];
				break;

			case '6':
				if (!file_exists($url_destino."/RIT")) {
					mkdir($url_destino."/RIT", 0777);
					$url_destino = $url_destino . "/RIT/";
				} else {
					$url_destino = $url_destino . "/RIT/";
				}
				$filename = "RIT";
				break;

			case '7':
				if (!file_exists($url_destino."/RSST")) {
					mkdir($url_destino."/RSST", 0777);					
					$url_destino = $url_destino . "/RSST/";	
				} else {
					$url_destino = $url_destino . "/RSST/";
				}
				$filename = "RSST";
				break;
		}
		return $url_destino."|".$filename;
	}

	public function docSegunArea($file_name, $area, $url_destino){
		$nom = Input::get("txtnom");
		$nom = str_replace(" ", "-", $nom);
		switch ($area) {
			case '0':
				if (!file_exists($url_destino."administracion")) {
					mkdir($url_destino."administracion", 0777);
					$url_destino = $url_destino . "administracion/";			
				} else {
					$url_destino = $url_destino . "administracion/";
				}
				$file_name = $file_name."_admin_".$nom;
				break;
			
			case '1':
				if (!file_exists($url_destino."almacen")) {
					mkdir($url_destino."almacen", 0777);
					$url_destino = $url_destino . "almacen/";			
				} else {
					$url_destino = $url_destino . "almacen/";
				}
				$file_name = $file_name."_almac_".$nom;					
				break;

			case '2':
				if (!file_exists($url_destino."caja")) {
					mkdir($url_destino."caja", 0777);
					$url_destino = $url_destino . "caja/";			
				} else {
					$url_destino = $url_destino . "caja/";
				}
				$file_name = $file_name."_caja_".$nom;				
				break;

			case '3':
				if (!file_exists($url_destino."contabilidad")) {
					mkdir($url_destino."contabilidad", 0777);
					$url_destino = $url_destino . "contabilidad/";			
				} else {
					$url_destino = $url_destino . "contabilidad/";
				}
				$file_name = $file_name."_conta_".$nom;					
				break;

			case '4':
				if (!file_exists($url_destino."ventas")) {
					mkdir($url_destino."ventas", 0777);
					$url_destino = $url_destino . "ventas/";			
				} else {
					$url_destino = $url_destino . "ventas/";
				}
				$file_name = $file_name."_venta_";					
				break;

			case '5':
				if (!file_exists($url_destino."supv_vtas")) {
					mkdir($url_destino."supv_vtas", 0777);
					$url_destino = $url_destino . "supv_vtas/";			
				} else {
					$url_destino = $url_destino . "supv_vtas/";
				}
				$file_name = $file_name."_supvta_".$nom;					
				break;

			case '6':
				if (!file_exists($url_destino."jefe_vtas")) {
					mkdir($url_destino."jefe_vtas", 0777);
					$url_destino = $url_destino . "jefe_vtas/";			
				} else {
					$url_destino = $url_destino . "jefe_vtas/";
				}
				$file_name = $file_name."_jvtas_".$nom;				
				break;

			case '7':
				if (!file_exists($url_destino."jefe_zonal")) {
					mkdir($url_destino."jefe_zonal", 0777);
					$url_destino = $url_destino . "jefe_zonal/";			
				} else {
					$url_destino = $url_destino . "jefe_zonal/";
				}
				$file_name = $file_name."_jzonal_".$nom;
				break;

			case '8':
				if (!file_exists($url_destino."ejecutivo_vtas")) {
					mkdir($url_destino."ejecutivo_vtas", 0777);
					$url_destino = $url_destino . "ejecutivo_vtas/";			
				} else {
					$url_destino = $url_destino . "ejecutivo_vtas/";
				}
				$file_name = $file_name."_ejvtas_".$nom;					
				break;
		}

		return $url_destino."|".$file_name;
	}

	public function getNomTipo($tipo){
		
		$nom = "";
		switch ($tipo) {
			case '1':
				$nom = 'FODA'; 
				break;
			
			case '2':
				$nom = 'MOF';
				break;

			case '3':
				$nom = 'Organigrama';
				break;

			case '4':
				$nom = 'Política';
				break;

			case '5':
				$nom = 'Procedimiento';
				break;

			case '6':
				$nom = 'RIT';
				break;

			case '7':
				$nom = 'RSST';
				break;
		}

		return $nom;
	}

	public function getIdEmpresa($cod){
		$id = null;
		switch ($cod) {
			case 'ga':
				$id = 4;
				break;
			
			case 'sl':
				$id = 5;
				break;

			case 'ck':
				$id = 3;
				break;

			case 'thr':
				$id = 6;
				break;

			case 'ptv':
				$id = 7;
				break;
		}

		return $id;
	}

}