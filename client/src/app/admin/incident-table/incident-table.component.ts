import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from 'src/app/model/incident.model';
import { IncidentRepository } from 'src/app/model/incident.repository';

@Component({
  selector: 'app-incident-table',
  templateUrl: './incident-table.component.html',
  styleUrls: ['./incident-table.component.css']
})
export class IncidentTableComponent implements OnInit {

  constructor(private repository: IncidentRepository,
              private router: Router) { }

  ngOnInit(): void {
  }

  getIncidents(): Incident[]
  {
    return this.repository.getIncidents();
  }

  deleteIncident(id: number): void
  { 
    if (confirm('Are you sure?'))
    {
    this.repository.deleteIncident(id);
    }
    else
    {
      this.router.navigateByUrl('/admin/main/incidents');
    }
  }

}
