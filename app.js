var request = require('request');

// TODO(you): set the appropriate environment variables
var sendgrid = require('sendgrid')(process.env.SENDGRID_USER, process.env.SENDGRID_PASS);

// time range for this day 1 year ago
var today = new Date(),
afterTimestamp = (new Date(today.getFullYear()-1, today.getMonth(), today.getDate()).getTime()) / 1000;
beforeTimestamp = afterTimestamp + (60*60*24);

// TODO(you): fill this in with the user's foursquare oauth token.
// for more details, see https://developer.foursquare.com/overview/auth
var oauth_token = '';

// construct the foursquare URL to call using the oauth_token and time ranges.
// this API endpoint returns all the check-ins of a particular user (with an optional time range).
// for more details, see https://developer.foursquare.com/docs/users/checkins
var url = 'https://api.foursquare.com/v2/users/self/checkins?oauth_token=' + oauth_token + '&v=20130927&afterTimestamp=' + afterTimestamp + '&beforeTimestamp=' + beforeTimestamp;

// actually make the HTTP request
request(url, function(err, response, body) {
  // for details on the response format, see https://developer.foursquare.com/docs/responses/checkin
  var venues = JSON.parse(body).response.checkins.items;
  var emailBody = '';
  for (var i = 0; i < venues.length; i++) {
    emailBody += '<li>' + venues[i].venue.name + '</li>';
  }

  // send email with sendgrid. 
  // TODO(you): fill in appropriate to/from values
  sendgrid.send({
    to: '',
    from: '',
    subject: 'Your day 1 year ago!',
    html: '<ul>' + emailBody + '</ul>'
  }, function(err, resp) {
    if(!err) console.log('success!');
  });
});