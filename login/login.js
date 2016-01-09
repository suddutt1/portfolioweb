//Definding login module 
var express = require('express');
var router = express.Router();

//Define loing page load
router.get('/',function loginLoad(req,res){

	res.render('login/login' ,{ errorMsg: null});
});
router.get('/logout',function logout(req,res){
	req.session.destroy(function(err) {
			if(err)
			{
  				console.log("Can not destroy session " + err.stack);
  			}
  			else
  			{
  				console.log("Exiting ...");
  			}
		});
	res.redirect('/login');
});
router.post('/authenticate',function loginLoad(req,res){
	var user = {};
	
	//Get the user id and password and validate
	var userId = req.body.uid;
	var pwd = req.body.pwd;
	console.log("User "+ userId+" is trying to login ");
	if(userId !=null && userId === 'admin' && pwd === 'passw0rd')
	{
		user.userId = 'admin';
		user.userRole = 'ADMIN' ; 
		req.session.user = user;
		//GO TO HOME PAGE
		res.redirect('/home' );
	}
	else if(pwd === 'passw0rd')
	{
		user.userId = userId;
		user.userRole = 'MGR' ; 
		req.session.user = user;
		//GO TO HOME PAGE
		res.redirect('/home' );

	}
	else
	{
		//LOAD login page again
		res.render('login/login' ,{errorMsg : 'Invalid credentials'} );
	}
	
	
	
});

module.exports = router;