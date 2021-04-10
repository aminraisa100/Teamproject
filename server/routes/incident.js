var moment = require('moment-timezone');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to incident Model
let Incident = require('../models/incident');

/* GET Route for the Incident List page - READ operation */
router.get('/', (req, res, next) =>{
	Incident.find((err,incidentList) => {
		if(err)
		{
			return console.log(err);
		}
		else
		{
			res.render('incident/list', {title: 'Incident Dashboard', IncidentList: incidentList })
		}
	});
});
// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


/* GET Route for the Displaying Add page - CREATE operation */
router.get('/add',(req, res, next)=>{
	res.render('incident/add', {title: 'Create Incident'})
})

/* POST Route for the Processing Add page - CREATE operation */
router.post('/add',(req, res, next)=>{
	/* Code to set datetime for created date column */
	var d = new Date();
	var myTimezone = "America/Toronto";
	var myDatetimeFormat= "YYYY-MM-DD hh:mm:ss a z";
	var myDatetimeString = moment(d).tz(myTimezone).format(myDatetimeFormat);
	
	/*Code to create Incident number automatically */
	
	var year =  myDatetimeString.toString().slice(0,4);
	var month = myDatetimeString.toString().slice(5,7);
	var date = myDatetimeString.toString().slice(8,10);
	var date_time = year.concat(month,date);
	var n_date_time = Number(date_time)

	

	/*Code to add numbeer after date in Incident*/

	
	let newIncident = Incident({
		"number": n_date_time,
		"customer_name": req.body.customer_name,
		"description": req.body.description,
		"narrative": "Not responded",
		"priority": req.body.priority,
		"status": "New",
		"date": myDatetimeString
	});

	Incident.create(newIncident, (err, Incident) => {
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			//refresh the Incident List
			res.redirect('/');
		}
	});
})

/* GET Route for the Displaying Edit page - UPDATE operation */
router.get('/edit/:id',(req, res, next)=>{
	let id = req.params.id;

	Incident.findById(id, (err, incidentToEdit) =>{
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			//Show Edit View
			res.render('incident/edit', {title: 'Update Incident', incident: incidentToEdit })
		}
	});
});
/* POST Route for the Processing Edit page - UPDATE operation */
router.post('/edit/:id',(req, res, next)=>{
	let id = req.params.id;
	
	/* Code to set datetime for created date column */
	var d = new Date();
	var myTimezone = "America/Toronto";
	var myDatetimeFormat= "YYYY-MM-DD hh:mm:ss a z";
	var myDatetimeString = moment(d).tz(myTimezone).format(myDatetimeFormat);

	let updatedIncident = Incident({
		"_id": id,
		"number": (new Date()).toString(),
		"customer_name": req.body.customer_name,
		"description": req.body.description,
		"narrative": req.body.narrative,
		"priority": req.body.priority,
		"status": req.body.status,
		"date": myDatetimeString
	});

	Incident.updateOne({_id:id}, updatedIncident, (err) => {
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			//refresh Incident List 
			res.redirect('/');
		}
	});
})

/* GET to perform Deletion- DELETE operation */
router.get('/delete/:id',(req, res, next)=>{
	let id = req.params.id

	

	Incident.remove({_id: id}, (err) =>{
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			//refresh Incident List 
			res.redirect('/');
		}
	});
})




module.exports = router;