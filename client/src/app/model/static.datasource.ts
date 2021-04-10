import { Injectable } from "@angular/core";
import { Incident } from './incident.model';
import { Observable, from} from 'rxjs';


@Injectable()
export class StaticDataSource
{
	orders: []
	private incidents: Incident[] =
	[
		new Incident(1, 20210401, 'Test1','Two machine issue', 'tech issue', 'low', 'Not responded', '2021-04-01'),
		new Incident(2, 20210402, 'Test2','Workflow issue', 'Workflow', 'low', 'Worked upon', '2021-04-02'),
		new Incident(3, 20210403, 'Test3','App not working', 'tech issue', 'medium', 'Not responded', '2021-04-03'),
		new Incident(4, 20210404, 'Test4','Getting errors', 'issues', 'high', 'Actively working', '2021-04-04'),
		new Incident(5, 20210405, 'Test5','older version', 'performance', 'low', 'Not responded', '2021-04-05'),
		new Incident(6, 20210406, 'Test6','Screen is not opening', 'performance', 'low', 'Actively working', '2021-04-06'),
		new Incident(7, 20210407, 'Test7','Slowness issue', 'performance', 'low', 'Addressed', '2021-04-07'),
		new Incident(8, 20210408, 'Test8','Slowness', 'performance', 'low', 'Not responded', '2021-04-08'),
		new Incident(9, 20210409, 'Test9','Need to fix ASAP', 'tech issue', 'low', 'Addressed', '2021-04-09'),
		new Incident(10, 20210410, 'Test10','2 computer issues', 'screen issue', 'low', 'Actively working', '2021-04-10'),
		new Incident(11, 20210411, 'Test11','not able to login', 'performance', 'low', 'Not responded', '2021-04-11'),
		new Incident(12, 20210412, 'Test12','Color missing', 'performance', 'high', 'Actively working', '2021-04-12'),
		new Incident(13, 20210413, 'Test13','Not able to find print option', 'Workflow issue', 'medium', 'Addressed', '2021-04-13'),
		new Incident(14, 20210414, 'Test14','Scanner', 'performance', 'low', 'Not responded', '2021-04-14'),
		new Incident(15, 20210415, 'Test15','printed blur', 'workflow issue', 'high', 'Not responded', '2021-04-15')

	]

	getIncidents(): Observable<Incident[]>
	{
		return from([this.incidents]);
	}
}