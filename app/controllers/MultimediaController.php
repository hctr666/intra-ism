<?php

Class MultimediaController extends BaseController{

	public function index(){
		return View::make('home.subcontent.media');
	}
}