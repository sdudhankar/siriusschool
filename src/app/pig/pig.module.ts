import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PigRoutingModule } from './pig-routing.module';
import { PIntroductionComponent } from './introduction/introduction.component';
import { Pig } from './pig';



@NgModule({
  declarations: [
    PIntroductionComponent,
    Pig
  ],
  imports: [
    BrowserModule,
    PigRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class PigModule { }
