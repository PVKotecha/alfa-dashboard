    <div class="alfa-PT-sidebar">
        <ul class="navbar-side" id="navbarSide">
            <div class="alfa-sidebar-arrow">
               <a href="javascript:void(0)" id="navbarSideButton"> <img src="<?php echo base_url('portal-assets/img/sidebar-arrow-white-only.svg')?>" class="" alt="sidebar arrow"></a>
            </div>
            <div class="alfa-PT-header-wrapper alfa-reading mt-1">
                <div class="container">
                    <!--HEADING-->
                    <div class="row no-gutters alfa-PT-header">
                        <div class="col-12">
                            <div class="alfa-PT-header-left">
                              <img src="<?php echo base_url('portal-assets/img/mcm.svg')?>" alt="<?php echo $layout_title; ?>">
                              <h1><?php echo $layout_title; ?></h1>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <!--HEADING end-->
            <div class="container alfa-sidebar-container">
                 <!--Checkbox and Search-->
                 <div class="row mb-3">
                    <div class="col-sm-12 col-md-6 col-lg-6 text-center text-lg-left">
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" class="custom-control-input" id="practice">
                            <label class="custom-control-label" for="practice">Practiced</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" class="custom-control-input" id="nonpractice">
                            <label class="custom-control-label" for="nonpractice">Not Practiced</label>
                        </div>
                        <div class="custom-control custom-checkbox custom-control-inline">
                            <input type="checkbox" class="custom-control-input" id="all_practice_section" checked>
                            <label class="custom-control-label" for="all_practice_section">All</label>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6">
                        <div class="input-group alfa-search-input-group">
                            <input type="text" class="form-control alfa-sideber-search-input" placeholder="Question Title / Number" id="search_text">
                            <div class="input-group-append">
                              <button class="btn btn-secondary alfa-sidebar-search-btn" type="button" onclick="load_questions(1)">
                                <i class="fa fa-search"></i>
                              </button>
                            </div>
                        </div>
                    </div>                        
                </div> 
                <!--Checkbox and Search end-->
                <!--Tabs-->
                <ul class="nav nav-pills alfa-sidebar-nav mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a class="nav-link " id="pills-all-tab" data-toggle="pill" onclick="set_type(0)">all</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link active" id="pills-latestquestion-tab" data-toggle="pill" onclick="set_type(1)" >latest question</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="pills-prediction-tab" data-toggle="pill"  onclick="set_type(2)">prediction</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="pills-highfreq-tab" data-toggle="pill"  onclick="set_type(3)" >high frequency</a>
                    </li>
                    <li class="nav-item" role="presentation">
                      <a class="nav-link" id="pills-bookmark-tab" data-toggle="pill"  onclick="set_type(4)" >bookmark</a>
                    </li>
                </ul>
                <!--Tabs end-->
                <ul class="nav nav-pills alfa-sidebar-nav alfa-sidear-prediction-nav" id="pills-tab-sub-prediction" role="tablist" style="display: none;">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-may-tab" data-toggle="pill" onclick="set_type(21)"><?php echo date('M-Y');?></a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-june-tab" data-toggle="pill" onclick="set_type(22)"><?php echo date('M-Y', strtotime('first day of previous month'));?></a>
                    </li>
                </ul>
                <!--Tab Content-->
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                        <p class="alfa-sidebar-found">Found <span id="question_found">--</span> Questions</p>
                        <span id="sidebar_placeholder">
                          <div class="content-ph-container">
                            <div class="content-placeholder">
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                                <div class="content-ph-loader"></div>
                            </div>
                        </div>
                        </span>
                        <span id="main_tab">
                        </span>
                        <!--Pagination-->
                        <div class="row row mt-2 mb-5">
                            <div class="col-8"> 
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination alfa-pagination"></ul>
                                </nav>
                            </div>
                            <div class="col-sm-12 col-md-4 col-lg-4 alfa-sidebar-jump-page" id="go_to">
                                <span>GO TO</span>
                                <input type="number" id="go_to_page_no" class="form-control" min="1" value="1" onchange="load_questions($(this).val());">
                                <span>/</span>
                                <span id="total_pages">--</span>
                                <button class="btn alfa-sidebar-gotoTop">
                                    <i class="fa fa-chevron-up"></i>
                                    TOP
                                </button>
                            </div>
                        </div>
                        <!--Pagination End-->
                    </div>
                </div>
                <!--Tab Content End-->
            </div> 
         </ul>
    </div>

<div class="alfa-overlay" style="display: none;"></div>
<input type="hidden" id="question_page" value="1">
<input type="hidden" id="filter_value" value="0">
<input type="hidden" id="practice_check" value="0">
<input type="hidden" id="nonpractice_check" value="0">

<script type="text/javascript">

$(document).ready(function() {
        set_type(1);
        $('.alfa-overlay').toggle();
        $('body').addClass('o-hidden');
        $('#navbarSide').addClass('reveal');
        $('#navbarSideButton img').addClass('rotate');
        setTimeout(function () {
            pause_question();  
        }, 1000);
});

$('#navbarSideButton').on('click', function() {
        // set_type(0);
        $('#navbarSide').toggleClass('reveal');
        $('#navbarSideButton img').toggleClass('rotate');
        $('.alfa-overlay').toggle();
       
        if($('#navbarSide').hasClass('reveal')){
          $('body').addClass('o-hidden');
          setTimeout(function () {
              pause_question();  
          }, 1000);
        }else{
          $('body').removeClass('o-hidden');
          var id = window.setTimeout(function() {}, 0);
          while (id--) { window.clearTimeout(id); }
          restart_question();
        }
});


$('#practice').change(function() {
    if(this.checked) {
      $('#all_practice_section').prop("checked", false);
      $('#nonpractice').prop("checked", false);

      $('#practice_check').val('1');
      if($('#nonpractice').is(':checked')){
      }else{
        $('#nonpractice_check').val('0');
      }
    }else{
      $('#practice_check').val('0');
    }
      load_questions(1);
});

$('#nonpractice').change(function() {
    if(this.checked) {
      $('#all_practice_section').prop("checked", false);
      $('#practice').prop("checked", false);
      $('#nonpractice_check').val('1');
      if($('#practice').is(':checked')){
      }else{
        $('#practice_check').val('0');
      }
    }else{
      $('#nonpractice_check').val('0');
    }
      load_questions(1);
});

$('#all_practice_section').change(function() {
    if(this.checked) {
      $('#nonpractice').prop("checked", false);
      $('#practice').prop("checked", false);

      $('#nonpractice_check').val('1');
      $('#practice_check').val('1');
    }else{
      $('#nonpractice_check').val('0');
      $('#practice_check').val('0');
    }
      load_questions(1);
});

    function set_type($type) {
        if($type === 2 ){
            $('#pills-tab-sub-prediction').css('display','');
            $("#filter_value").val('21');
        }else if($type === 21 || $type === 22){
            $('#pills-tab-sub-prediction').css('display','');
            $("#filter_value").val($type);
        }else{
            $('#pills-tab-sub-prediction').css('display','none');
            $("#filter_value").val($type);
        }
        load_questions(1);
    }

    function load_questions(page='') {
        var filter_value = $("#filter_value").val();

        if(page === ''){
          var page = $("#question_page").val();
        }

        var practice_check = $("#practice_check").val();
        var nonpractice_check = $("#nonpractice_check").val();
        practice_value = '';
        if(practice_check === '1' && nonpractice_check === '1'){
          practice_value = '10';
        }
        if(practice_check === '1' && nonpractice_check === '0'){
          practice_value = '0';
        }
        if(practice_check === '0' && nonpractice_check === '1'){
          practice_value = '1';
        }


        var search_text = $("#search_text").val();
        $('#main_tab').css('display','none');
        $('#sidebar_placeholder').css('display','');

            $.ajax({
              url: base_url+"ajax_load/reading_mcma/",
              method: 'POST',
              data: {'page':page,'filter_value':filter_value,'practice_value':practice_value,'search_text':search_text},

              success: function(result){
                var result_data = JSON.parse(result);
                // console.log(result_data);
                $('#question_found').html(result_data['total_records']);
                    $('#main_tab').html('');
                if(typeof result_data['html_data'] !== 'undefined' && result_data['html_data'].length > 0 ){
                    $('#main_tab').append(result_data['html_data']);
                    next_page = page+1;
                    $("#question_page").val(next_page);
                    load_pagination(result_data['total_pages'],page);
                    $('#go_to').css('display','');
                    $('#total_pages').text(Math.ceil(result_data['total_pages']));
                    var selector = $('div.card.alfa-sidebar-main-card');
                    var first_value = selector.data('value');
                    paging.currentPage = selector.data('pageid'); 
                    question_id   = selector.data('value');
                    question_type = selector.data('type');
                    practice_type = selector.data('practice');
                    resetControl();
                    search();
                    load_circle();

                    setTimeout(function(){
                        pause_question();
                    }, 1000);

                }else{
                    $('.alfa-pagination').pagination('destroy');
                    $('#go_to').css('display','none');
                    $('#total_pages').text('--');
                    if(search_text !== ''){
                        $("#search_text").val('');
                        set_type(1);
                    }
                }
                setTimeout(function(){
                    $('#main_tab').css('display','');
                    $('#sidebar_placeholder').css('display','none');
                    $('#go_to_page_no').val('');
                }, 1000);
              }
            });
    }


$('body').on('click','.btn_load_question',function(){
    $(".alfa-overlay-with-loading").addClass('d-block');
    var id = window.setTimeout(function() {}, 0);
    while (id--) { window.clearTimeout(id); }
    
    console.log($(this).children());
    
    var selector = $(this).children();
    var first_value = selector.data('value');
    paging.currentPage = selector.data('pageid'); 
    question_id   = selector.data('value');
    question_type = selector.data('type');
    practice_type = selector.data('practice');

    resetControl();
    search();
    // var id = window.setTimeout(function() {}, 0);
    // while (id--) { window.clearTimeout(id); }
    // restart_question();
    $('body').removeClass('o-hidden');

    $('#navbarSide').removeClass('reveal');
    $('#navbarSideButton img').removeClass('rotate');
    $('.alfa-overlay').toggle();

    $(".alfa-overlay-with-loading").removeClass('d-block');
});

function load_pagination($items, $page) {
      $('.alfa-pagination').pagination({
          items: $items,
          itemOnPage: 10,
          currentPage: $page, 
          displayedPages: 2,
          edges: 2,
          prevText: '<span aria-hidden="true"><i class="fa fa-angle-left"></i></span>',
          nextText: '<span aria-hidden="true"><i class="fa fa-angle-right"></i></span>', 
          onInit: function () {
              // fire first page loading
          },
          onPageClick: function (page, evt) {
            load_questions(page);
          } 
      });
}    

function load_circle() {
    for (let val of $('.circle')) { 
        var myCircle = Circles.create({
            id: $(val).data('id'),
            radius: 18,
            value: $(val).data('value'),
            maxValue: 100,
            width: 5, 
            colors: ['rgba(236, 147, 95, .2)', '#ec935f'],
            duration: 400,
            wrpClass: 'circles-wrp',
            textClass: 'circles-text',
            valueStrokeClass: 'circles-valueStroke',
            maxValueStrokeClass: 'circles-maxValueStroke',
            styleWrapper: true,
            styleText: true
        });
    }
}

$('a.page-link').click(function() {
  alert($(this).text());
  load_questions($(this).text());
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

</script>