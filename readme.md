# tinyhop

Recreates the [original](http://techcrunch.com/2011/02/21/4squareand7yearsago/) conception
of [Timehop](http://timehop.com/) with very little code using the
[Foursquare](https://developer.foursquare.com/) and [SendGrid](http://sendgrid.com/developer)
APIs. 

Detailed explanation of how this works in the comments of app.js, but steps required to get this to run:

1. [Create an app](https://foursquare.com/developers/apps) on Foursquare
2. [Get a Foursquare OAuth token](https://developer.foursquare.com/overview/auth). Fill in `oauth_token`
with this value. (For a quick and dirty way to get just your OAuth token, see 
[Runscope's nifty OAuth tool](https://www.runscope.com/oauth2_tool))
3. [Sign up](http://sendgrid.com/) for a SendGrid account. (Easy way:
[http://hack.sendgrid.com/](http://hack.sendgrid.com/)) Set `SENDGRID_USER` and `SENDGRID_PASS`
environment variables to your new SendGrid credentials.
4. Fill in `to` and `from` fields within the `sendgrid.send` object.
5. Run `npm install` followed by `node app.js`