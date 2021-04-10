import { NgModule } from '@angular/core';
import { IncidentRepository} from './incident.repository';
import { StaticDataSource} from './static.datasource';

@NgModule({
	providers: [IncidentRepository, StaticDataSource]
})
export class ModelModule {}