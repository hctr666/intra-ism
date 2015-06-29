<?php

/**
* 
*/
class Cargo extends Eloquent
{
	protected $table = 'cargo';


	public function user()
	{
		return $this->belongsTo('User');
	}

}