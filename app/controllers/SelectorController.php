<?php

/**
* 
*/
class SelectorController extends BaseController
{
	
	public function get_area_index($area)
	{
		return View::make('modals.opc-area')->with($area);
	}
}