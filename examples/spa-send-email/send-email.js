var request = require('request');

return function (context, cb) {
  request.post({
    url: 'https://api.sendgrid.com/api/mail.send.json',
    form: {
      'api_user': context.SENDGRID_USER,
      'api_key': context.SENDGRID_KEY,
      'to': context.to,
      'subject': 'Hello from WebTask sample!',
      'from': 'samples@webtask.io',
      'text': 'Test email from sample'
    }
  }, cb);
}
