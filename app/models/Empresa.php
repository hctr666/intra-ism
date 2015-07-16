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

    public static function getSedeAuth($id){
    	$sede = Empresa::find($id)->sede_emp;
    	return $sede;
    }

}