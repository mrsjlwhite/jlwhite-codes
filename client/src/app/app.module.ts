import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SharedModule } from './_modules/shared.module';
import { HomeComponent } from './home/home/home.component';


@NgModule({
  declarations: [ // components
    AppComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [ // packages
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
