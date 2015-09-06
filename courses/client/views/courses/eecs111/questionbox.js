Template.eecs111QuestionBox.onRendered(function() {
  var delay = 2500,
      $words = $('.rotating-words span'),
      current = 0,
      length = $words.length;

  function rotateWord() {
    var next = (current + 1 == length) ? 0 : current + 1;
    $words.removeClass('hiding');
    $words.removeClass('visible');
    $($words[current]).addClass('hiding');
    $($words[next]).addClass('visible');
    current = next;
    setTimeout(rotateWord, delay);
  }

  setTimeout(rotateWord, delay);
});

Template.eecs111QuestionBox.events({
  'submit #question': function(event, template) {
    event.preventDefault();
    var email = event.target.email.value;
    var question = event.target.question.value;

    var chatMessage = email ? email + " asked:\n" : "Someone asked:\n";
    chatMessage += question;
    Meteor.call('slackMessage', chatMessage, function(error, result) {
      if (error) {
        alert.log('I must have messed something up. Oops! Email me your question and send me this error.', error);
      }
      if (result) {
        $('.success-text').show();
        event.target.reset();
      }
    });
  }
});
