import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { Hw2Component } from './hw2/hw2.component';
import { Hw3Component } from './hw3/hw3.component'; 

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Hw2Component,
    Hw3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
