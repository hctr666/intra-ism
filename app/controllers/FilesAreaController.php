<?php
/**
* 
*/
class FilesAreaController extends BaseController
{
	
	public function get_index(){
		return View::make("areas.area-files");
	}
}