<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCargoTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//tabla creada!
		Schema::table('cargo', function(Blueprint $table){
			//$table->create();
			$table->increments('id_cargo');
			$table->string('desc_cargo',60);
			$table->string('obs_cargo',200);
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
		Schema::drop('cargo');
	}

}
