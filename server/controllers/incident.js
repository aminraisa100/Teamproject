//incident.js
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var moment = require('moment-timezone');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Incident = require('../models/incident');

module.exports.displayIncidentsList = (req, res, next) => {
    Incident.find((err,incidentList) => {
		if(err)
		{
			return console.log(err);
		}
		else
		{
			/*
			res.render('incident/list', 
            {title: 'Incident Dashboard', 
            IncidentList: incidentList,
            displayName: req.user ? req.user.displayName : ''});
			*/

			res.json(incidentList);
		}
	});
}

module.exports.displayAddPage = (req, res, next) => {
    /*
	res.render('incident/add', {title: 'Create Incident',
    displayName: req.user ? req.user.displayName : ''})      
	*/

	res.json({success: true, msg: 'Successfully Displayed Add Page'});
}



module.exports.processAddPage = (req, res, next) => {

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
			//res.redirect('/incident');

			res.json({success: true, msg: 'Successfully Added a New Incident'});
		}
	});

}

module.exports.displayEditPage = (req, res, next) => {
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
			/*
			res.render('incident/edit', {title: 'Update Incident', incident: incidentToEdit,
            displayName: req.user ? req.user.displayName : ''})
			*/

			res.json({success: true, msg: 'Successfully Displayed Incident to Edit', incident: incidentToEdit});
		}
	});
}

module.exports.processEditPage = (req, res, next) => {
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
			//res.redirect('/incident');
			
			res.json({success: true, msg: 'Successfully Edited an Incident', incident: updatedIncident});
		}
	});
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

	Incident.deleteOne({_id: id}, (err) =>{
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			//refresh Incident List 
			//res.redirect('/incident');

			res.json({success: true, msg: 'Successfully Deleted an Incident'});
		}
	});
}