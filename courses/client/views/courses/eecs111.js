var MenuOption = {
  Home: 'home',
  Syllabus: 'syllabus',
  QuestionBox: 'questionBox'
};

Template.eecs111.onRendered(function() {
  // var hash = window.location.hash;
  // if (hash) {
  //   Session.set('selectedOption', hash.slice(1));
  // }
  // else {
  Session.set('selectedOption', MenuOption.Home);
  // }
});

Template.eecs111.helpers({
  home: function() {
    return Session.get('selectedOption') == MenuOption.Home;
  },
  syllabus: function() {
    return Session.get('selectedOption') == MenuOption.Syllabus;
  }
});

Template.eecs111.events({
  'click .rotating-nav-toggle': function(event, template) {
    var $this = $(event.currentTarget);
    $('.rotating-nav').toggleClass('visible');
    $('main').toggleClass('nav-is-visible');
    $this.toggleClass('glyphicon-menu-hamburger');
    $this.toggleClass('glyphicon-remove');
  },
});
