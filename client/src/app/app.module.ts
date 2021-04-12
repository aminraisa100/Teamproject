import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {IncidentListModule } from './incident-list/incident-list.module';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';




//below function will get id_token from localstorage
export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	IncidentListModule,
  
  JwtModule.forRoot({
    config: {
      tokenGetter: jwtTokenGetter
    }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
