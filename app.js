// Configuration
var SMTP_HOST = "smtp.sendgrid.net";
var SMTP_USERNAME = "";
var SMTP_PASSWORD = "";
var TO = "";
var FROM = "";

// Modules
var Hapi = require('hapi');
var handlebars = require('handlebars');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var gravatar = require('gravatar');

// Setup SMTP
var transporter = nodemailer.createTransport(smtpTransport({
  host: SMTP_HOST,
  port: 587,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD
  }
}));

// Create a server with a host and port
var server = new Hapi.Server('localhost', 3000);

server.route({
  method: 'GET',
  path: '/{filename*}',
  handler: {
    directory: {
      path:    __dirname + '/public',
      listing: false,
      index:   false
    }
  }
});

// Setup hapi views
server.views({
  engines: {
    html: handlebars
  },
  basePath: __dirname,
  path: './views',
  layoutPath: './views/layout',
});

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    // send the email
    var mailOptions = {
      from: FROM,
      to: TO,
      subject: '❤Catenv-y❤', 
      html: '<h2>❤Catenv-y❤</h2><br/><img src="http://edgecats.net/"/>'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if(error){
        console.log(error);
      }else{
        console.log('Message sent: ' + info.response);
      }
    });

    var gravatar_url = gravatar.url(TO, {s: '200'}, https=false);

    reply.view('index', { email: TO, gravatar_url: gravatar_url });
  }
});

server.start(function() {
  console.log('Server running at:', server.info.uri);
});
