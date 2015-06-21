<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
	<div class="pic-container">
		<!--Effect: Bottom to Top -->
		<div class="pic row">
			{{ HTML::image("assets/img/GA.jpg"); }}
		    <span class="pic-caption bottom-to-top">
			    <div style="margin-top:12%;">
		        	<!--<a href="" class="btn btn-def btn-files" name="ga">Explorar</a>-->
			    	{{ HTML::link('documentos/ga', 'Explorar', array('class'=>'btn btn-def btn-files', 'target'=>'_blank')) }}
			    	<!--<span class="btn-icon spn-files"></span>-->
			    </div>
		    </span>
		    <div class="nom-area">
				<p>G&A</p>
			</div>
		</div>
	</div>
</div>
<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
	<div class="pic-container">
		<!--Effect: Bottom to Top -->
		<div class="pic">
		    {{ HTML::image("assets/img/silverlake.jpg"); }}
		    <span class="pic-caption bottom-to-top">
			    <div style="margin-top:12%;">
		        	<!--<a href="" class="btn btn-def btn-files" name="ga">Explorar</a>-->
			    	{{ HTML::link('documentos/sl', 'Explorar', array('class'=>'btn btn-def btn-files', 'target'=>'_blank')) }}
			    	<!--<span class="btn-icon spn-files"></span>-->
			    </div>
		    </span>
		    <div class="nom-area">
				<p>Silverlake</p>
			</div>
		</div>
	</div>
</div>
<div class="col-md-6 col-lg-4 col-sm-4 col-xs-12">
	<div class="pic-container">
		<!--Effect: Bottom to Top -->
		<div class="pic">
		    {{ HTML::image("assets/img/cyncat.jpg"); }}
		    <span class="pic-caption bottom-to-top">
			    <div style="margin-top:12%;">
		        	<!--<a href="" class="btn btn-def btn-files" name="ga">Explorar</a>-->
			    	{{ HTML::link('documentos/ck', 'Explorar', array('class'=>'btn btn-def btn-files', 'target'=>'_blank')) }}
			    	<!--<span class="btn-icon spn-files"></span>-->
			    </div>
		    </span>
		    <div class="nom-area">
				<p>Cyncat</p>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	$(".btn-files").click(function(e){
		//$('#contenedor').load('archivos');
		$("#contenedor")[0].scrollIntoView(true);
	});
</script>