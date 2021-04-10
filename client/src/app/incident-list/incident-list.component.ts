import { Component } from '@angular/core';
import { Incident} from '../model/incident.model';
import { IncidentRepository } from '../model/incident.repository';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent 
{
	public selectedStatus = null;
	public incidentsPerPage = 4;
	public selectedPage = 1;
  constructor( private repository: IncidentRepository) { }



  get incidents(): Incident[]
  {
	  const pageIndex = (this.selectedPage - 1) * this.incidentsPerPage;
	  return this.repository.getIncidents(this.selectedStatus)
	  	.slice(pageIndex, pageIndex + this.incidentsPerPage);
  }

  get status(): String[]
  {
	  return this.repository.getStatus();
  }

  changeStatus(newStatus?: String): void
  {
	  this.selectedStatus = newStatus;
  }

  changePage(newPage: number): void
  {
	  this.selectedPage = newPage
  }

  changePageSize(newSize: number): void
  {
	  this.incidentsPerPage = Number(newSize);
	  this.changePage(1);
  }

  get pageCount(): number
  {
	  return Math.ceil(this.repository
	  	.getIncidents(this.selectedStatus).length / this.incidentsPerPage );
  }

}
