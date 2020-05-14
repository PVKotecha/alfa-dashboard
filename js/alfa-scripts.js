$(document).ready(function() {
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
    
});

