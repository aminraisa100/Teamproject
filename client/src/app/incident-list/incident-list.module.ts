import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { IncidentListComponent} from '../incident-list/incident-list.component';
import { CounterDirective} from './counter.directive';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [ ModelModule, BrowserModule, FormsModule, RouterModule],
	declarations: [IncidentListComponent, CounterDirective],
	exports: [IncidentListComponent, CounterDirective]
})
export class IncidentListModule {}