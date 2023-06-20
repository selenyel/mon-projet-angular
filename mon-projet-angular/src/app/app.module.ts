import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';
import { Hw2Component } from './hw2/hw2.component';
import { Hw3Component } from './hw3/hw3.component';
import { Hw4Component } from './hw4/hw4.component';
import { GameControlComponent } from './hw4/game-control/game-control.component';
import { OddComponent } from './hw4/odd/odd.component';
import { EvenComponent } from './hw4/even/even.component'; 
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { DirectiveComponent } from './directive/directive.component';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    Hw2Component,
    Hw3Component,
    Hw4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    DirectiveComponent,
    BetterHighlightDirective
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
