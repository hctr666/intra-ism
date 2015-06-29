<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddEmpresaTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('empresa', function(Blueprint $table){
			$table->create();
			$table->increments('id');
			$table->string('desc_emp', 60);
			$table->string('obs_emp', 200);
			$table->string('tipo_emp', 100);
			$table->string('sede_emp', 60);
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
		
	}

}
