// Main entry file for Portfolio Web application
var express = require('express') ;
var router = express.router;
var bodyParser = require('body-parser');
var session = require('express-session');

// I am going to add other modules here
var adminModule  = require('./admin');
var loginModule  = require('./login');
var homeModule = require('./home/home');
//Define the application 

var app = express();
//Set the view engine
app.set('view engine', 'ejs');

//Adding the common middlewares

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'shhhh, very secret'
}));


//Add the login module
app.use('/login',loginModule);
app.use(express.static('thirdparty'));
//Add the check login 
app.all('*',checkLogin);
function checkLogin(req,res,next){

	//Check if session data exists 
	//if not redirect user to login page
	var ss  = req.session;
	if(ss.user)
	{
		next();
	}
	else
	{
		
		res.redirect('/login');
	}
}

//Adding rest of the modules
app.use('/admin',adminModule);
app.use('/home',homeModule);





//Add the default handler
app.use(function( req, res, next) {
  //console.error(err.stack);
  res.status(500).send('Something broke!');
});


//Start the server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Portfolio application is listening at http://%s:%s', host, port);
});