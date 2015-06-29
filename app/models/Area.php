<?php

/**
* 
*/
class Area extends Eloquent
{
	protected $table = 'area';
	
    public function user()
    {
    	return $this->belongsTo('User');
    }

}