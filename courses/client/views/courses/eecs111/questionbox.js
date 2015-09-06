Template.eecs111QuestionBox.events({
  'submit #question': function(event, template) {
    event.preventDefault();
    var email = event.target.email.value;
    var question = event.target.question.value;

    var chatMessage = email ? email + " asked:\n" : "Someone asked:\n";
    chatMessage += question;
    Meteor.call('slackMessage', chatMessage, function(error, result) {
      if (error) {
        console.log('error', error);
      }
      if (result) {

      }
    });
  }
});
