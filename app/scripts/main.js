'use strict';

var $navigation = $('.navigation');
var offset = $navigation.offset().top;

// TODO: import lodash and do some dependency management
Array.prototype.equals = function (array) {
  if (!array)
    return false;

  if (this.length != array.length)
    return false;

  for (var i = 0, l=this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i]))
        return false;
    }
    else if (this[i] != array[i]) {
      return false;
    }
  }
  return true;
};

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

var currentPos = [];
$('.project-details').on('mousedown', function (evt) {
  var $target = $(evt.currentTarget);
  currentPos = [ evt.pageX, evt.pageY ];

  $('.project-details').on('mousemove', function handler(evt) {
    currentPos = [ evt.pageX, evt.pageY ];
    $('.project-details').off('mousemove', handler);
  });

  $('.project-details').on('mouseup', function handler(evt) {
    if([ evt.pageX, evt.pageY ].equals(currentPos)) {
      $target.siblings('.project-overlay').css('top', '0px');
      $target.siblings('img').css('top', '0px');
    }
    $('.project-details').off('mouseup', handler);
  });
});

// Project Navigation

var current = 0;

function getCssInteger(str) {
  return Number(str.replace(/[^-\d\.]/g, ''));
}

$('.arrow-left').click(function(event) {
  event.preventDefault();
  if (current > 0) {
    current -= 1;
    $('.project-wrapper-list').css('left', - current * 753);
  }
});

$('.arrow-right').click(function(event) {
  event.preventDefault();
  if (current < 6) {
    current += 1;
    $('.project-wrapper-list').css('left', - current * 753);
  }
});
