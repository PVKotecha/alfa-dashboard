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
        duration: 400,
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

      clock = $('.alfa-exam-countdown-clock').FlipClock({
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

  $('#dailytask').datepicker({});
  $('#dailytask').datepicker().datepicker('setDate',new Date());

  $('#selectExamDate').datepicker({});
  $('#selectExamDate').datepicker().datepicker('setDate',new Date());


  //Active accordion radius
  $('.alfa-faq-card-main .accordion .card .card-header button').click (function(){
    var cardHeaderId = $(this).closest('.card-header').attr('id');
        $('.alfa-faq-card-main .accordion .card .card-header').css("border-radius","40px");
        $('#' + cardHeaderId).css("border-radius","0"); 
  });

  //Active accordion radius
  $('.alfa-today-task-accordion-button').click (function(){
    var cardHeaderId = $(this).closest('.card-header').attr('id');
        $('.alfa-today-task-card .accordion .card .card-header').css("border-radius","40px");
        $('#' + cardHeaderId).css("border-radius","0"); 
  });

});

