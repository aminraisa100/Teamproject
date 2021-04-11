import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { ListFirstGuard} from './guards/listFirst.guard';

const routes: Routes = [
	{path: 'home', component: IncidentListComponent, data: {title: 'Incident Dashboard'}, canActivate: [ListFirstGuard]},
	{path:'', redirectTo: '/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
