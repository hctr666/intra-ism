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

/*Route::get('/', 'AuthController@get_login');
Route::get('login', 'AuthController@get_login');
Route::post('login', 'AuthController@post_login');

//Route::get("home", "HomeController@showWelcome");
Route::get('contrato', "ContratoController@get_index");

Route::group(array('before' => 'auth'), function(){

	//Route::controller("home", "HomeController");
	Route::get("home", "HomeController@showWelcome");
	Route::controller("user", "UserController");
	Route::get('logout', 'AuthController@getLogout');
	Route::get('user/create', 'UserController@get_create');
});*/

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
	Route::get('documentos/{empresa}', 'ComercFilesController@get_index');
	Route::post('documentos/{cod}/ul_1', 'ComercFilesController@store');
});