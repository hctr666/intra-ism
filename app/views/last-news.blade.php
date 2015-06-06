<html>
<head>
  <title></title>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  {{ HTML::style('assets/css/news/simple.min.css'); }}
  {{ HTML::script('assets/js/news/jquery.marquee.js'); }}
</head>
<body>
<div class="row div-shadow">
  <div class="titulo-sec" style="background-color:#0e8e5f; width:100%;">
    <h2 style="padding:8px; color:white;">Lo úlltimo</h2>
  </div>    
  <div class="pic-container">
    <div class="list-wrpaaer" style="height:370px;">
       <ul class="list-aggregate" id="marquee-vertical">
         <li>
          <div class="row">
              <img class="col-lg-3 col-md-3 col-xs-3" src="assets/icons/logomain.png">
            <div>
              <a href="">Breaking News 1</a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing icitudin semper. Nam convallis sapien nisi, ac vulputate nisi auctor blandit. Donec tincid.
              </p>
              <button class="btn btn-xs btn-info">Leer más</button>              
            </div>              
          </div>
         </li>
         <li>
          <div class="row">
              <img class="col-lg-3 col-md-3 col-xs-3" src="assets/icons/logomain.png">
            <div>
              <a href="">Breaking News 2</a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing icitudin semper. Nam convallis sapien nisi, ac vulputate nisi auctor blandit. Donec tincid.
              </p>
              <button class="btn btn-xs btn-info">Leer más</button>               
            </div>              
          </div>
         </li>
         <li>
          <div class="row">
              <img class="col-lg-3 col-md-3 col-xs-3" src="assets/icons/logomain.png">
            <div>
              <a href="">Breaking News 3</a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing icitudin semper. Nam convallis sapien nisi, ac vulputate nisi auctor blandit. Donec tincid.
              </p>
              <button class="btn btn-xs btn-info">Leer más</button>               
            </div>              
          </div>
         </li>
         <li>
          <div class="row">
              <img class="col-lg-3 col-md-3 col-xs-3" src="assets/icons/logomain.png">
            <div>
              <a href="">Breaking News 4</a>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing icitudin semper. Nam convallis sapien nisi, ac vulputate nisi auctor blandit. Donec tincid.
              </p>
              <button class="btn btn-xs btn-info">Leer más</button>               
            </div>              
          </div>
         </li>
       </ul>
    </div><!-- list-wrpaaer -->
  </div>
</div>
</body>
</html>
{{ HTML::script('assets/js/news/jquery.marquee.js'); }}
<script type="text/javascript">
  $('#marquee-vertical').marquee();
    /*// enable the plugin
    enable : true,  //plug-in is enabled

    // scroll direction
    // 'vertical' or 'horizontal'
    direction: 'vertical',

    // children items
    itemSelecter : 'li', 

    // animation delay
    delay: 3000,

    // animation speed
    speed: 1,

    // animation timing
    timing: 1,

    // mouse hover to stop the scroller
    mouse: true*/
</script>