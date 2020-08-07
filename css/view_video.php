<div class="mdk-header-layout__content page-content ">

<div class="alfa-PT-header-wrapper exam-prediction">
    <div class="container">
        <div class="row no-gutters alfa-PT-header">
            <div class="col-7">
                <div class="alfa-PT-header-left">
                    <img src="https://alfapte.com/a_site/portal-assets/img/video-blue-original.svg" alt="video-blue">
                    <h1 class="text-capitalize"><?php echo $course_name;?></h1>
                </div>
            </div> 
            <div class="col-5 alfa-PT-E-btns text-right  mt-2">
              <!-- <button class="btn btn-primary" id="toggleMenu" onclick="toggle_split();"> <i class="material-icons" style="font-size: 24px">vertical_split</i></button> -->
              <button class="btn btn-primary alfa-PT-E-restart">
                <i class="fa fa-angle-left"></i> 
                  Back
              </button>
            </div>
        </div>
    </div>
</div>

  <div class="container page__container alfa-body pt-0 mt-3">
    <!-- <h4></h4> -->
    <div class="card report-exam-details">
      <div class="card-body">
        <div class="row mb-3">
        </div>
        <div class="row">
          <div class="col-md-12" id="videoBlock" >
        			<?php if(!empty($video_document)){ ?>
                    <!-- <button id="toggleMenu" class="btn btn-outline-primary btn-sm" onclick="toggle_split();"><i class="material-icons" style="font-size: 24px">vertical_split</i></button> -->
        			<?php } ?>
            <div id="yplayer" class="player" data-property="{videoURL:'<?php echo $video_url;?>',containment:'self',autoPlay:true, startAt:0, rel: 0, showinfo: 0, ecver: 2, disablekb: 0, hd: 1}">My video</div>
            </div>
              <?php if(!empty($video_document)){
                  if(isset($is_download) && $is_download =='0') { ?>
                      
                  <?php }else{ ?>
                      <div class="col-md-offset-6 col-md-12 text-center" style="margin-top:20px;">
                          <a href="<?php echo $video_document;?>" target="_blank" class="btn btn-sm btn-primary">
                            <i class="material-icons" style="font-size: 27px;line-height: 1;">cloud_download</i>&nbsp;Download
                          </a>
                      </div>
                  <?php } ?>
              <?php } ?>
          </div>
        </div>
        <div class="row">
        <div class="col alfa-PT-E-btns text-center  mt-0 mb-3">
          <button class="btn btn-primary alfa-PT-E-restart submit-btn ">
                <i class="lni lni-download mr-2"></i> Download Material
           </button>   
        </div>
      </div>
      </div>  
      
      
    </div>
  </div>

  <link href='<?php echo base_url('template/assets/vendor/ytplayer/jquery.mb.YTPlayer.min.css'); ?>' rel='stylesheet' />
  <script src='<?php echo base_url('template/assets/vendor/ytplayer/jquery.mb.YTPlayer.min.js?ver='.VERSION_CODE); ?>'></script>

  <script>
  $(function(){
    $("#yplayer").YTPlayer();

    var time = setInterval(function(){
      if($('.fa-plus').length > 0){
        //$('.fa-plus').trigger('click');
        clearInterval(time);
      }
    },2000);
  });



  $('#videoBlock').draggable({
    handle: ".inline-YTPlayer"
  });
  //$( "#videoBlock" ).resizable();

  var is_toggle = false;
  function toggle_split(){
    if(is_toggle){
      $('#toggleMenu').removeClass('btn-primary').addClass('btn-outline-primary');
      $('#videoBlock').removeClass('col-md-12').addClass('col-md-5');
      //$('#fileBlock').removeClass('col-md-12').addClass('col-md-7');
      $('#fileBlock').css('display', 'initial');
      is_toggle = false;
    }
    else{
      $('#toggleMenu').removeClass('btn-outline-primary').addClass('btn-primary');
      $('#videoBlock').removeClass('col-md-5').addClass('col-md-12');
      //$('#fileBlock').removeClass('col-md-7').addClass('col-md-12');
      $('#fileBlock').css('display', 'none');
      is_toggle = true;
    }
  }

  var isNS = (navigator.appName == "Netscape") ? 1 : 0;

  if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);

  function mischandler(){
    return false;
  }

  function mousehandler(e){
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if((eventbutton==2)||(eventbutton==3)) return false;
  }
  document.oncontextmenu = mischandler;
  document.onmousedown = mousehandler;
  document.onmouseup = mousehandler;

</script>