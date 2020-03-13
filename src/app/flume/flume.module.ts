import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlumeRoutingModule } from './flume-routing.module';
import { FIntroductionComponent } from './introduction/introduction.component';
import { Flume } from './flume';



@NgModule({
  declarations: [
    FIntroductionComponent,
    Flume
  ],
  imports: [
    BrowserModule,
    FlumeRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FlumeModule { }
