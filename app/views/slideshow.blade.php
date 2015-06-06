<!DOCTYPE html>
<head>
<link rel="stylesheet" href="assets/css/slide-show/responsiveslides.css">
<link rel="stylesheet" href="assets/css/slide-show/home-slidenews.css">

</head>
<body>
  <div id="wrapper" class="col-md-12">
    <!-- Slideshow 4 -->
    <div class="callbacks_container">
      <ul class="rslides" id="slider4">
        <li>
          <img src="assets/img/slide-show/ISM_HOME_03.jpg" alt="">
            <div class="caption">
              <div class="cap-wrapper row">
                <a href="#" style="color:white;"><p class="titulo-new col-lg-12">Piensa en grande</p></a>
                <a href="#" style="color:white;"><p class="resu-new col-lg-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p></a>
              </div>
            </div>
        </li>
        <li>
          <img src="assets/img/slide-show/ISM_HOME_03.jpg" alt="">
          <div class="caption">
            <div class="cap-wrapper">
              <a href="#" style="color:white;"><p class="titulo-new">Piensa en grande</p></a>
              <a href="#" style="color:white;"><p class="resu-new">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p></a>
            </div>
          </div>
        </li>
        <li>
          <img src="assets/img/slide-show/main-bg.jpg" alt="">
          <div class="caption">
            <div class="cap-wrapper">
              <a href="#" style="color:white;"><p class="titulo-new">Piensa en grande</p></a>
              <a href="#" style="color:white;"><p class="resu-new">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p></a>  
            </div>
        </li>
      </ul>
      <script type="text/javascript" src="assets/js/jquery/jquery8.min.js"></script>
    </div>
  </div>
</body>
</html>
<script>
    // You can also use "$(window).load(function() {"
    $(function () {

      // Slideshow 4
      $("#slider4").responsiveSlides({
        auto: true,
        pager: true,
        pause: true,
        nav: true,
        speed: 500,
        namespace: "callbacks",
        before: function () {
          $('.events').append("<li>before event fired.</li>");
        },
        after: function () {
          $('.events').append("<li>after event fired.</li>");
        }
      });
    });
  </script>