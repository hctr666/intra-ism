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
    	if (is_null($id) || $id == '')
    	{
    		$sede = "No definido";
    	}
    	else
    	{
	    	$sede = Empresa::find($id)->sede_emp;    		
    	}
    	return $sede;
    }
}