Template.eecs111.onRendered(function() {

});

Template.eecs111.events({
  "click #blah": function(event, template){
    $('.rotating-nav').toggleClass('visible');
    $('main').toggleClass('nav-is-visible');
  }
});
