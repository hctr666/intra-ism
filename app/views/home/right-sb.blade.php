<style type="text/css">
	h3.display-name{
		font-size: 1.5em;
		font-style: italic;
		font-weight: bold;
	}

	p.user_info{
		font-size: 0.1em;
		font-style: italic; 
	}
</style>
<div class="sb-slidebar sb-right sb-style-overlay" style="margin-right: -270px;">
	<aside id="about-me">
		@if(is_null(Auth::user()->fotoperfil))
		<img class="img-circle img-responsive img-me" width="150" height="150" src="assets/img/foto-perfil.png" alt="Sin foto de perfil">
		@else
		<img class="img-circle img-responsive img-me" width="150" height="150" src="{{ 'data: image;base64,'.base64_encode(Auth::user()->fotoperfil) }}" alt="Foto de perfil">
		@endif
		<center><h3 class="display-name">{{ Auth::user()->display_name }}</h3></center>
		<center><p class="usr_info" style="font-size:1em;">{{ User::getCargoUser() }}</p></center><br>
		<p class="usr_info" style="font-size:.9em;">Area:  {{ User::getAreaUser() }}</p>
		<p class="usr_info" style="font-size:.9em;">Empresa:  {{ User::getEmpresaUser() }}</p>
		<p class="usr-info" style="font-size:.9em;">Sede: {{ Empresa::getSedeAuth(Auth::user()->empresa_id) }}</p>
		<ul class="list-unstyled">
			<li class="sb-close"><a href="#">Mi perfil</a></li>
			<li class="sb-close">{{ HTML::link('/logout', 'Cerrar sesión.') }}</li>
		</ul>
	</aside>
</div>