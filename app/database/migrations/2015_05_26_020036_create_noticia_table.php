<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNoticiaTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('noticia', function(Blueprint $table){
			$table->create();
			$table->increments('id');
			$table->string('tit_new', 100);
			$table->string('cont_new', 250);
			$table->timestamps();
		})
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('noticia');
	}

}
