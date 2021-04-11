import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Incident } from "./incident.model";
import { JwtHelperService } from "@auth0/angular-jwt"


const PROTOCOL = 'http';
const PORT = '3000';



@Injectable()
export class RestDataSource
{
	baseUrl: string;
	authToken: string;

	private httpOptions = 
	{
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
		})
	};

	constructor(private http: HttpClient, private jwtService: JwtHelperService)
	{
		this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`
	}

	getIncidents(): Observable<Incident[]>
	{
		return this.http.get<Incident[]>(this.baseUrl + 'incident-list');
	
	}


	private loadToken(): void
	{
		const token = localStorage.getItem('id_token');
		this.authToken = token;
		this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
	}

}