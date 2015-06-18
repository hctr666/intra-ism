<?php

/**
* 
*/
class EquipoAreaController extends BaseController
{
	
	public function get_equipo_index($nom)
	{
		var $area = null;
		switch ($nom) {
			case 'sistemas':
				$area = 'SISTEMAS';
				break;
			
			case 'comunic':
				$area = 'COMUNICACIONES';
			
			case 'rrhh':
				$area = 'GESTIÓN HUMANA';
				break;

			case 'fina':
				$area = 'FINANZAS Y CONTABILIDAD';
				break;

			case 'legal':
				$area = "LEGALES";
				break;

			case 'logist':
				$area = 'LOGÍSTICA';
				break;

			case 'prod':
				$area = 'PRODUCCIÓN';
				break;

			case 'sost':
				$area = 'SOSTENIBILIDAD';
				break;

			case 'segu':
				$area = 'SEGURIDAD INDUSTRIAL';
				break;

			case 'salud':
				$area = 'SALUD OCUPACIONAL';
				break;

			case 'i-d':
				$area = 'INVESTIGACIÓN Y DESARROLLO';
				break;
		}
		return View::make('areas.area-team', $area);
	}
}