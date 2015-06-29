<?php

/**
* 
*/
class Empresa extends Eloquent
{
	protected $table = 'empresa';

    public function user()
    {
    	return $this->belongsTo('User');
    }

}