import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentListComponent } from './incident-list/incident-list.component';

const routes: Routes = [
	{path: 'home', component: IncidentListComponent, data: {title: 'Incident Dashboard'}},
	{path:'', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
