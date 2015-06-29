<?php 
 /**
 * 
 */
 class Time extends eloquent
 {
 	
 	public static function now(){
 		return Carbon::now();
 	}

 	public static function fecha_hoy(){
 		$fecha = Carbon::now();
 		return $fecha->toDateString();
 	}
 }