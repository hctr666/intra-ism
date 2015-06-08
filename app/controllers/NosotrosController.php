<?php 

/**
* 
*/
class NosotrosController extends BaseController
{
	
	public function get_index(){
		return View::make('nosotros');
	}
}