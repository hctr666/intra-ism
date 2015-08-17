<?php

/*
 * Controlador para visualizar los documentos PDF
 */
Class ViewerController extends BaseController
{
	public function get_index()
	{
		return View::make('visor.index');
	}
}