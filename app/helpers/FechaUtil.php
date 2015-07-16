<?php

/**
 * 
 */
class FechaUtil
{
	/*
	 * Array que almacen los meses en literal
	 */
	private static $meses = array('01' => 'Enero', '02' => 'Febrero', '03' => 'Marzo',
						   '04' => 'Abril', '05' => 'Mayo', '06' => 'Junio',
						   '07' => 'Julio', '08' => 'Agosto', '09' => 'Setiembre',
						   '10' => 'Octubre', '11' => 'Noviembre', '12' => 'Diciembre');

	/*
	 * Funcion para obtener el nombre del mes
	 */
	public static function get_nom_mes($fecha)
	{
		//2015-06-06
		$fech = explode("-", $fecha);
		$m = $fech[1];
		$nom_mes = null;
		$lista = self::$meses;
		foreach ($lista as $key => $value) {
			if ($key == $m) {
				$nom_mes = $lista[$key]; 
			}
		}

		return $nom_mes;
	}

	/*
	 * Funcion para obtener el año de la fecha dada
	 */
	public static function getYear($fecha)
	{
		$fech = explode("-", $fecha);
		$y = $fech[0];
		return $y;
	}
}