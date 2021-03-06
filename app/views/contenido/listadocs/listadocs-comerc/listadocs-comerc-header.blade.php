<div class="header">
    <nav id="myNavbar" class="navbar navbar-default navbar-fixed-top" role="navigation">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>  
                <a class="navbar-brand" href="#" rel="home"><img src="{{ $url_logo }}" id="logo"></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse" id="bs-example-navbar-collapse-1">
                @if( $extra == 1 )
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">Estructura Organizacional <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#es_org">Organigrama</a></li>
                            <li><a href="#es_org">MOF</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">Reglamentos<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#reg">Reglamento Interno de Trabajo</a></li>
                            <li><a href="#reg">Reglamento Seguridad y Salud</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav">
                    <li><a href="#foda">FODA</a></li>
                </ul>
                <ul class="nav navbar-nav">
                    <li><a href="#poli">Políticas</a></li>
                </ul>
                <ul class="nav navbar-nav">
                    <li><a href="#proc">Procedimientos</a></li>
                </ul>
                @endif
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" data-toggle="dropdown" class="dropdown-toggle">Facturas<b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#facturas">RPC</a></li>
                            <li><a href="#facturas">Modem</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</div>