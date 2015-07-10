<?php

Class AgendaController extends BaseController{

	public function index(){
		return View::make('home.subcontent.agenda-views');
	}
}