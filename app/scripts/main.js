'use strict';

var navigation = $('.navigation');
var offset = navigation.offset().top;

$(window).on('scroll', function() {
    if($(window).scrollTop() > offset + 20) {
        navigation.addClass('become-header');
    }
    else {
        navigation.removeClass('become-header');
    }

    // REREAD AND REFACTOR THIS
    $('section').each(function(){
        var actual = $(this),
            actualHeight = actual.height() + parseInt(actual.css('paddingTop').replace('px', '')) + parseInt(actual.css('paddingBottom').replace('px', '')),
            actualAnchor = navigation.find('a[href="#' + actual.attr('id') + '"]');
        if ( ( actual.offset().top - navigation.height() <= $(window).scrollTop() ) && ( actual.offset().top +  actualHeight - navigation.height() > $(window).scrollTop() ) ) {
            actualAnchor.addClass('active');
        }
        else {
            actualAnchor.removeClass('active');
        }
    });
});

$('.navigation').find('a').on('click', function(event) {
    event.preventDefault();
    var target= $(this.hash);
    $('body, html').stop().animate({
        'scrollTop': target.offset().top
        }, 1500, 'easeInOutExpo'
    ); 
});

$('.project-overlay').click(function(event) {
    $(event.currentTarget).css('top', '-100%');
    $(event.currentTarget).siblings('img').css('top', '-100%');
});

$('.project-details').click(function(event) {
    $(event.currentTarget).siblings('.project-overlay').css('top', '0px');
    $(event.currentTarget).siblings('img').css('top', '0px');
});