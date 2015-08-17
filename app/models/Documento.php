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
                           a.desc_area, d.created_at, d.version,
                           u.username, d.elaborado 
                    FROM documento d, area a, users u
                    WHERE a.id = d.area_id AND u.id = d.user_id
                        AND d.empresa_id = $id_emp 
                        AND d.tipo_doc = '$tipo_doc' 
                        AND d.state = 1"
                  );

        return $result;
    }
	
    public function selec_doc_esms($id_emp, $tipo_doc, $id_area){
        $result = DB::select("SELECT d.id, d.desc_doc, d.url_file,
                           a.desc_area, d.created_at, d.version,
                           u.username, d.elaborado 
                    FROM documento d, area a, users u
                    WHERE a.id = d.area_id AND u.id = d.user_id
                        AND d.area_id = $id_area
                        AND d.empresa_id = $id_emp 
                        AND d.tipo_doc = '$tipo_doc' 
                        AND d.state = 1"
                  );

        return $result;
    }

    public function get_id_area($cod_url)
    {
        $result = DB::select("SELECT id FROM area WHERE cod_url = '$cod_url';");
        return $result[0]->id;
    } 

    public function existe($url_file)
    {
        if (file_exists(public_path().$url_file))
        {
            return true;
        }
        return false;
    }
}