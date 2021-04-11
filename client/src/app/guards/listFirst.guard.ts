import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

import { IncidentListComponent } from "../incident-list/incident-list.component";




@Injectable()
export class ListFirstGuard
{
	private firstNavigation = true;

	constructor(private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
	{
		if(this.firstNavigation)
		{
			this.firstNavigation = false;
			if (route.component !==  IncidentListComponent)
			{
				this.router.navigateByUrl('/home');
				return false;
			}
		}
		return true;
	}
}