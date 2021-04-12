import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { ListFirstGuard} from './guards/listFirst.guard';

const routes: Routes = [
	{path: 'home', component: IncidentListComponent, data: {title: 'Incident Dashboard'}, canActivate: [ListFirstGuard]},
  {path:'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
	{path:'', redirectTo: '/home', pathMatch:'full'},
  {path: '**', redirectTo: '/home',  pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ListFirstGuard]
})
export class AppRoutingModule { }
