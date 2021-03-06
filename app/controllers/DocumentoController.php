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
	public function get_index_soporte()
	{
		return View::make('contenido.sistemas.soporte.index');
	}


	/*
	 * Funcion para cargar la interfaz de
	 * documentos de planta según area
	 */
	public function get_index_planta($sede, $area){
		$nomarea = null;
		#Obtiene el nombre de la sede
		$nomsede = explode('|', $this->get_sede($sede));
		$nomsede = $nomsede[0];

		$img_url = URL::asset('assets/icons/esms.jpg');
		$id_emp = null;
		$res_org = null;
		$res_mof = null;
		$res_foda = null;
		$res_pol = null;
		$res_proc = null;

		#Obtiene el id de la empresa
		$id_emp = explode('|', $this->get_sede($sede));
		$id_emp = $id_emp[1];

		switch ($area) {
			case 'esms':
				$document = new Documento;
				$nomarea = "Planta";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 32);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 32);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 32);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 32);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 32);
				$res_rsst = $document->selec_doc_esms($id_emp, 'RSST', 32);
				$res_rit = $document->selec_doc_esms($id_emp, 'RIT', 32);
				$res_rpc = $document->selec_doc_esms($id_emp, 'RPC', 32);
				$res_modm = $document->selec_doc_esms($id_emp, 'modem', 32);
				break;

			case 'sist':
				$document = new Documento;
				$nomarea = "Sistemas";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 24);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 24);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 24);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 24);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 24);
				break;
			
			case 'comu':
				$document = new Documento;
				$nomarea = "Comunicaciones";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 8);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 8);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 8);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 8);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 8);
				break;

			case 'ghuma':
				$document = new Documento;
				$nomarea = "Gestión Humana";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 12);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 12);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 12);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 12);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 12);
				break;

			case 'fina':
				$document = new Documento;
				$nomarea = "Finanzas";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 11);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 11);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 11);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 11);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 11);
				break;

			case 'legal':
				$document = new Documento;
				$nomarea = "Legal";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 30);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 30);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 30);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 30);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 30);
				break;

			case 'logis':
				$document = new Documento;
				$nomarea = "Logística";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 14);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 14);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 14);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 14);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 14);
				break;

			case 'produ':
				$document = new Documento;
				$nomarea = "Producción";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 18);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 18);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 18);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 18);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 18);
				break;

			case 'soste':
				$document = new Documento;
				$nomarea = "Sostenibilidad";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 23);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 23);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 23);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 23);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 23);
				break;

			case 'segu':
				$document = new Documento;
				$nomarea = "Seguridad Industrial";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 21);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 21);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 21);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 21);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 21);
				break;

			case 'salud':
				$document = new Documento;
				$nomarea = "Salud Ocupacional";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 31);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 31);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 31);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 31);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 31);
				break;

			case 'i+d':
				$document = new Documento;
				$nomarea = "I + D";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 13);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 13);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 13);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 13);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 13);
				break;

			case 'proy':
				$document = new Documento;
				$nomarea = "Proyectos";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 19);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 19);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 19);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 19);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 19);
				break;

			case 'mant':
				$document = new Documento;
				$nomarea = "Mantenimiento";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 15);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 15);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 15);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 15);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 15);
				break;

			case 'sgi':
				$document = new Documento;
				$nomarea = "SGI";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 22);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 22);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 22);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 22);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 22);
				break;

			case 'cont':
				$document = new Documento;
				$nomarea = "Contabilidad";
				$res_org = $document->selec_doc_esms($id_emp, 'organigrama', 9);
				$res_mof = $document->selec_doc_esms($id_emp, 'MOF', 9);
				$res_foda = $document->selec_doc_esms($id_emp, 'FODA', 9);
				$res_pol = $document->selec_doc_esms($id_emp, 'politica', 9);
				$res_proc = $document->selec_doc_esms($id_emp, 'procedimiento', 9);
				break;
		}
		if ( $area == 'esms' ) {
			return View::make('contenido.listadocs.listadocs-esms.listadocs-esms',
								array('area' => $nomarea, 'cod' => $area, 'sede' => $nomsede,
									  'cod_sede' => $sede, 'res_rpc' => $res_rpc, 'res_modm' => $res_modm,
									  'url_logo' => $img_url, 'orign' => $area, 'res_org' => $res_org,
									  'res_mof' => $res_mof, 'res_foda' => $res_foda, 'res_pol' => $res_pol,
									  'res_proc' => $res_proc, 'res_rsst' => $res_rsst, 'res_rit' => $res_rit
							 		 )
			);
		} else {
			return View::make('contenido.listadocs.listadocs-esms.listadocs-esms',
								array('area' => $nomarea, 'cod' => $area, 'sede' => $nomsede,
									  'cod_sede' => $sede, 'url_logo' => $img_url, 'orign' => $area,
									  'res_org' => $res_org, 'res_mof' => $res_mof, 'res_foda' => $res_foda,
									  'res_pol' => $res_pol, 'res_proc' => $res_proc
							 		 )
			);
		}
	}

	public function get_sede($sede){
		$nomsede = '';
		$id_emp = null;
		switch ($sede) {
			case 'aqp':
				$id_emp = 2;
				$nomsede = Empresa::find($id_emp)->sede_emp;
				break;
			
			case 'h':
				$id_emp = 1;
				$nomsede = Empresa::find($id_emp)->sede_emp;
				break;
		}
		return $nomsede.'|'.$id_emp;
	}

	public function store_esms($sede, $area){
		#$base_url = "c:/xampp/htdocs/ism-intra-fs/docs/";
		$base_url = public_path()."/docs/";
		$url_destino = ""; //var url de destino
		$filename = ""; //nombre de archivo
		$desc_doc = "";//nombre documento para db
		$url_doc = "";//url acceso desde browser
		$tipo = Input::get('tipo-doc'); //obtiene valor tipo documento seleccionado
		$nom_tipo = "";
		$nom_sede = explode('|', $this->get_sede($sede));
		$nom_sede = strtolower($nom_sede[0]);

		if (Input::hasFile('doc')) {
			if ($tipo != '0') {
				$carg = Input::get('tcarg');
				$file = Input::file('doc'); //obtiene archivo
				$filename = $file->getClientOriginalName(); //obtiene nombre archivo

				#se crea el folder esms
				if (!file_exists($base_url."ESMS")) { #si no existe
					$this->creafolder($base_url,"ESMS"); #establece nombre folder documentos
					$url_destino = $base_url.'ESMS/';
				} else {
					$url_destino = $base_url.'ESMS/';
				}

				#Se crea el folder sede
				if (!file_exists($url_destino.$nom_sede)) { //si el folder no existe
					$this->creafolder($url_destino, $nom_sede); //se crea folder sede
					$url_destino = $url_destino.$nom_sede.'/';
				} else {
					$url_destino = $url_destino.$nom_sede.'/';
				}

				#Se crea folder area
				if (!file_exists($url_destino.$area)) { //si el folder no existe
					$this->creafolder($url_destino, $area); //se crea folder
					$url_destino = $url_destino.$area.'/';
				} else {
					$url_destino = $url_destino.$area.'/';
				}

				$nom_tipo = $this->getNomTipo($tipo);//se obtiene la descripción del tipo de documento
				#buscar ruta tipo doc
				if (!file_exists($url_destino.$nom_tipo)) { //si el folder no existe
					$this->creafolder($url_destino, $nom_tipo); //se crea folder
					$url_destino = $url_destino.$nom_tipo.'/';
				} else {
					$url_destino = $url_destino.$nom_tipo.'/';
				}

				#nombrar doc
				$filename = strtolower('esms-'.$sede.'_'.$nom_tipo.'_'.$carg.'_'.$area.'_'.Time::fecha_hoy().'.pdf');
				$desc_doc = strtoupper($area.'-'.$nom_sede.'-'.$nom_tipo.'_'.$carg);

				#almacenar en folder
				if (!file_exists($url_destino.$filename))
				{
					$uploadSuccess = $file->move($url_destino, $filename);
					
					if ($uploadSuccess)
					{
						#$url_doc = str_replace("c:/xampp/htdocs", "localhost", $url_destino);
						$url_doc = str_replace(public_path(), "", $url_destino);
						$documento = new Documento;
						$documento->desc_doc = $desc_doc;
						$documento->url_file = $url_doc.$filename;
						$documento->tipo_doc = $this->getNomTipo($tipo);
						$documento->area_id = $documento->get_id_area($area);
						$documento->elaborado = Input::get("fch-elab");

						#Obtener id empresa
						$documento->empresa_id = explode('|', $this->get_sede($sede));
						$documento->empresa_id = strtolower($documento->empresa_id[1]);
						
						$documento->user_id = Auth::user()->id;
						$documento->version = Input::get('txtversion');
						$documento->state = true;
						$success = $documento->save();

						if ($success)
						{
							return Redirect::to('documentos/esms/'.$sede.'/'.$area)
									->with('msj-upload-ok', 'El archivo se guardó correctamente :)');
						}
						else
						{
							return Redirect::to('documentos/esms/'.$sede.'/'.$area)
    								->with('upload_error', 'El archivo no se guardó :(');
						}
					}
					else
					{
						return Redirect::to('documentos/esms/'.$sede.'/'.$area)
								->with('upload_error', 'El archivo no se almacenó :(');						
					}
				}
				else
				{
					return Redirect::to('documentos/esms/'.$sede.'/'.$area)
							->with('upload_error', 'El archivo ya existe :(');
				}
			}
			else
			{ 
				/*error no se seleccionó tipo documento */
			}
		}
		else
		{
			#error no hay ningún documento cargado
			return Redirect::to('documentos/esms/'.$sede.'/'.$area)
					->with('upload_error', 'No hay ningún documento cargado :(');
		}
	}

	public function store_comerc($cod)
	{	
		$url_destino = ""; //var url de destino
		$filename = ""; //nombre de archivo
		$desc_doc = "";//nombre documento para la db
		$url_doc = "";//url acceso desde browser
		$foldername = ""; //nombre de folder
		$tipo = Input::get('tipo-doc'); //obtiene valor tipo documento seleccionado
		$tipo_fac = Input::get('fac-tipo');

		if (Input::hasFile('doc'))
		{ //Si hay documento seleccionado
			if ($tipo != '0')
			{ //Si ha seleccionado tipo documento
				$file = Input::file('doc'); //obtiene archivo
				$filename = $file->getClientOriginalName(); //obtiene nombre archivo
				#$foldername = "c:/xampp/htdocs/ism-intra-fs/docs/"; //establece nombre folder documentos
	        	$foldername = public_path()."/docs/";

	        	//asigna la carpeta correspondiente y el nombre del documento
				switch ($cod)
				{
					case 'ga':
						if (!file_exists($foldername."/GYA"))
						{ //si el archivo no existe
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
						break;

					case 'sl':
						if (!file_exists($foldername."/SL"))
						{ //si el archivo no existe
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
						break;

					case 'ck':
						if (!file_exists($foldername."/CK"))
						{ //si el archivo no existe
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
						break;

					case 'ptv':
						if (!file_exists($foldername."/PTV"))
						{ //si el archivo no existe
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
						break;

					case 'thr':
						if (!file_exists($foldername."/THR"))
						{ //si el archivo no existe
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
						break;

					case 'ch':
						if (!file_exists($foldername."/CHAN"))
						{ //si el archivo no existe
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
						break;

					case 'bhr':
						if (!file_exists($foldername."/BHR"))
						{ //si el archivo no existe
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
						break;
				}

				//$url_destino = public_path()."/docs/GYA/";
				if (!file_exists($url_destino.$filename))
				{
					$uploadSuccess = $file->move($url_destino, $filename);

					if ($uploadSuccess)
					{
						#$url_doc = str_replace("c:/xampp/htdocs", "localhost", $url_destino);
						$url_doc = str_replace(public_path(), "", $url_destino);

						$documento = new Documento;
						$documento->desc_doc = $desc_doc;
						$documento->url_file = $url_doc.$filename;
						if ($cod == 'bhr' || $cod == 'ch')
						{
							$documento->tipo_doc = $this->getNomTipo($tipo_fac);
						}
						else
						{
							$documento->tipo_doc = $this->getNomTipo($tipo);
						}
						
						if ($cod == 'bhr' || $cod == 'ch')
						{
							$documento->area_id = Auth::user()->area_id;
						}
						else
						{
							$documento->area_id = Input::get('orign-de');
						}

						$documento->elaborado = Input::get('fch-elab');
						$documento->aprobado = Input::get('fch-apro');
						$documento->empresa_id = $this->getIdEmpresa($cod);
						$documento->user_id = Auth::user()->id;
						$documento->set_version($url_destino);
						$documento->state = true;
						$success = $documento->save();

						if ($success)
						{
							return Redirect::to('documentos/' . $cod)
									->with('msj-upload-ok', 'Documento cargado correctamente :)');
						}
						else
						{
							return Redirect::to('documentos/' . $cod)
									->with('msj-upload-ok', 'El archivo no se guardó :((');
						}

					}
					else
					{
						return Redirect::to('documentos/'.$cod)
								->with('upload_error', 'El archivo no se almacenó :(');						
					}
				}
				else
				{
					return Redirect::to('documentos/'.$cod)
							->with('upload_error', 'El archivo ya existe :(');
				}
			}
			else
			{
				#No se seleccionó tipo de documento cargado
			}
		}
		else
		{
			#No hay ningún documento cargado
			return Redirect::to('documentos/esms/'.$sede.'/'.$area)
					->with('upload_error', 'No hay ningún documento cargado :(');
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
		$cargo = Input::get('txcarg');

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
				$filename = "MOF_".$cargo;
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