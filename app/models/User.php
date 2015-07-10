<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');
	
	public function set_password($string)
	{
		$this->setAttribute('password', Hash::make($string));
	}

    /**
     * Get the roles a user has
     */
    public function roles()
    {
        return $this->belongsToMany('Role', 'assigned_roles');
    }

    /**
     * Find out if User is an employee, based on if has any roles
     *
     * @return boolean
     */
    public function isEmployee()
    {
        $roles = $this->roles->toArray();
        return !empty($roles);
    }

    /**
     * Find out if user has a specific role
     *
     * $return boolean
     */
    public function hasRole($check)
    {
        return in_array($check, array_fetch($this->roles->toArray(), 'name'));
    }

 	/**
     * Get key in array with corresponding value
     *
     * @return int
     */
    private function getIdInArray($array, $term)
    {
        foreach ($array as $key => $value) {
            if ($value == $term) {
                return $key;
            }
        }
 
        throw new UnexpectedValueException;
    }

    public static function isAdmin()
    {
    	$c_user = Auth::user()->id;
		$result = User::find($c_user)->roles;
		$role = $result[0]->pivot->role_id;

		if ($role == 3 || $role == 1) {
			return true;
		}
		return false;
    }

    public static function getCargoUser(){
        $cargo = Cargo::find(Auth::user()->cargo_id);
        $cargo = $cargo->desc_cargo;
        $cargo = strtolower($cargo);
        $cargo = ucfirst($cargo);
        return $cargo;
    }

    public static function getAreaUser(){
        $area = Area::find(Auth::user()->area_id);
        $area = $area->desc_area;
        $area = strtolower($area);
        $area = ucfirst($area);
        return $area;        
    }

    public static function getEmpresaUser(){
        $empresa = Empresa::find(Auth::user()->empresa_id);
        $empresa = $empresa->desc_emp;
        return $empresa;
    }

    public function cargo()
    {
    	return $this->hasOne('Cargo');
    }

    public function area()
    {
    	return $this->hasOne('Area');
    }

    public function empresa()
    {
    	return $this->hasOne('Empresa');
    }

    public function documento(){
    	return $this->hasMany('Documento');
    }

}
