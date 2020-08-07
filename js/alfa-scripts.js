$(document).ready(function() {

    //Mega menu
    $(document).ready(function() {
        $(".megamenu").on("click", function(e) {
            e.stopPropagation();
        });
    });
    

    //Circles For PRACTISE PROGRESS section Progress Bar
    var myCircle = Circles.create({
        id: 'circles-reading-que',
        radius: 42,
        value: 43,
        maxValue: 100,
        width: 9,
        text: function(value) {
            return value + '% <small> <br> Completed</small>';
        },
        colors: ['rgba(47, 218, 97, .2)', '#2fda61'],
        duration: 5400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-writing-que',
        radius: 42,
        value: 87,
        maxValue: 100,
        width: 9,
        text: function(value) {
            return value + '% <small> <br> Completed</small>';
        },
        colors: ['rgba(103, 184, 252, .2)', '#67b8fc'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-listening-que',
        radius: 42,
        value: 70,
        maxValue: 100,
        width: 9,
        text: function(value) {
            return value + '% <small> <br> Completed</small>';
        },
        colors: ['rgba(24, 93, 146, .2)', '#185d92'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-speaking-que',
        radius: 42,
        value: 43,
        maxValue: 100,
        width: 9,
        text: function(value) {
            return value + '% <small> <br> Completed</small>';
        },
        colors: ['rgba(236, 147, 95, .2)', '#ec935f'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-que',
        radius: 42,
        value: 43,
        maxValue: 100,
        width: 9,
        text: function(value) {
            return value + '% <small> <br> Completed</small>';
        },
        colors: ['rgba(232, 52, 43, .2)', '#e8342b'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    }); 

    /*Socre Target MODAL Circles */

    var myCircle = Circles.create({
        id: 'circles-reading-target',
        radius: 42,
        value: 70,
        maxValue: 100,
        width: 9, 
        colors: ['rgba(47, 218, 97, .2)', '#2fda61'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-writing-target',
        radius: 42,
        value: 70,
        maxValue: 100,
        width: 9, 
        colors: ['rgba(103, 184, 252, .2)', '#67b8fc'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-listening-target',
        radius: 42,
        value: 70,
        maxValue: 100,
        width: 9, 
        colors: ['rgba(24, 93, 146, .2)', '#185d92'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-speaking-target',
        radius: 42,
        value: 70,
        maxValue: 100,
        width: 9, 
        colors: ['rgba(236, 147, 95, .2)', '#ec935f'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-overall-target',
        radius: 42,
        value: 70,
        maxValue: 100,
        width: 9, 
        colors: ['rgba(232, 52, 43, .2)', '#e8342b'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    /*Side bar circle */
    var myCircle = Circles.create({
        id: 'circles-sidebar',
        radius: 18,
        value: 70,
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
    var myCircle = Circles.create({
        id: 'circles-sidebar-2',
        radius: 18,
        value: 70,
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
    
    var myCircle = Circles.create({
        id: 'circles-sidebar-3',
        radius: 18,
        value: 70,
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
    
    var myCircle = Circles.create({
        id: 'circles-sidebar-4',
        radius: 18,
        value: 70,
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

    //AI SCORE mODAL Cirlces
    var myCircle = Circles.create({
        id: 'circles-reading-score-modal',
        radius: 36,
        value: 18,
        maxValue: 32,
        width: 9, 
        colors: ['rgba(47, 218, 97, .2)', '#2fda61'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

    var myCircle = Circles.create({
        id: 'circles-speaking-score-modal',
        radius: 36,
        value: 70,
        maxValue: 100,
        width: 9, 
        colors: ['rgba(236, 147, 95, .2)', '#ec935f'],
        duration: 400,
        wrpClass: 'circles-wrp',
        textClass: 'circles-text',
        valueStrokeClass: 'circles-valueStroke',
        maxValueStrokeClass: 'circles-maxValueStroke',
        styleWrapper: true,
        styleText: true
    });

/*Countdown*/
// Create Countdown
var Countdown = {
  
    // Backbone-like structure
    $el: $('.countdown'),
    
    // Params
    countdown_interval: null,
    total_seconds     : 0,
    
    // Initialize the countdown  
    init: function() {
      
      // DOM
          this.$ = {
          hours  : this.$el.find('.bloc-time.hours .figure'),
          minutes: this.$el.find('.bloc-time.min .figure'),
          seconds: this.$el.find('.bloc-time.sec .figure')
         };
  
      // Init countdown values
      this.values = {
            hours  : this.$.hours.parent().attr('data-init-value'),
          minutes: this.$.minutes.parent().attr('data-init-value'),
          seconds: this.$.seconds.parent().attr('data-init-value'),
      };
      
      // Initialize total seconds
      this.total_seconds = this.values.hours * 60 * 60 + (this.values.minutes * 60) + this.values.seconds;
  
      // Animate countdown to the end 
      this.count();    
    },
    
    count: function() {
      
      var that    = this,
          $hour_1 = this.$.hours.eq(0),
          $hour_2 = this.$.hours.eq(1),
          $min_1  = this.$.minutes.eq(0),
          $min_2  = this.$.minutes.eq(1),
          $sec_1  = this.$.seconds.eq(0),
          $sec_2  = this.$.seconds.eq(1);
      
          this.countdown_interval = setInterval(function() {
  
          if(that.total_seconds > 0) {
  
              --that.values.seconds;              
  
              if(that.values.minutes >= 0 && that.values.seconds < 0) {
  
                  that.values.seconds = 59;
                  --that.values.minutes;
              }
  
              if(that.values.hours >= 0 && that.values.minutes < 0) {
  
                  that.values.minutes = 59;
                  --that.values.hours;
              }
  
              // Update DOM values
              // Hours
              that.checkHour(that.values.hours, $hour_1, $hour_2);
  
              // Minutes
              that.checkHour(that.values.minutes, $min_1, $min_2);
  
              // Seconds
              that.checkHour(that.values.seconds, $sec_1, $sec_2);
  
              --that.total_seconds;
          }
          else {
              clearInterval(that.countdown_interval);
          }
      }, 1000);    
    },
    
    animateFigure: function($el, value) {
      
       var that         = this,
               $top         = $el.find('.top'),
           $bottom      = $el.find('.bottom'),
           $back_top    = $el.find('.top-back'),
           $back_bottom = $el.find('.bottom-back');
  
      // Before we begin, change the back value
      $back_top.find('span').html(value);
  
      // Also change the back bottom value
      $back_bottom.find('span').html(value);
  
      // Then animate
      TweenMax.to($top, 0.8, {
          rotationX           : '-180deg',
          transformPerspective: 300,
            ease                : Quart.easeOut,
          onComplete          : function() {
  
              $top.html(value);
  
              $bottom.html(value);
  
              TweenMax.set($top, { rotationX: 0 });
          }
      });
  
      TweenMax.to($back_top, 0.8, { 
          rotationX           : 0,
          transformPerspective: 300,
            ease                : Quart.easeOut, 
          clearProps          : 'all' 
      });    
    },
    
    checkHour: function(value, $el_1, $el_2) {
      
      var val_1       = value.toString().charAt(0),
          val_2       = value.toString().charAt(1),
          fig_1_value = $el_1.find('.top').html(),
          fig_2_value = $el_2.find('.top').html();
  
      if(value >= 10) {
  
          // Animate only if the figure has changed
          if(fig_1_value !== val_1) this.animateFigure($el_1, val_1);
          if(fig_2_value !== val_2) this.animateFigure($el_2, val_2);
      }
      else {
  
          // If we are under 10, replace first figure with 0
          if(fig_1_value !== '0') this.animateFigure($el_1, 0);
          if(fig_2_value !== val_1) this.animateFigure($el_2, val_1);
      }    
    }
  };
  
  // Let's go !
  Countdown.init();

  /*EXAM Countdown cloc*/
  var clock;
		
  $(document).ready(function() {
      var clock;

      clock = $('.alfa-exam-countdown-clock').FlipClock(36024100,{
          clockFace: 'DailyCounter',
          autoStart: false,
          callbacks: {
              stop: function() {
                  $('.message').html('The clock has stopped!')
              }
          }
      });
              
      clock.setTime(220880);
      clock.setCountdown(true);
      clock.start();

  });
  
  /*Calender*/
 
//   $('#dailytask').datepicker({
//     todayHighlight: true,
//     multidate: true,
//   }) 

  var active_dates = ["18/6/2020","19/6/2020"];
  var active_dates_2 = ["20/6/2020"];

  $("#dailytask").datepicker({
    format: "dd/mm/yyyy",
    autoclose: true,
    todayHighlight: true,
    beforeShowDay: function(date){
        var d = date;
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1; //Months are zero based
        var curr_year = d.getFullYear();
        var formattedDate = curr_date + "/" + curr_month + "/" + curr_year

        if ($.inArray(formattedDate, active_dates) != -1){
          return {
             classes: 'active'
          };
        }

        if($.inArray(formattedDate, active_dates_2) != -1){
            return {
               classes: 'activeGray'
            };
          }
     return;
 }
})


  //$("#dailytask").datepicker("update", new Date('2020-05-19'), new Date('2020-05-20'), new Date('2020-05-22')) 
 


  $('#selectExamDate').datepicker({});
  $('#selectExamDate').datepicker().datepicker('setDate',new Date());


  //Active FAQ accordion radius
  $('.alfa-faq-card-main .accordion .card .card-header button').click (function(){
    var cardHeaderId = $(this).closest('.card-header').attr('id');
        $('.alfa-faq-card-main .accordion .card .card-header').css("border-radius","40px");
        $('#' + cardHeaderId).css("border-radius","0");  
  });

  //Active Today Task accordion radius
  $('.alfa-today-task-accordion-button').click (function(){
    var cardHeaderId = $(this).closest('.card-header').attr('id');
        $('.alfa-today-task-card .accordion .card .card-header').css("border-radius","40px");
        $('#' + cardHeaderId).css("border-radius","0"); 
  });

    //Go to top
    $('.alfa-sidebar-gotoTop').on('click', function(){
        $('.alfa-PT-sidebar .navbar-side .alfa-sidebar-container').animate({ scrollTop: "0" })
    });
    
    $('.dictionary-gotoTop').on('click', function(){
        $('body').animate({ scrollTop: "0" })
    });

    //SIDEBAR
    $('#navbarSideButton').on('click', function() {
        $('#navbarSide').toggleClass('reveal');
        $('#navbarSideButton img').toggleClass('rotate');
        $('.alfa-overlay').toggle();
        $('body').toggleClass('o-hidden');
        
        if($("#navbarSide").hasClass('reveal')){
            $("#navbarSideButton").trigger("alfa");  
        } 
    });

    //manage pagination
    $('.alfa-pagination').pagination({
        items: 20,
        itemOnPage: 8,
        currentPage: 1, 
        displayedPages: 2,
        edges: 2,
        prevText: '<span aria-hidden="true"><i class="fa fa-angle-left"></i></span>',
        nextText: '<span aria-hidden="true"><i class="fa fa-angle-right"></i></span>',
        onInit: function () {
            // fire first page loading
        },
        onPageClick: function (page, evt) {
            // some code
        } 
    });
 

    //to get event
    $("#navbarSideButton").on('alfa', function(){
        console.log('i am triggerrrrrrrrrrrr')
    });
        
    //show sidebar content loader
    setTimeout(function(){
        $(".content-ph-container").addClass('alfa-hide')
    },5500)


    //OPEN OVERLAY LOADER    
    triggerOverlay = function(){
        $(".alfa-overlay-with-loading").addClass('d-block');
        setTimeout(function(){
            $(".alfa-overlay-with-loading").removeClass('d-block');
        },5500)
    }

    //   $('.alfa-overlay').on('click', function(){
    //     $('#navbarSide').removeClass('reveal');
    //     $('.alfa-overlay').hide();
    //   });


    //RE-ORDER PARA - DRAG DROP
     
    
 //WAVE
 var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    height: 110,
    waveColor: '#b3b3b3',
    progressColor: '#ec935f',
    cursorColor: '#ccc',
    barWidth: 4,
    barHeight: 2, 
    barGap: 4,  
    barMinHeight: 1
});

wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');


var wavesurfer1 = WaveSurfer.create({
    container: '#waveform1',
    height: 100,
    waveColor: '#b3b3b3',
    progressColor: '#ec935f',
    cursorColor: '#ccc',
    barWidth: 4,
    barHeight: 2, 
    barGap: 4,  
    barMinHeight: 1
});

wavesurfer1.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

});

