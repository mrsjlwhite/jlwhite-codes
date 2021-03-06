import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UiSwitchModule } from 'ngx-ui-switch';
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    UiSwitchModule
    // ToastrModule.forRoot({
    //   positionClass: 'toast-bottom-right'
    // }),
  ],
  exports: [
    BsDropdownModule,
    TabsModule,
    UiSwitchModule
    // ToastrModule,
  ]
})
export class SharedModule { }
