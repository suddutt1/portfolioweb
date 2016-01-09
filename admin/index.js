//Definding admin module
var express = require('express');
var router = express.Router();

//Handler admin page load
router.get('/home',function adminHome(req,res){
	var userInstance = req.session.user ;
	res.render('admin/home' , { user : userInstance,active: 'ADMIN' } );
});
//Handler reference data load


var REF_DATA_OPTIONS = [
	{code: 'sector' , desc : 'Sector'},
	{code: 'empType' , desc : 'Employee Type'},
	{code: 'role' , desc : 'Employee Role'},
	{code: 'skill' , desc : 'Employee Skill'},
	{code: 'location' , desc : 'Location'},
	{code: 'locationBlding' , desc : 'Location-building'},
	{code: 'band' , desc : 'Band'},
	{code: 'subBand' , desc : 'Sub-band'},
	{code: 'projectType' , desc : 'Project type'},
	{code: 'manageType' , desc : 'Manage type'},
	{code: 'projectPrimTech' , desc : 'Primary project technology'},
	{code: 'domainArea' , desc : 'Domain area'},
	{code: 'geography' , desc : 'Geography'},
	{code: 'releaseReason' , desc : 'Release Reason'},
	{code: 'attrReason' , desc : 'Attrition Reason'},
	{code: 'bc' , desc : 'Blue Community'},

];



router.get('/loadAddNewRefData',function loadAddNewRefData(req,res){
	var userInstance = req.session.user ;
	res.render('admin/addnewrefdata' , { user : userInstance,active: 'ADMIN' ,refDataList: REF_DATA_OPTIONS } );

});
router.get('/loadViewRefData',function loadAddNewRefData(req,res){
	var userInstance = req.session.user ;
	res.render('admin/viewrefdata' , { user : userInstance,active: 'ADMIN' ,refDataList: REF_DATA_OPTIONS } );

});
router.get('/getRefData',function getRefData(req,res){
	res.json({ data: [{ type:'refcode',code:'Code',displayValue: 'Displayed value'}]});
});
router.post('/saveNewRefData',function saveNewRefData(req,res){
	//Reading the input and responding to the result.
	res.json({ status:0,desc:'Save Success'});

});
var MGR_TYPEDATA_OPTIONS = [
	{code: 'pem' , desc : 'People Manager'},
	{code: 'tpm' , desc : 'Tower/Portfolio Manager'},
	{code: 'pal' , desc : 'Practice Area Lead(PAL)'},
	{code: 'am' , desc : 'Account manager'},
	{code: 'bam' , desc : 'Business Area Manager(BAM)'},
	{code: 'spmpm' , desc : 'SPM/PM'},
	{code: 'uompm' , desc : 'UOM Manager'},
	{code: 'pm' , desc : 'Project Manager'},
	{code: 'dpe' , desc : 'Delivery Project Executive(DPE)'},
	{code: 'dir' , desc : 'Director'}

];
router.get('/loadAddNewManager',function loadAddNewManager(req,res){
	var userInstance = req.session.user ;
	res.render('admin/addnewmgrdata' , { user : userInstance,active: 'ADMIN' ,mgrTypeList: MGR_TYPEDATA_OPTIONS } );

});
router.post('/saveNewMgrData',function saveNewRefData(req,res){
	//Reading the input and responding to the result.
	res.json({ status:0,desc:'Save Success'});

});
router.get('/loadAddNewUOM',function loadAddNewManager(req,res){
	var userInstance = req.session.user ;
	res.render('admin/addnewuomdata' , { user : userInstance,active: 'ADMIN' ,mgrTypeList: MGR_TYPEDATA_OPTIONS } );

});

module.exports = router;
