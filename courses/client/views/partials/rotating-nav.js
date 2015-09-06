Template.rotatingNav.events({
  'click .rotating-nav ul li': function(event, template) {
    var $this = $(event.currentTarget);
    $('.selector').css('left', $this.offset().left);
    Session.set('selectedOption', $this.find('a').attr('href').slice(1));
    setTimeout(function() {
       $('.rotating-nav-toggle').click();
    }, 500);
  }
})
