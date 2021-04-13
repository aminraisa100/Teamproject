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

	saveIncident(savedIncident: Incident): void
	{
		if (savedIncident._id === null || savedIncident._id === 0 || savedIncident === undefined )
		{
			this.dataSource.addIncident(savedIncident).subscribe(i => {
				this.incidents.push(savedIncident);
			});
		}
		else
		{
			this.dataSource.updateIncident(savedIncident).subscribe(incident => {
				this.incidents.splice(this.incidents.findIndex(i => i._id === savedIncident._id), 1, savedIncident)
			})
		}
	}

	deleteIncident(deletedIncidentID : number): void
	{
		this.dataSource.deleteIncident(deletedIncidentID).subscribe(incident => {
			this.incidents.splice(this.incidents.findIndex(i => i._id === deletedIncidentID), 1);
		})
	}
}