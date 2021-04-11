//incident.js

let mongoose = require('mongoose');

//Create Model Class
let incidentModel = mongoose.Schema({
	number: Number,
	customer_name: String,
	description: String,
	narrative: String,
	priority: String,
	status: String,
	date: String
},
{
	collection: "incidents"
});

module.exports = mongoose.model('Incident', incidentModel);