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

/* GET Route for the Displaying Add page - CREATE operation */
router.get('/add',(req, res, next)=>{
	res.render('incident/add', {title: 'Create Incident'})
})

/* POST Route for the Processing Add page - CREATE operation */
router.post('/add',(req, res, next)=>{
	let newIncident = Incident({
		"number": req.body.number,
		"customer_name": req.body.customer_name,
		"description": req.body.description,
		"narrative": "Not responded",
		"priority": req.body.priority,
		"status": "New",
		"date": new Date()
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
			res.redirect('/incident-list');
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

	let updatedIncident = Incident({
		"_id": id,
		"number": req.body.number,
		"customer_name": req.body.customer_name,
		"description": req.body.description,
		"narrative": req.body.narrative,
		"priority": req.body.priority,
		"status": req.body.status,
		"date": new Date()
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
			res.redirect('/incident-list');
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
			res.redirect('/incident-list');
		}
	});
})




module.exports = router;