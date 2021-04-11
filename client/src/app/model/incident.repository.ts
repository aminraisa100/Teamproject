import { Injectable } from "@angular/core";
import { Incident } from './incident.model';
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource} from './static.datasource';

@Injectable()
export class IncidentRepository
{
	private incidents: Incident[] = [];
	private status: String[] = [];


	constructor(private dataSource: RestDataSource)
	{
		dataSource.getIncidents().subscribe(data => {
			this.incidents = data;
			this.status = data.map(i => i.status)
				.filter((s, index, array) => array.indexOf(s) === index).sort();
		})
	}

	getIncidents(status: string = null): Incident[]
	{
		return this.incidents
			.filter(i => status == null || status === i.status);
	}

	getIncident(id: number): Incident
	{
		return 	this.incidents.find(i => i._id === id);
	}

	getStatus(): String[]
	{
		return this.status;
	}
}