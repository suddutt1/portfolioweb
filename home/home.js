var express = require('express');
var router = express.Router();

//Define loing page load
router.get('/',function loginLoad(req,res){

	var userInstance = req.session.user ;
	res.render('home/home',{ user : userInstance, active: 'HOME' } );
});

module.exports = router;