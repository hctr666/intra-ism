<style type="text/css">.titulo-sec{ border-style: dotted; border-color: #0e8e5f; }</style>
<div class="titulo-sec" style="background-color:#0e8e5f; width:100%; ">
	<h2 style="padding:8px; color:white;">
		<img width="60px;" src="assets/img/esms.jpg" style="float:right;">  Embotelladora sede: 
		{{ Form::select('sel-sede', ['h'=>'Huaura', 'aqp'=>'Arequipa'], null, ['id'=>'sel-sede']) }}
	</h2>
</div>
<!--script para cambio de url según sede seleccionada-->
{{ HTML::script('assets/js/util/cambioUrlSegunSede.js'); }}
<div>
	<div class="row _row_">
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="sist" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
					{{ HTML::image("assets/img/sistemas.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3>Sistemas</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="comu" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
					{{ HTML::image("assets/img/comunic.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3 style="font-size:10px;">Comunicaciones</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="ghuma" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
					{{ HTML::image("assets/img/gesthumana.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3>Gestión Humana</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="fi-co" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/cont-fina.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3 style="font-size:12px;">Contabilidad y Finanzas</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="legal" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
					{{ HTML::image("assets/img/legal.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3>Area Legal</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="logis" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/logistica.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3>Logística</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="produ" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/produccion.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3>Producción</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="soste" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/sostenible.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3 style="font-size:12px;">Sostenibilidad</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="segu" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/seg-ind.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3>Seguridad Industrial</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="salud" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/salud-oc.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3>Salud Ocupacional</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="i+d" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/id.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3 style="font-size:12px;">Investigación & Desarrollo</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="proy" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/proy.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3 style="font-size:12px;">Proyectos</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
		<div class="col-lg-3 col-md-4 col-sm-3 col-xs-12 col-rd">
			<div class="ih-item circle effect1">
			<a id="mant" target="_blank">
				<!--Effect: Bottom to Top -->
				<div class="spinner"></div>
				<div class="img">
				    {{ HTML::image("assets/img/mant.jpg"); }}
				</div>
				<div class="info">
					<div class="info-back">
						<h3 style="font-size:12px;">Mantenimiento</h3>	
					</div>
				</div>
			</a>
			</div>
		</div>
	</div>
</div>