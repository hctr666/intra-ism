<?php

/**
* 
*/
class Documento extends Eloquent
{

	protected $table = 'documento';

	public function user(){
		return $this->belongsTo('User');
	}

	public function empresa(){
    	return $this->belongsTo('User');
    }

    public function set_version($url){
    	$files = File::allFiles($url);
    	$num = count($files);
    	$this->setAttribute('version', $num + 1);
    }
	
}