<?php


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
    	$this->setAttribute('version', $num);
    }

    public function selec_doc($id_emp, $tipo_doc){
        $result = DB::select("SELECT d.id, d.desc_doc, d.url_file,
                           a.desc_area, d.created_at, d.version, u.username
                    FROM documento d, area a, users u
                    WHERE a.id = d.area_id AND u.id = d.user_id
                        AND d.empresa_id = $id_emp 
                        AND d.tipo_doc = '$tipo_doc' 
                        AND d.state = 1"
                  );
        return $result;
    }
	
}