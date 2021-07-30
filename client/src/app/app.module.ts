import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { SharedModule } from './_modules/shared.module';
import { HomeComponent } from './home/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsetComponent } from './components/skillset/skillset.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';


@NgModule({
  declarations: [ // components
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsetComponent,
    ContactMeComponent
  ],
  imports: [ // packages
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UiSwitchModule.forRoot({
      size: 'medium',
      color: '757474',
      switchColor: '#FDFDFD',
      defaultBgColor: '#B7B6B6',
      defaultBoColor: '#757474',
      checkedLabel: '🌞',
      uncheckedLabel: '🌜'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
