'use strict';

var $navigation = $('.navigation');
var offset = $navigation.offset().top;

$(window).on('scroll', function() {
    if($(window).scrollTop() > offset + 20) {
        $navigation.addClass('become-header');
    }
    else {
        $navigation.removeClass('become-header');
    }

    $('section').each(function(){
        var $section = $(this),
            $sectionAnchor = $navigation.find('a[href="#' + $section.attr('id') + '"]');
        if (( $section.offset().top - $navigation.height() <= $(window).scrollTop()) &&
            ( $section.offset().top +  $section.outerHeight() - $navigation.height() > $(window).scrollTop())) {
            $sectionAnchor.addClass('active');
        }
        else {
            $sectionAnchor.removeClass('active');
        }
    });
});

$navigation.find('a').on('click', function(event) {
    event.preventDefault();
    var target = $(this.hash);
    $('body, html').stop().animate({
        'scrollTop': target.offset().top
        }, 1500, 'easeInOutExpo'
    );
    $('.navigation ul').removeClass('is-visible');
});

$('.navigation-trigger').on('click', function(event) {
  event.preventDefault();
  $('.navigation ul').toggleClass('is-visible');
});

$('.project-overlay').click(function(event) {
    $(event.currentTarget).css('top', '-100%');
    $(event.currentTarget).siblings('img').css('top', '-100%');
});

$('.project-details').click(function(event) {
    $(event.currentTarget).siblings('.project-overlay').css('top', '0px');
    $(event.currentTarget).siblings('img').css('top', '0px');
});
