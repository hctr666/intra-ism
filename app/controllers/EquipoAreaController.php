<?php

/**
* 
*/
class EquipoAreaController extends BaseController
{
	
	public function get_equipo_index()
	{
		return View::make('areas.area-team');
	}
}