import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { IncidentEditorComponent } from './incident-editor/incident-editor.component';

import { IncidentTableComponent } from './incident-table/incident-table.component';




const routing = RouterModule.forChild([
    { path:'auth', component: AuthComponent },
    { path:'main', component: AdminComponent, canActivate: [AuthGuard],
    children: [
        { path: 'incidents/:mode/:id', component: IncidentEditorComponent, data: {title: 'Edit Incident'}, canActivate: [AuthGuard]},
        { path: 'incidents/:mode', component: IncidentEditorComponent, data: {title: 'Add Incident'}, canActivate: [AuthGuard]},
        { path: 'incidents', component: IncidentTableComponent, data: {title: 'Incident Table'}, canActivate: [AuthGuard]},
        { path:'**', redirectTo: 'home'}] 
    },

    { path:'**', redirectTo: 'auth'},
]);

@NgModule({
    imports: [ CommonModule, FormsModule, routing],
    providers: [ AuthGuard],
    declarations: [ AuthComponent, AdminComponent, IncidentEditorComponent, IncidentTableComponent]
})
export class AdminModule {}