Meteor.methods({
  slackMessage: function(message) {
    Curl.request({
      url: SLACK_ENDPOINT,
      data: message
    });
  }
});
