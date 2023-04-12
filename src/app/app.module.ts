import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CalendarioUcbPackageModule } from 'calendario-ucb-package';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


/* import { CalendarioUCBModule } from 'calendario-ucb-package/src/app/app.module';
import { CalendarioUCBComponent } from 'calendario-ucb-package/src/app/app.component'; */


//import { } from 'node_modules/calendario-ucb-package/src/app/app.module';// need: modules, providers, and components
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    CalendarioUcbPackageModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    //CalendarioUCBComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
