{{ HTML::style('assets/css/lbox/ekko-lightbox.css'); }}
<style type="text/css">
    /* i like padding - you can ignore this css. see the actual css / less files in the repository for styling the gallery navigation */
    div.row_ > div > div.row_ {
        margin-bottom: 15px;
    }

    div.top-header {
        margin-bottom:100px;
    }

    h3.page-header {
        margin-top: 50px;
        margin-left: 20px;
        font-weight: bold;
    }

    figure {
        position: relative;
    }

    figure figcaption {
        font-size: 22px;
        color: #fff;
        text-decora8tion: none;
        bottom: 10px;
        right: 20px;
        position: absolute;
        background-color: #000;
    }
    code {
        white-space: pre-wrap;       /* css-3 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */
    }
</style>
<div class="container">
    <div id="media"></div>
    <div style="height:40px;"></div>    
    <div class="col-lg-12">
        <h2 class="tit-fsys"><strong>Multimedia</strong></h2>
        <div class="row div-shadow">
            <div class="titulo-sec" style="background-color:#0e8e5f; width:100%;">
                <h2 style="padding:3px;"></h2>
            </div>
            <h3 class="page-header" id="youtube-gallery">Videos institucionales</h3>
            <div class="row row_">
                <div class="col-md-offset-1 col-md-10">
                    <div class="row row_">
                        <a href="http://www.youtube.com/watch?v=k6mFF3VmVAs" data-toggle="lightbox" data-gallery="youtubevideos" class="col-sm-4">
                            <img src="//i1.ytimg.com/vi/yP11r5n5RNg/mqdefault.jpg" class="img-responsive">
                        </a>
                        <a href="http://youtu.be/iQ4D273C7Ac" data-toggle="lightbox" data-gallery="youtubevideos" class="col-sm-4">
                            <img src="//i1.ytimg.com/vi/iQ4D273C7Ac/mqdefault.jpg" class="img-responsive">
                        </a>
                        <a href="//www.youtube.com/embed/b0jqPvpn3sY" data-toggle="lightbox" data-gallery="youtubevideos" class="col-sm-4">
                            <img src="//i1.ytimg.com/vi/b0jqPvpn3sY/mqdefault.jpg" class="img-responsive">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>
{{ HTML::script('assets/js/bs/3.3.4/bootstrap.min.js'); }}
{{ HTML::script('assets/js/lbox/ekko-lightbox.js'); }}
<script type="text/javascript">
    $(document).ready(function ($) {
        // delegate calls to data-toggle="lightbox"
        $(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
            event.preventDefault();
            return $(this).ekkoLightbox({
                onShown: function() {
                    if (window.console) {
                        return console.log('Checking our the events huh?');
                    }
                },
                onNavigate: function(direction, itemIndex) {
                    if (window.console) {
                        return console.log('Navigating '+direction+'. Current item: '+itemIndex);
                    }
                }
            });
        });

        //Programatically call
        $('#open-image').click(function (e) {
            e.preventDefault();
            $(this).ekkoLightbox();
        });
        $('#open-youtube').click(function (e) {
            e.preventDefault();
            $(this).ekkoLightbox();
        });

        // navigateTo
        $(document).delegate('*[data-gallery="navigateTo"]', 'click', function(event) {
            event.preventDefault();
            return $(this).ekkoLightbox({
                onShown: function() {

                    var a = this.modal_content.find('.modal-footer a');
                    if(a.length > 0) {

                        a.click(function(e) {

                            e.preventDefault();
                            this.navigateTo(2);

                        }.bind(this));

                    }

                }
            });
        });
    });
</script>