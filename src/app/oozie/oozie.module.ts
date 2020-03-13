import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OozieRoutingModule } from './oozie-routing.module';
import { OIntroductionComponent } from './introduction/introduction.component';
import { Oozie } from './oozie';



@NgModule({
  declarations: [
    OIntroductionComponent,
    Oozie
  ],
  imports: [
    BrowserModule,
    OozieRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class OozieModule { }
