<?php

/**
* 
*/
class DocumentoController extends BaseController
{
	/*
	 * Funcion para cargar interfaz de
	 * documentos de empresas comercial
	 */
	public function get_index_comerc($empresa){

		$area = Area::orderBy('desc_area')->get(['id', 'desc_area']);
		$nomemp = null;
		$img_url = null;
		$id_emp = null;
		$res_org = null;
		$res_mof = null;
		$res_rit = null;
		$res_rsst = null;
		$res_foda = null;
		$res_pol = null;
		$res_proc = null;
		$res_rpc = null;
		$res_modm = null;
		$extra = null;

		switch ($empresa) {
			case 'ga':
				$document = new Documento;
				$nomemp = "G&A";
				$img_url = "../assets/icons/comercial/ga_.jpg";
				$id_emp = 4;
				$res_org = $document->selec_doc($id_emp, 'organigrama');
				$res_mof = $document->selec_doc($id_emp, 'MOF');
				$res_rit = $document->selec_doc($id_emp, 'RIT');
				$res_rsst = $document->selec_doc($id_emp, 'RSST');
				$res_foda = $document->selec_doc($id_emp, 'FODA');
				$res_pol = $document->selec_doc($id_emp, 'politica');
				$res_proc = $document->selec_doc($id_emp, 'procedimiento');
				$res_rpc = $document->selec_doc($id_emp, 'RPC');
				$res_modm = $document->selec_doc($id_emp, 'modem');
				$extra = 1;
				break;
			
			case 'sl':
				$document = new Documento;
				$nomemp = "SilverLake";
				$img_url = "../assets/icons/comercial/sl_.jpg";
				$id_emp = 5;
				$res_org = $document->selec_doc($id_emp, 'organigrama');
				$res_mof = $document->selec_doc($id_emp, 'MOF');
				$res_rit = $document->selec_doc($id_emp, 'RIT');
				$res_rsst = $document->selec_doc($id_emp, 'RSST');
				$res_foda = $document->selec_doc($id_emp, 'FODA');
				$res_pol = $document->selec_doc($id_emp, 'politica');
				$res_proc = $document->selec_doc($id_emp, 'procedimiento');
				$res_rpc = $document->selec_doc($id_emp, 'RPC');
				$res_modm = $document->selec_doc($id_emp, 'modem');
				$extra = 1;
				break;
			
			case 'ck':
				$document = new Documento;
				$nomemp = "Cynkat";
				$img_url = "../assets/icons/comercial/ck_.jpg";
				$id_emp = 3;
				$res_org = $document->selec_doc($id_emp, 'organigrama');
				$res_mof = $document->selec_doc($id_emp, 'MOF');
				$res_rit = $document->selec_doc($id_emp, 'RIT');
				$res_rsst = $document->selec_doc($id_emp, 'RSST');
				$res_foda = $document->selec_doc($id_emp, 'FODA');
				$res_pol = $document->selec_doc($id_emp, 'politica');
				$res_proc = $document->selec_doc($id_emp, 'procedimiento');
				$res_rpc = $document->selec_doc($id_emp, 'RPC');
				$res_modm = $document->selec_doc($id_emp, 'modem');
				$extra = 1;
				break;

			case 'ptv':
				$document = new Documento;
				$nomemp = "PTV";
				$img_url = "../assets/icons/comercial/ptv_.jpg";
				$id_emp = 7;
				$res_org = $document->selec_doc($id_emp, 'organigrama');
				$res_mof = $document->selec_doc($id_emp, 'MOF');
				$res_rit = $document->selec_doc($id_emp, 'RIT');
				$res_rsst = $document->selec_doc($id_emp, 'RSST');
				$res_foda = $document->selec_doc($id_emp, 'FODA');
				$res_pol = $document->selec_doc($id_emp, 'politica');
				$res_proc = $document->selec_doc($id_emp, 'procedimiento');
				$res_rpc = $document->selec_doc($id_emp, 'RPC');
				$res_modm = $document->selec_doc($id_emp, 'modem');
				$extra = 1;
				break;

			case 'thr':
				$document = new Documento;
				$nomemp = "THR";
				$img_url = "../assets/icons/comercial/thr_.jpg";
				$id_emp = 6;
				$res_org = $document->selec_doc($id_emp, 'organigrama');
				$res_mof = $document->selec_doc($id_emp, 'MOF');
				$res_rit = $document->selec_doc($id_emp, 'RIT');
				$res_rsst = $document->selec_doc($id_emp, 'RSST');
				$res_foda = $document->selec_doc($id_emp, 'FODA');
				$res_pol = $document->selec_doc($id_emp, 'politica');
				$res_proc = $document->selec_doc($id_emp, 'procedimiento');
				$res_rpc = $document->selec_doc($id_emp, 'RPC');
				$res_modm = $document->selec_doc($id_emp, 'modem');
				$extra = 1;
				break;

			case 'ch':
				$document = new Documento;
				$nomemp = "Chanaltin";
				$img_url = "../assets/icons/comercial/chan_.jpg";
				$id_emp = 10;
				$res_rpc = $document->selec_doc($id_emp, 'RPC');
				$res_modm = $document->selec_doc($id_emp, 'modem');				
				$extra = 0;
				break;

			case 'bhr':
				$document = new Documento;
				$nomemp = "Bhrusa";
				$img_url = "../assets/icons/comercial/bhr_.jpg";
				$id_emp = 9;
				$res_rpc = $document->selec_doc($id_emp, 'RPC');
				$res_modm = $document->selec_doc($id_emp, 'modem');				
				$extra = 0;
				break;
		}

		return View::make("contenido.listadocs.listadocs-comerc.listadocs-comerc", 
			array('empresa' => $nomemp, 'cod' => $empresa, 'url_logo' => $img_url, 'orign' => $area,
				  'res_org' => $res_org, 'res_mof' => $res_mof, 'res_rit' => $res_rit, 'res_rsst' => $res_rsst,
				  'res_foda' => $res_foda, 'res_pol' => $res_pol, 'res_proc' => $res_proc, 'res_rpc' => $res_rpc,
				  'res_modm' => $res_modm, 'extra' => $extra
				 )
			);
	}

	/*
	 * Funcion para cargar la interfaz de
	 * documentos de planta según area
	 */
	public function get_index_planta($sede, $area){
		$nomarea = null;
		$nomsede = null;
		$img_url = URL::asset('assets/icons/esms.jpg');
		$id_emp = null;
		$res_org = null;
		$res_mof = null;
		$res_rit = null;
		$res_rsst = null;
		$res_foda = null;
		$res_pol = null;
		$res_proc = null;
		$res_rpc = null;
		$res_modm = null;
		$extra = null;

		switch ($sede) {
			case 'aqp':
				$nomsede = 'Arequipa';
				break;
			
			case 'h':
				$nomsede = 'Huaura';
				break;
		}

		switch ($area) {
			case 'sist':
				$document = new Documento;
				$nomarea = "Sistemas";
				break;
			
			case 'comu':
				$document = new Documento;
				$nomarea = "Comunicaciones";
				break;

			case 'ghuma':
				$document = new Documento;
				$nomarea = "Gestión Humana";
				break;

			case 'fi-co':
				$document = new Documento;
				$nomarea = "Finanzas/Contabilidad";
				break;

			case 'legal':
				$document = new Documento;
				$nomarea = "Legal";
				break;

			case 'logis':
				$document = new Documento;
				$nomarea = "Logística";
				break;

			case 'produ':
				$document = new Documento;
				$nomarea = "Producción";
				break;

			case 'soste':
				$document = new Documento;
				$nomarea = "Sostenibilidad";
				break;

			case 'segu':
				$document = new Documento;
				$nomarea = "Seguridad Industrial";
				break;

			case 'salud':
				$document = new Documento;
				$nomarea = "Salud Ocupacional";
				break;

			case 'i+d':
				$document = new Documento;
				$nomarea = "I + D";
				break;

			case 'proy':
				$document = new Documento;
				$nomarea = "Proyectos";
				break;

			case 'mant':
				$document = new Documento;
				$nomarea = "Mantenimiento";
				break;

			case 'sgi':
				$document = new Documento;
				$nomarea = "SGI";
				break;
		}
		return View::make('contenido.listadocs.listadocs-esms.listadocs-esms',
							array('area' => $nomarea, 'cod' => $area, 'sede' => $nomsede,
								  'url_logo' => $img_url, 'orign' => $area, 'res_org' => $res_org,
								  'res_mof' => $res_mof, 'res_rit' => $res_rit, 'res_rsst' => $res_rsst,
						          'res_foda' => $res_foda, 'res_pol' => $res_pol, 'res_proc' => $res_proc, 'res_rpc' => $res_rpc,
						          'res_modm' => $res_modm, 'extra' => $extra
						 		 )
		);
	}

	public function store_esms($cod){
		if (Input::hasFile('doc')) {
			if ($tipo != '0') {
				switch ($cod) {
					case 'sist':
						# code...
						break;
					
					case 'comu':
						# code...
						break;

					case 'ghuma':
						# code...
						break;
				}
			} else {
				#error no se seleccionó documento
			}
		} else {
			#error no hay ningún documento cargado
		}
	}

	public function store_comerc($cod){		
		$url_destino = ""; //var url de destino
		$filename = ""; //nombre de archivo
		$desc_doc = "";//nombre documento para db
		$url_doc = "";//url acceso desde browser
		$foldername = ""; //nombre de folder
		$tipo = Input::get('tipo-doc'); //obtiene valor tipo documento seleccionado
		$tipo_fac = Input::get('fac-tipo');

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
						$result = $this->carpetaSegunTipo($tipo, $url_destino, $cod);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename."-G&A";//nombre par almacenar en la bd

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
						$result = $this->carpetaSegunTipo($tipo, $url_destino, $cod);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename."-Slake";//nombre par almacenar en la bd

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
						$result = $this->carpetaSegunTipo($tipo, $url_destino, $cod);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename."-Cynkat";//nombre par almacenar en la bd

						//se asigna el nombre del documento
						$filename = $filename."_cynkat_".Time::fecha_hoy().".pdf";

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
						$result = $this->carpetaSegunTipo($tipo, $url_destino, $cod);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename."-PTV";//nombre par almacenar en la bd

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
						$result = $this->carpetaSegunTipo($tipo, $url_destino, $cod);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename."-THR";//nombre par almacenar en la bd

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

					case 'ch':
						if (!file_exists($foldername."/CHAN")) { //si el archivo no existe
							$this->creafolder($foldername, "CHAN"); //se crea folder
						}
						$url_destino = $foldername."CHAN"; //url destino

						//selecciona tipo documento y le asigna el nombre tipo-empresa-fecha de carga
						$result = $this->carpetaSegunTipo($tipo, $url_destino, $cod);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename."-CHAN";//nombre par almacenar en la bd

						//se asigna el nombre del documento
						$filename = $filename.".pdf";

						//$url_destino = public_path()."/docs/GYA/";
						if (!file_exists($url_destino.$filename)) {
							$uploadSuccess = $file->move($url_destino, $filename);
						} else {
							return Redirect::to('documentos/'.$cod)
									->with('upload_error', 'El archivo ya existe :(');
						}
						break;

					case 'bhr':
						if (!file_exists($foldername."/BHR")) { //si el archivo no existe
							$this->creafolder($foldername, "BHR"); //se crea folder
						}
						$url_destino = $foldername."BHR"; //url destino

						//selecciona tipo documento y le asigna el nombre tipo-empresa-fecha de carga
						$result = $this->carpetaSegunTipo($tipo, $url_destino, $cod);
						$arr = explode("|", $result);
						$url_destino = $arr[0];
						$filename = $arr[1];

						$desc_doc = $filename."-BHR";//nombre par almacenar en la bd

						//se asigna el nombre del documento
						$filename = $filename.".pdf";

						//$url_destino = public_path()."/docs/GYA/";
						if (!file_exists($url_destino.$filename)) {
							$uploadSuccess = $file->move($url_destino, $filename);
						} else {
							return Redirect::to('documentos/'.$cod)
									->with('upload_error', 'El archivo ya existe :(');
						}
						break;
				}

				$url_doc = str_replace("c:/xampp/htdocs", "localhost", $url_destino);

				$documento = new Documento;
				$documento->desc_doc = $desc_doc;
				$documento->url_file = $url_doc.$filename;
				if ($cod == 'bhr' || $cod == 'ch') {
					$documento->tipo_doc = $this->getNomTipo($tipo_fac);
				} else {
					$documento->tipo_doc = $this->getNomTipo($tipo);
				}
				
				if ($cod == 'bhr' || $cod == 'ch') {
					$documento->area_id = Auth::user()->area_id;
				} else {
					$documento->area_id = Input::get('orign-de');
				}

				$documento->elaborado = Input::get('fch-elab');
				$documento->aprobado = Input::get('fch-apro');
				$documento->empresa_id = $this->getIdEmpresa($cod);
				$documento->user_id = Auth::user()->id;
				$documento->set_version($url_destino);
				$documento->state = true;
				$documento->save();

				return Redirect::to('documentos/' . $cod)
					->with('msj-upload-ok', 'Documento cargado correctamente :)');

			} else {
				return Redirect::to('documentos/'.$cod)
						->with('upload_error', 'Ocurrió un error al subir el archivo :////');
			}
		} else {
			return Redirect::to('documentos/'.$cod)
					->with('upload_error', 'Ocurrió un error al subir el archivo :/ :(');
		}
	}

	public function creafolder($ruta, $nom){
		mkdir($ruta.$nom, 0777);
	}

	public function carpetaSegunTipo($tipo, $url_destino, $cod){
		$filename = '';
		$result = null;
		$tipo_d = null;
		$cop = Input::get('c-op');

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
				$nomcop = $this->getCop($cop, $cod);
				$result = $this->docSegunArea($filename, $tipo_d, $url_destino);
				$arr = explode("|", $result);
				$url_destino = $arr[0];
				$filename = $arr[1].$nomcop;
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
				$filename = "Politica";
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

			case '8':
				$tipo_fac = Input::get('fac-tipo');
				if (!file_exists($url_destino."/FACTURA")) {
					mkdir($url_destino."/FACTURA", 0777);
					$url_destino = $url_destino . "/FACTURA/";	
				} else {
					$url_destino = $url_destino . "/FACTURA/";
				}
				$filename = "Factura";
				$result = $this->facturaTipo($tipo_fac, $filename, $url_destino);
				$arr = explode("|", $result);
				$url_destino = $arr[0];
				$filename = $arr[1];				
				break;
		}
		return $url_destino."|".$filename;
	}

	public function docSegunArea($file_name, $area, $url_destino){
		$nom = Input::get("nompol");
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
				$file_name = $file_name."_venta_".$nom;					
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
		$file_name = utf8_decode($file_name);
		return $url_destino."|".$file_name;
	}

	public function facturaTipo($tipo_fac, $filename, $url_destino){
		$emision = Input::get('fch-elab');
		$mes = FechaUtil::get_nom_mes($emision);
		switch ($tipo_fac) {
			case '8':
				if (!file_exists($url_destino."RPC")) {
					mkdir($url_destino."RPC", 0777);
					$url_destino = $url_destino . "RPC/";			
				} else {
					$url_destino = $url_destino . "RPC/";
				}
				$filename = $filename.'_RPC_'.$mes;
				break;
			
			case '9':
				if (!file_exists($url_destino."modem")) {
					mkdir($url_destino."modem", 0777);
					$url_destino = $url_destino . "modem/";			
				} else {
					$url_destino = $url_destino . "modem/";
				}
				$filename = $filename.'_modem_'.$mes;
				break;
		}
		return $url_destino."|".$filename;
	}

	public function getNomTipo($tipo){		
		$nom = "";
		switch ($tipo) {
			case '1': $nom = 'FODA'; 
				break;
			
			case '2': $nom = 'MOF';
				break;

			case '3': $nom = 'Organigrama';
				break;

			case '4': $nom = 'Politica';
				break;

			case '5': $nom = 'Procedimiento';
				break;

			case '6': $nom = 'RIT';
				break;

			case '7': $nom = 'RSST';
				break;

			case '8': $nom = 'RPC';
				break;

			case '9': $nom = 'Modem';
				break;
		}
		return $nom;
	}

	public function getIdEmpresa($cod){
		$id = null;
		switch ($cod) {
			case 'ga': $id = 4;
				break;
			
			case 'sl': $id = 5;
				break;

			case 'ck': $id = 3;
				break;

			case 'thr': $id = 6;
				break;

			case 'ptv': $id = 7;
				break;

			case 'ch': $id = 10;
				break;

			case 'bhr': $id = 9;
				break;
		}

		return $id;
	}

	public function getCop($cop, $cod){
		$nom_cop = null;
		if ($cod == 'ga') {
			switch ($cop) {
				case '0': $nom_cop = "Cañete";
					break;
				
				case '1': $nom_cop = "Casma";
					break;

				case '2': $nom_cop = "Chimbote";
					break;

				case '3': $nom_cop = "Chincha";
					break;

				case '4': $nom_cop = "Huacho";
					break;

				case '5': $nom_cop = "Huaral";
					break;

				case '6': $nom_cop = "Huaraz";
					break;

				case '7': $nom_cop = "Ica";
					break;

				case '8': $nom_cop = "Mala";
					break;

				case '9': $nom_cop = "Nazca";
					break;

				case '10': $nom_cop = "SJL";
					break;
			}
		} elseif ($cod == 'sl') {
			switch ($cop) {
				case '0': $nom_cop = "Camana";
					break;
				
				case '1': $nom_cop = "Cuzco";
					break;

				case '2': $nom_cop = "Ilo";
					break;

				case '3': $nom_cop = "Mollendo";
					break;

				case '4': $nom_cop = "Moquegua";
					break;

				case '5': $nom_cop = "Pedregal";
					break;

				case '6': $nom_cop = "Puno";
					break;

				case '7': $nom_cop = "Tacna";
					break;
			}

		} elseif ($cod == 'ck') {
			switch ($cop) {
				case '0': $nom_cop = "Arequipa";
					break;
				
				case '1': $nom_cop = "Juliaca";
					break;
			}			
		}

		return $nom_cop;
	}

}