<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

// Nos mostrará el formulario de login.
Route::get('login', 'AuthController@get_login');

// Validamos los datos de inicio de sesión.
Route::post('login', 'AuthController@post_login');

// Nos indica que las rutas que están dentro de él sólo serán mostradas si antes el usuario se ha autenticado.
Route::group(array('before' => 'auth'), function(){

    // Esta será nuestra ruta de bienvenida.
	Route::get('/', 'HomeController@showWelcome');
	Route::get('home', 'HomeController@showWelcome');

    // Esta ruta nos servirá para cerrar sesión.
	Route::get('logout', 'AuthController@logOut');

	//Carga la sección de misión visión y valores ISM
	Route::get('nosotros', 'EmpresaController@showNosotros');
	
	Route::get('user', 'UserController@get_index');
	Route::post('user/created', 'UserController@post_create');
	Route::get('user/create', 'UserController@get_create');
	Route::get('user/update/{id}', "UserController@get_update");
	Route::get('user/delete/{id}', 'UserController@get_delete');
	Route::post('user/update/{id}', 'UserController@post_update');

	//Route::get('selec-op/{area}', array( 'as' => 'opciones', 'uses' => 'SelectorController@get_area_index'));
	//Route::get('equipo', array('as' => 'equipo', 'uses' => 'EquipoAreaController@get_equipo_index'));
	Route::get('nosotros', array('as' => 'nosotros', 'uses' => 'NosotrosController@get_index'));
	Route::get('archivos', array('as' => 'archivos', 'uses' => 'FilesAreaController@get_index'));
	Route::get('documentos/{empresa}', 'DocumentoController@get_index_comerc');
	Route::get('documentos/esms/{sede}/{area}', 'DocumentoController@get_index_planta');
	Route::post('documentos/{cod}/ul_1', 'DocumentoController@store_comerc');
	Route::post('documentos/esms/{sede}/{area}/ul_2', 'DocumentoController@store_esms');
	Route::get('agenda', "AgendaController@index");
	Route::get('media', 'MultimediaController@index');
	//Route::post('documentos/{cod}/ul_1/s_d', 'DocumentoController@post_create');
	Route::get('fechatest', function(){
		return FechaUtil::get_nom_mes("2015-02-20");
	});

	Route::get('area_id', function(){
		return Documento::get_id_area('sist');
	});

	#Route::any('visor/{all?}', 'ViewerController@get_index');
	Route::any('visor/{all?}', 'ViewerController@get_index');
	Route::get('documentos/ism/sistemas/soporte', 'DocumentoController@get_index_soporte');
	
	/*Route::get('base', function(){
		return public_path();
	});*/
});

Route::get('resul', function(){});