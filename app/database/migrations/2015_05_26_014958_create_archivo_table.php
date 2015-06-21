<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDocumentoTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('documento', function(Blueprint $table){
			$table->create();
			$table->increments('id');
			$table->string('desc_doc', 60);
			$table->string('url_file', 200);
			$table->string('tipo_doc');
			$table->integer('are');
			$table->integer('id_emp');
			$table->date('elaborado');
			$table->date('aprobado');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('archivo');
	}

}
