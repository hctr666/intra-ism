<?php

Class EmpresaController extends BaseController {
	
	public function showNosotros(){
		return View::make("nosotros");
	}
}